/* Very Simple shader that shows the depth of the fragments.
 * I like the foggy aspect of this shader.
 */
#include <common>

void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}