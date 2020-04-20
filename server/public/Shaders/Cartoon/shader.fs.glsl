#define TOON
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSPARENCY
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
const float shininess = 2.0;
uniform float transparency;
uniform float reflectivity;
uniform float clearcoat;
uniform float clearcoatRoughness;
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
#ifndef FLAT_SHADED
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <specularmap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

const int LAPGAUSS_SIZE = 7;
const vec2 LAPGAUSS_FILTER[LAPGAUSS_SIZE] =
vec2[] (
	vec2(-3.0,	-0.121597),
	vec2(-2.0,	-0.142046),
	vec2(-1.0,	-0.155931),
	vec2(0.0,	0.160854 * 6.),
	vec2(1.0,	-0.155931),
	vec2(2.0,	-0.142046),
	vec2(3.0,	-0.121597)
);

const vec3 FRESNEL_COLOR = vec3(0.6);
const float FRESNEL_EXPONENT = 10.;

void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	//#include <map_fragment>
#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vec2(0.4, 0.4) ); // purely arbitrary
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>

	#include <normal_fragment_maps>

#if defined( TANGENTSPACE_NORMALMAP )
	mapN = vec3(0.0);
	vec2 mapN_size = vec2(textureSize(normalMap, 0));
	vec2 mapN_scale = vec2(1.) / mapN_size;
	for( int i = 0; i < LAPGAUSS_SIZE; i++ )
	{
		vec2 texCoord = vUv + vec2(LAPGAUSS_FILTER[i].x * mapN_scale.x, LAPGAUSS_FILTER[i].x * mapN_scale.y);
		if(texCoord.x < 0.) texCoord.x += 1.;
		if(texCoord.y < 0.) texCoord.y += 1.;
		if(texCoord.x > 1.) texCoord.x -= 1.;
		if(texCoord.y > 1.) texCoord.y -= 1.;
		mapN += texture2D( normalMap, texCoord).rgb * LAPGAUSS_FILTER[i].y;
	}
	mapN = 1.0 - (mapN * 2.0 - 1.0);
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#endif

	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <specularmap_fragment>
#ifdef USE_SPECULARMAP
	vec3 specular = texelSpecular.rgb;
#else
	vec3 specular = vec3(0.);
#endif
	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	// modulation
	#include <aomap_fragment>

	// for fresnel contouring
	float fresnel = dot(vNormal, vViewPosition);
	fresnel = saturate(1.0 - fresnel);
	fresnel = pow(fresnel, FRESNEL_EXPONENT);
	vec3 fresnelColor = fresnel * diffuseColor.rgb * FRESNEL_COLOR;
	totalEmissiveRadiance -= fresnelColor; // for negative effect

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	// this is a stub for the transparency model
	diffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );
	gl_FragColor = vec4(outgoingLight, diffuseColor.a);
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}