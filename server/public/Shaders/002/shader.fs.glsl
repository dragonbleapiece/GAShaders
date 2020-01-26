#include <common>
uniform vec3 diffuse;
uniform float opacity;
#include <uv_pars_fragment>
#include <map_pars_fragment>

void main() {
	//gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <map_fragment>
	//gl_FragColor =  texture2D(map, vUv);
	gl_FragColor =  diffuseColor;
}