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

// can't explain
float r(float n)
{
 	return fract(abs(sin(n*55.753)*367.34));   
}

// can't explain
float r(vec2 n)
{
    return r(dot(n,vec2(2.46,-1.21)));
}

// create small triangles pattern
// the normal is here to orientate the shapes
vec3 smallTrianglesColor(vec3 pos, vec3 nor)
{
    float a = (radians(60.0));
    float zoom = 0.5;
	vec2 c = (pos.xy + vec2(0.0, pos.z)) * vec2(sin(a),1.0);//scaled coordinates
    c = ((c+vec2(nor.y,0.0)*cos(a))/zoom) + vec2(floor((nor.x-nor.y*cos(a))/zoom*4.0)/4.0,0.0);//Add rotations
    float type = (r(floor(c*4.0))*0.2+r(floor(c*2.0))*0.3+r(floor(c))*0.5);//Randomize type
    type += 0.2 * sin(u_time*5.0*type);
    
    float l = min(min((1.0 - (2.0 * abs(fract((c.x-c.y)*4.0) - 0.5))),
        	      (1.0 - (2.0 * abs(fract(c.y * 4.0) - 0.5)))),
                  (1.0 - (2.0 * abs(fract(c.x * 4.0) - 0.5))));
    l = smoothstep(0.06, 0.04, l);
	
	return mix(type, l, 0.5) * vec3(0.2,0.5,1);
} 

// create large triangles pattern
// the normal is here to orientate the shapes
vec3 largeTrianglesColor(vec3 pos, vec3 nor)
{
    float a = (radians(60.0));
    float zoom = 2.0;
	vec2 c = (pos.xy + vec2(0.0, pos.z)) * vec2(sin(a),1.0);//scaled coordinates
    c = ((c+vec2(nor.y,0.0)*cos(a))/zoom) + vec2(floor((nor.x-nor.y*cos(a))/zoom*4.0)/4.0,0.0);//Add rotations
    
    float l = min(min((1.0 - (2.0 * abs(fract((c.x-c.y)*4.0) - 0.5))),
        	      (1.0 - (2.0 * abs(fract(c.y * 4.0) - 0.5)))),
                  (1.0 - (2.0 * abs(fract(c.x * 4.0) - 0.5))));
    l = smoothstep(0.03, 0.02, l);
	
	return mix(0.01, l, 0.5) * vec3(0.2,0.5,1);
}

// create the radar
vec3 radar( in vec3 pos, in vec3 nor )
{
	// radar propagation speed
	float speed = 0.1;
	// minimal radius of the sphere
	float radius = 0.5;
	// maximal radius of the radar border
	float maxBorder = 20.;

	// time variable
	float var = mod(u_time * speed, 1.0);

	// create the sphere
	CGA p1 = point(radius, 0., 0.);
	CGA p2 = point(0., radius, 0.);
	CGA p3 = point(0., 0., -radius);
	CGA p4 = point(0., -radius, 0.);

	// sphere = (p1 ^ p2) ^ (p3 ^ p4)
	CGA sphere = meet(meet(p1, p2), meet(p3, p4));
	
	// dilator
	CGA scale = dilator(var);
	//CGA t = translator(smul(cos(u_time * speed), get_e1()));
	
	// dilated sphere = scale * sphere * inv(scale)
	CGA scaledSphere = geometric(geometric(scale, sphere), reverse(scale));

	// convert vertex positions to CGA point
	CGA pVertex = point(pos);

	// get the distance between the point and the sphere
	// res = max(0, pVertex | !scaledSphere)
	float res = max(0., dot(pVertex, dual(scaledSphere)).one);
	float border = maxBorder * var;

    vec3 c1 = largeTrianglesColor(pos, nor);
    vec3 c = smallTrianglesColor(pos, nor);
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