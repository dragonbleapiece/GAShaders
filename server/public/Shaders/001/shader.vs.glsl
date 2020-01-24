uniform vec3 uColor; // we declare the uniform
void main(){
  gl_FragColor = vec4(uColor, 1.); //we hardcode the alpha 
}