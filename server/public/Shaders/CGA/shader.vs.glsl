#include <common>
#include <cga>
#include <uv_pars_vertex>

void main() {
	#include <uv_vertex>

	CGA e1 = get_e1();
	CGA e2 = get_e2();
	CGA e3 = get_e3();

	CGA gaPoint = point(position.x, position.y, position.z);

	// Elements of the even subalgebra (scalar + bivector + pss) of unit length are motors
  	CGA dil = dilator( 1. );
  
	// The outer product ^ is the MEET. Here we intersect the yz (x=0) and xz (y=0) planes.
	//PGA3D ax_z = meet(e1, e2);
	
	// line and plane meet in point. We intersect the line along the z-axis (x=0,y=0) with the xy (z=0) plane.
	//PGA3D orig = meet(ax_z, e3);
	
	// We can also easily create points and join them into a line using the regressive (vee, &) product.
	//PGA3D line = join(orig, gaPoint);

	//PGA3D gaCircle = circle(0., PI_HALF, line);

	CGA res = geoProduct(geoProduct(dil, gaPoint), reverse(dil));

	gl_Position = projectionMatrix * modelViewMatrix * CGA2vec4(res);
}