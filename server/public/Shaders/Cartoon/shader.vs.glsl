#include <common>
#include <uv_pars_vertex>

void main() {
	#include <uv_vertex>
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}