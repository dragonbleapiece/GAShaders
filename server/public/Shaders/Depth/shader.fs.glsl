#include <common>

void main() {

    gl_FragColor = vec4(vec3(pow(gl_FragCoord.z, 10.)), 1.0);
}