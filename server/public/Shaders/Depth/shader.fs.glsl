#include <common>
uniform vec3 diffuse;
uniform float opacity;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <normalmap_pars_fragment>

void main() {
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

    gl_FragColor = vec4(vec3(pow(gl_FragCoord.z, 10.)), 1.0);
}