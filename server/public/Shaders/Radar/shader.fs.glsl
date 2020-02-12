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

#include <cga>
uniform float u_time;

// inspired by https://www.shadertoy.com/view/4tlXWs

// dunno what is it
float r(float n)
{
 	return fract(abs(sin(n*55.753)*367.34));   
}

float r(vec2 n)
{
    return r(dot(n,vec2(2.46,-1.21)));
}

vec3 smallTrianglesColor(vec3 pos)
{
    float a = (radians(60.0));
    float zoom = 0.5;
	vec2 c = (pos.xy + vec2(0.0, pos.z)) * vec2(sin(a),1.0);//scaled coordinates
    c = ((c+vec2(c.y,0.0)*cos(a))/zoom) + vec2(floor((c.x-c.y*cos(a))/zoom*4.0)/4.0,0.0);//Add rotations
    float type = (r(floor(c*4.0))*0.2+r(floor(c*2.0))*0.3+r(floor(c))*0.5);//Randomize type
    type += 0.2 * sin(u_time*5.0*type);
    
    float l = min(min((1.0 - (2.0 * abs(fract((c.x-c.y)*4.0) - 0.5))),
        	      (1.0 - (2.0 * abs(fract(c.y * 4.0) - 0.5)))),
                  (1.0 - (2.0 * abs(fract(c.x * 4.0) - 0.5))));
    l = smoothstep(0.06, 0.04, l);
	
	return mix(type, l, 0.5) * vec3(0.2,0.5,1);
} 

vec3 largeTrianglesColor(vec3 pos)
{
    float a = (radians(60.0));
    float zoom = 2.0;
	vec2 c = (pos.xy + vec2(0.0, pos.z)) * vec2(sin(a),1.0);//scaled coordinates
    c = ((c+vec2(c.y,0.0)*cos(a))/zoom) + vec2(floor((c.x-c.y*cos(a))/zoom*4.0)/4.0,0.0);//Add rotations
    
    float l = min(min((1.0 - (2.0 * abs(fract((c.x-c.y)*4.0) - 0.5))),
        	      (1.0 - (2.0 * abs(fract(c.y * 4.0) - 0.5)))),
                  (1.0 - (2.0 * abs(fract(c.x * 4.0) - 0.5))));
    l = smoothstep(0.03, 0.02, l);
	
	return mix(0.01, l, 0.5) * vec3(0.2,0.5,1);
}

vec3 radar( in vec3 pos, in vec3 nor )
{
	float speed = 0.1;
	float maxRadius = 0.5;
	float maxBorder = 20.;
	float var = abs(mod(u_time * speed, 1.0));

	CGA p1 = point(maxRadius, 0., 0.);
	CGA p2 = point(0., maxRadius, 0.);
	CGA p3 = point(0., 0., -maxRadius);
	CGA p4 = point(0., -maxRadius, 0.);
	CGA sphere = meet(meet(p1, p2), meet(p3, p4));
	CGA scale = dilator(var);
	//CGA t = translator(smul(cos(u_time * speed), get_e1()));
	CGA scaledSphere = geometric(geometric(scale, sphere), reverse(scale));

	CGA pVertex = point(pos);

	float res = abs(dot(pVertex, dual(scaledSphere)).one);
	float border = maxBorder * var;

	vec3 n = normalize(vec3(res));
    vec3 c1 = largeTrianglesColor(pos);
    vec3 c = smallTrianglesColor(pos);
    c *= smoothstep(border - 1.0, border - 2.5, res);
	c += c1;
    c = mix(c, vec3(0.01), smoothstep(border - 4.0, border - 10.0, res));
    c = mix(c, vec3(0.01), smoothstep(border - 1.0, border, res));
    c = mix(c, vec3(0.01), smoothstep(9.0, maxBorder, border));
    
    return c;
} 

void main() {
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	// material
	vec3 mal = radar( vViewPosition.xyz, normal );
	vec3 col = pow( clamp(mal,0.0,1.0), vec3(0.5) );

	//vec4 diffuseColor = vec4( col, opacity );
	//#include <map_fragment>

    gl_FragColor = vec4(col, 1.0);
}