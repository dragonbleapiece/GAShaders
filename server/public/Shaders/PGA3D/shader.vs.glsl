#include <common>
#include <pga3d>
#include <uv_pars_vertex>

void main() {
	#include <uv_vertex>

	PGA3D e1 = get_e1();
	PGA3D e2 = get_e2();
	PGA3D e3 = get_e3();

	PGA3D gaPoint = point(position.x, position.y, position.z);

	// Elements of the even subalgebra (scalar + bivector + pss) of unit length are motors
  	PGA3D rot = rotor( PI_HALF, geoProduct(e1, e2) );
  
	// The outer product ^ is the MEET. Here we intersect the yz (x=0) and xz (y=0) planes.
	//PGA3D ax_z = meet(e1, e2);
	
	// line and plane meet in point. We intersect the line along the z-axis (x=0,y=0) with the xy (z=0) plane.
	//PGA3D orig = meet(ax_z, e3);
	
	// We can also easily create points and join them into a line using the regressive (vee, &) product.
	//PGA3D line = join(orig, gaPoint);

	//PGA3D gaCircle = circle(0., PI_HALF, line);

	PGA3D res = geoProduct(geoProduct(rot, gaPoint), reverse(rot));

	gl_Position = projectionMatrix * modelViewMatrix * PGA3D2vec4(res);
}