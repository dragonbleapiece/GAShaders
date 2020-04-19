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

const int GAUSS_SIZE = 7;
const vec2 GAUSS_FILTER[GAUSS_SIZE] =
vec2[] (
	vec2(-3.0,	0.121597),
	vec2(-2.0,	0.142046),
	vec2(-1.0,	0.155931),
	vec2(0.0,	0.160854),
	vec2(1.0,	0.155931),
	vec2(2.0,	0.142046),
	vec2(3.0,	0.121597)
);

const vec2 GAUSS_SCALE = vec2(1.0, 1.0);
// Scale is vec2(0, 1.0/height ) for vertical blur and vec2(1.0/width, 0 ) for horizontal blur

void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	//#include <map_fragment>
#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vec2(0., 0.) );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	//#include <normal_fragment_maps>

#ifdef TANGENTSPACE_NORMALMAP 
	vec3 normalMap_blur = vec3(0.0);
	for( int i = 0; i < GAUSS_SIZE; i++ )
	{
		normalMap_blur += texture2D( normalMap, vec2( vUv.x + GAUSS_FILTER[i].x * GAUSS_SCALE.x, vUv.y + GAUSS_FILTER[i].x * GAUSS_SCALE.y ) ).rgb * GAUSS_FILTER[i].y;
	}
	normalMap_blur.xy *= normalScale;
	normal = normalize(vTBN  * normalMap_blur);
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