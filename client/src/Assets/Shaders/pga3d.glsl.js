export default `
// 3D Projective Geometric Algebra
// Inspired by a c++ code written by a generator written by enki.
// https://github.com/enkimute/ganja.js/blob/master/codegen/cpp/pga3d.cpp

/* 0 => "1",
 * 1 => "e0",
 * 2 => "e1",
 * 3 => "e2",
 * 4 => "e3",
 * 5 => "e01",
 * 6 => "e02",
 * 7 => "e03",
 * 8 => "e12",
 * 9 => "e31",
 * 10 => "e23",
 * 11 => "e021",
 * 12 => "e013",
 * 13 => "e032",
 * 14 => "e123",
 * 15 => "e0123"
*/


struct PGA3D {
  float one;
  float e0;
  float e1;
  float e2;
  float e3;
  float e01;
  float e02;
  float e03;
  float e12;
  float e31;
  float e23;
  float e021;
  float e013;
  float e032;
  float e123;
  float e0123;
};

// Init a PGA3D struct with default values
PGA3D initPGA3D() {
  return PGA3D(0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.);
}

// Init a PGA3D struct
PGA3D initPGA3D(float f, int idx) {
  PGA3D res = initPGA3D();
  
  if(idx == 0) {
    res.one = f;
  } else if(idx == 1) {
    res.e0 = f;
  } else if(idx == 2) {
    res.e1 = f;
  } else if(idx == 3) {
    res.e2 = f;
  } else if(idx == 4) {
    res.e3 = f;
  } else if(idx == 5) {
    res.e01 = f;
  } else if(idx == 6) {
    res.e02 = f;
  } else if(idx == 7) {
    res.e03 = f;
  } else if(idx == 8) {
    res.e12 = f;
  } else if(idx == 9) {
    res.e31 = f;
  } else if(idx == 10) {
    res.e23 = f;
  } else if(idx == 11) {
    res.e021 = f;
  } else if(idx == 12) {
    res.e013 = f;
  } else if(idx == 13) {
    res.e032 = f;
  } else if(idx == 14) {
    res.e123 = f;
  } else if(idx == 15) {
    res.e0123 = f;
  }

  return res;
}

//***********************
// PGA3D.Reverse : res = ~a
// Reverse the order of the basis blades.
//***********************
PGA3D reverse(PGA3D a) {
  PGA3D res;
  res.one=a.one;
  res.e0=a.e0;
  res.e1=a.e1;
  res.e2=a.e2;
  res.e3=a.e3;
  res.e01=-a.e01;
  res.e02=-a.e02;
  res.e03=-a.e03;
  res.e12=-a.e12;
  res.e31=-a.e31;
  res.e23=-a.e23;
  res.e021=-a.e021;
  res.e013=-a.e013;
  res.e032=-a.e032;
  res.e123=-a.e123;
  res.e0123=a.e0123;
  return res;
}

//***********************
// PGA3D.Dual : res = !a
// Poincare duality operator.
//***********************
PGA3D dual(PGA3D a) {
  PGA3D res;
  res.one=a.e0123;
  res.e0=a.e123;
  res.e1=a.e032;
  res.e2=a.e013;
  res.e3=a.e021;
  res.e01=a.e23;
  res.e02=a.e31;
  res.e03=a.e12;
  res.e12=a.e03;
  res.e31=a.e02;
  res.e23=a.e01;
  res.e021=a.e3;
  res.e013=a.e2;
  res.e032=a.e1;
  res.e123=a.e0;
  res.e0123=a.one;
  return res;
}

//***********************
// PGA3D.Conjugate : res = a.Conjugate()
// Clifford Conjugation
//***********************
PGA3D conjugate (PGA3D a) {
  PGA3D res;
  res.one=a.one;
  res.e0=-a.e0;
  res.e1=-a.e1;
  res.e2=-a.e2;
  res.e3=-a.e3;
  res.e01=-a.e01;
  res.e02=-a.e02;
  res.e03=-a.e03;
  res.e12=-a.e12;
  res.e31=-a.e31;
  res.e23=-a.e23;
  res.e021=a.e021;
  res.e013=a.e013;
  res.e032=a.e032;
  res.e123=a.e123;
  res.e0123=a.e0123;
  return res;
}

//***********************
// PGA3D.Involute : res = a.Involute()
// Main involution
//***********************
PGA3D involute (PGA3D a) {
  PGA3D res;
  res.one=a.one;
  res.e0=-a.e0;
  res.e1=-a.e1;
  res.e2=-a.e2;
  res.e3=-a.e3;
  res.e01=a.e01;
  res.e02=a.e02;
  res.e03=a.e03;
  res.e12=a.e12;
  res.e31=a.e31;
  res.e23=a.e23;
  res.e021=-a.e021;
  res.e013=-a.e013;
  res.e032=-a.e032;
  res.e123=-a.e123;
  res.e0123=a.e0123;
  return res;
}

//***********************
// PGA3D.Mul : res = a * b 
// The geometric product.
//***********************
PGA3D geoProduct (PGA3D a, PGA3D b) {
  PGA3D res;
  res.one=b.one*a.one+b.e1*a.e1+b.e2*a.e2+b.e3*a.e3-b.e12*a.e12-b.e31*a.e31-b.e23*a.e23-b.e123*a.e123;
  res.e0=b.e0*a.one+b.one*a.e0-b.e01*a.e1-b.e02*a.e2-b.e03*a.e3+b.e1*a.e01+b.e2*a.e02+b.e3*a.e03+b.e021*a.e12+b.e013*a.e31+b.e032*a.e23+b.e12*a.e021+b.e31*a.e013+b.e23*a.e032+b.e0123*a.e123-b.e123*a.e0123;
  res.e1=b.e1*a.one+b.one*a.e1-b.e12*a.e2+b.e31*a.e3+b.e2*a.e12-b.e3*a.e31-b.e123*a.e23-b.e23*a.e123;
  res.e2=b.e2*a.one+b.e12*a.e1+b.one*a.e2-b.e23*a.e3-b.e1*a.e12-b.e123*a.e31+b.e3*a.e23-b.e31*a.e123;
  res.e3=b.e3*a.one-b.e31*a.e1+b.e23*a.e2+b.one*a.e3-b.e123*a.e12+b.e1*a.e31-b.e2*a.e23-b.e12*a.e123;
  res.e01=b.e01*a.one+b.e1*a.e0-b.e0*a.e1-b.e021*a.e2+b.e013*a.e3+b.one*a.e01-b.e12*a.e02+b.e31*a.e03+b.e02*a.e12-b.e03*a.e31-b.e0123*a.e23-b.e2*a.e021+b.e3*a.e013+b.e123*a.e032-b.e032*a.e123-b.e23*a.e0123;
  res.e02=b.e02*a.one+b.e2*a.e0+b.e021*a.e1-b.e0*a.e2-b.e032*a.e3+b.e12*a.e01+b.one*a.e02-b.e23*a.e03-b.e01*a.e12-b.e0123*a.e31+b.e03*a.e23+b.e1*a.e021+b.e123*a.e013-b.e3*a.e032-b.e013*a.e123-b.e31*a.e0123;
  res.e03=b.e03*a.one+b.e3*a.e0-b.e013*a.e1+b.e032*a.e2-b.e0*a.e3-b.e31*a.e01+b.e23*a.e02+b.one*a.e03-b.e0123*a.e12+b.e01*a.e31-b.e02*a.e23+b.e123*a.e021-b.e1*a.e013+b.e2*a.e032-b.e021*a.e123-b.e12*a.e0123;
  res.e12=b.e12*a.one+b.e2*a.e1-b.e1*a.e2+b.e123*a.e3+b.one*a.e12+b.e23*a.e31-b.e31*a.e23+b.e3*a.e123;
  res.e31=b.e31*a.one-b.e3*a.e1+b.e123*a.e2+b.e1*a.e3-b.e23*a.e12+b.one*a.e31+b.e12*a.e23+b.e2*a.e123;
  res.e23=b.e23*a.one+b.e123*a.e1+b.e3*a.e2-b.e2*a.e3+b.e31*a.e12-b.e12*a.e31+b.one*a.e23+b.e1*a.e123;
  res.e021=b.e021*a.one-b.e12*a.e0+b.e02*a.e1-b.e01*a.e2+b.e0123*a.e3-b.e2*a.e01+b.e1*a.e02-b.e123*a.e03-b.e0*a.e12+b.e032*a.e31-b.e013*a.e23+b.one*a.e021+b.e23*a.e013-b.e31*a.e032+b.e03*a.e123-b.e3*a.e0123;
  res.e013=b.e013*a.one-b.e31*a.e0-b.e03*a.e1+b.e0123*a.e2+b.e01*a.e3+b.e3*a.e01-b.e123*a.e02-b.e1*a.e03-b.e032*a.e12-b.e0*a.e31+b.e021*a.e23-b.e23*a.e021+b.one*a.e013+b.e12*a.e032+b.e02*a.e123-b.e2*a.e0123;
  res.e032=b.e032*a.one-b.e23*a.e0+b.e0123*a.e1+b.e03*a.e2-b.e02*a.e3-b.e123*a.e01-b.e3*a.e02+b.e2*a.e03+b.e013*a.e12-b.e021*a.e31-b.e0*a.e23+b.e31*a.e021-b.e12*a.e013+b.one*a.e032+b.e01*a.e123-b.e1*a.e0123;
  res.e123=b.e123*a.one+b.e23*a.e1+b.e31*a.e2+b.e12*a.e3+b.e3*a.e12+b.e2*a.e31+b.e1*a.e23+b.one*a.e123;
  res.e0123=b.e0123*a.one+b.e123*a.e0+b.e032*a.e1+b.e013*a.e2+b.e021*a.e3+b.e23*a.e01+b.e31*a.e02+b.e12*a.e03+b.e03*a.e12+b.e02*a.e31+b.e01*a.e23-b.e3*a.e021-b.e2*a.e013-b.e1*a.e032-b.e0*a.e123+b.one*a.e0123;
  return res;
}

//***********************
// PGA3D.Wedge : res = a ^ b 
// The outer product. (MEET)
//***********************
PGA3D meet(PGA3D a, PGA3D b) {
  PGA3D res;
  res.one=b.one*a.one;
  res.e0=b.e0*a.one+b.one*a.e0;
  res.e1=b.e1*a.one+b.one*a.e1;
  res.e2=b.e2*a.one+b.one*a.e2;
  res.e3=b.e3*a.one+b.one*a.e3;
  res.e01=b.e01*a.one+b.e1*a.e0-b.e0*a.e1+b.one*a.e01;
  res.e02=b.e02*a.one+b.e2*a.e0-b.e0*a.e2+b.one*a.e02;
  res.e03=b.e03*a.one+b.e3*a.e0-b.e0*a.e3+b.one*a.e03;
  res.e12=b.e12*a.one+b.e2*a.e1-b.e1*a.e2+b.one*a.e12;
  res.e31=b.e31*a.one-b.e3*a.e1+b.e1*a.e3+b.one*a.e31;
  res.e23=b.e23*a.one+b.e3*a.e2-b.e2*a.e3+b.one*a.e23;
  res.e021=b.e021*a.one-b.e12*a.e0+b.e02*a.e1-b.e01*a.e2-b.e2*a.e01+b.e1*a.e02-b.e0*a.e12+b.one*a.e021;
  res.e013=b.e013*a.one-b.e31*a.e0-b.e03*a.e1+b.e01*a.e3+b.e3*a.e01-b.e1*a.e03-b.e0*a.e31+b.one*a.e013;
  res.e032=b.e032*a.one-b.e23*a.e0+b.e03*a.e2-b.e02*a.e3-b.e3*a.e02+b.e2*a.e03-b.e0*a.e23+b.one*a.e032;
  res.e123=b.e123*a.one+b.e23*a.e1+b.e31*a.e2+b.e12*a.e3+b.e3*a.e12+b.e2*a.e31+b.e1*a.e23+b.one*a.e123;
  res.e0123=b.e0123*a.one+b.e123*a.e0+b.e032*a.e1+b.e013*a.e2+b.e021*a.e3+b.e23*a.e01+b.e31*a.e02+b.e12*a.e03+b.e03*a.e12+b.e02*a.e31+b.e01*a.e23-b.e3*a.e021-b.e2*a.e013-b.e1*a.e032-b.e0*a.e123+b.one*a.e0123;
  return res;
}

//***********************
// PGA3D.Vee : res = a & b 
// The regressive product. (JOIN)
//***********************
PGA3D join(PGA3D a, PGA3D b) {
  PGA3D res;
  res.e0123=b.e0123*a.e0123;
  res.e123=b.e123*a.e0123+b.e0123*a.e123;
  res.e032=b.e032*a.e0123+b.e0123*a.e032;
  res.e013=b.e013*a.e0123+b.e0123*a.e013;
  res.e021=b.e021*a.e0123+b.e0123*a.e021;
  res.e23=b.e23*a.e0123+b.e032*a.e123-b.e123*a.e032+b.e0123*a.e23;
  res.e31=b.e31*a.e0123+b.e013*a.e123-b.e123*a.e013+b.e0123*a.e31;
  res.e12=b.e12*a.e0123+b.e021*a.e123-b.e123*a.e021+b.e0123*a.e12;
  res.e03=b.e03*a.e0123+b.e013*a.e032-b.e032*a.e013+b.e0123*a.e03;
  res.e02=b.e02*a.e0123-b.e021*a.e032+b.e032*a.e021+b.e0123*a.e02;
  res.e01=b.e01*a.e0123+b.e021*a.e013-b.e013*a.e021+b.e0123*a.e01;
  res.e3=b.e3*a.e0123-b.e03*a.e123+b.e31*a.e032-b.e23*a.e013-b.e013*a.e23+b.e032*a.e31-b.e123*a.e03+b.e0123*a.e3;
  res.e2=b.e2*a.e0123-b.e02*a.e123-b.e12*a.e032+b.e23*a.e021+b.e021*a.e23-b.e032*a.e12-b.e123*a.e02+b.e0123*a.e2;
  res.e1=b.e1*a.e0123-b.e01*a.e123+b.e12*a.e013-b.e31*a.e021-b.e021*a.e31+b.e013*a.e12-b.e123*a.e01+b.e0123*a.e1;
  res.e0=b.e0*a.e0123+b.e01*a.e032+b.e02*a.e013+b.e03*a.e021+b.e021*a.e03+b.e013*a.e02+b.e032*a.e01+b.e0123*a.e0;
  res.one=b.one*a.e0123+b.e0*a.e123+b.e1*a.e032+b.e2*a.e013+b.e3*a.e021+b.e01*a.e23+b.e02*a.e31+b.e03*a.e12+b.e12*a.e03+b.e31*a.e02+b.e23*a.e01-b.e021*a.e3-b.e013*a.e2-b.e032*a.e1-b.e123*a.e0+b.e0123*a.one;
  return res;
}

//***********************
// PGA3D.Dot : res = a | b 
// The inner product.
//***********************
PGA3D dot (PGA3D a, PGA3D b) {
  PGA3D res;
  res.one=b.one*a.one+b.e1*a.e1+b.e2*a.e2+b.e3*a.e3-b.e12*a.e12-b.e31*a.e31-b.e23*a.e23-b.e123*a.e123;
  res.e0=b.e0*a.one+b.one*a.e0-b.e01*a.e1-b.e02*a.e2-b.e03*a.e3+b.e1*a.e01+b.e2*a.e02+b.e3*a.e03+b.e021*a.e12+b.e013*a.e31+b.e032*a.e23+b.e12*a.e021+b.e31*a.e013+b.e23*a.e032+b.e0123*a.e123-b.e123*a.e0123;
  res.e1=b.e1*a.one+b.one*a.e1-b.e12*a.e2+b.e31*a.e3+b.e2*a.e12-b.e3*a.e31-b.e123*a.e23-b.e23*a.e123;
  res.e2=b.e2*a.one+b.e12*a.e1+b.one*a.e2-b.e23*a.e3-b.e1*a.e12-b.e123*a.e31+b.e3*a.e23-b.e31*a.e123;
  res.e3=b.e3*a.one-b.e31*a.e1+b.e23*a.e2+b.one*a.e3-b.e123*a.e12+b.e1*a.e31-b.e2*a.e23-b.e12*a.e123;
  res.e01=b.e01*a.one-b.e021*a.e2+b.e013*a.e3+b.one*a.e01-b.e0123*a.e23-b.e2*a.e021+b.e3*a.e013-b.e23*a.e0123;
  res.e02=b.e02*a.one+b.e021*a.e1-b.e032*a.e3+b.one*a.e02-b.e0123*a.e31+b.e1*a.e021-b.e3*a.e032-b.e31*a.e0123;
  res.e03=b.e03*a.one-b.e013*a.e1+b.e032*a.e2+b.one*a.e03-b.e0123*a.e12-b.e1*a.e013+b.e2*a.e032-b.e12*a.e0123;
  res.e12=b.e12*a.one+b.e123*a.e3+b.one*a.e12+b.e3*a.e123;
  res.e31=b.e31*a.one+b.e123*a.e2+b.one*a.e31+b.e2*a.e123;
  res.e23=b.e23*a.one+b.e123*a.e1+b.one*a.e23+b.e1*a.e123;
  res.e021=b.e021*a.one+b.e0123*a.e3+b.one*a.e021-b.e3*a.e0123;
  res.e013=b.e013*a.one+b.e0123*a.e2+b.one*a.e013-b.e2*a.e0123;
  res.e032=b.e032*a.one+b.e0123*a.e1+b.one*a.e032-b.e1*a.e0123;
  res.e123=b.e123*a.one+b.one*a.e123;
  res.e0123=b.e0123*a.one+b.one*a.e0123;
  return res;
}

//***********************
// PGA3D.Add : res = a + b 
// Multivector addition
//***********************
PGA3D add(PGA3D a, PGA3D b) {
  PGA3D res;
    res.one = a.one+b.one;
  res.e0 = a.e0+b.e0;
  res.e1 = a.e1+b.e1;
  res.e2 = a.e2+b.e2;
  res.e3 = a.e3+b.e3;
  res.e01 = a.e01+b.e01;
  res.e02 = a.e02+b.e02;
  res.e03 = a.e03+b.e03;
  res.e12 = a.e12+b.e12;
  res.e31 = a.e31+b.e31;
  res.e23 = a.e23+b.e23;
  res.e021 = a.e021+b.e021;
  res.e013 = a.e013+b.e013;
  res.e032 = a.e032+b.e032;
  res.e123 = a.e123+b.e123;
  res.e0123 = a.e0123+b.e0123;
  return res;
}

//***********************
// PGA3D.Sub : res = a - b 
// Multivector subtraction
//***********************
PGA3D substract(PGA3D a, PGA3D b) {
  PGA3D res;
    res.one = a.one-b.one;
  res.e0 = a.e0-b.e0;
  res.e1 = a.e1-b.e1;
  res.e2 = a.e2-b.e2;
  res.e3 = a.e3-b.e3;
  res.e01 = a.e01-b.e01;
  res.e02 = a.e02-b.e02;
  res.e03 = a.e03-b.e03;
  res.e12 = a.e12-b.e12;
  res.e31 = a.e31-b.e31;
  res.e23 = a.e23-b.e23;
  res.e021 = a.e021-b.e021;
  res.e013 = a.e013-b.e013;
  res.e032 = a.e032-b.e032;
  res.e123 = a.e123-b.e123;
  res.e0123 = a.e0123-b.e0123;
  return res;
}

//***********************
// PGA3D.smul : res = a * b 
// scalar/multivector multiplication
//***********************
PGA3D smul (float a, PGA3D b) {
  PGA3D res;
    res.one = a*b.one;
  res.e0 = a*b.e0;
  res.e1 = a*b.e1;
  res.e2 = a*b.e2;
  res.e3 = a*b.e3;
  res.e01 = a*b.e01;
  res.e02 = a*b.e02;
  res.e03 = a*b.e03;
  res.e12 = a*b.e12;
  res.e31 = a*b.e31;
  res.e23 = a*b.e23;
  res.e021 = a*b.e021;
  res.e013 = a*b.e013;
  res.e032 = a*b.e032;
  res.e123 = a*b.e123;
  res.e0123 = a*b.e0123;
  return res;
}

//***********************
// PGA3D.muls : res = a * b 
// multivector/scalar multiplication
//***********************
PGA3D muls (const PGA3D a, const float b) {
  PGA3D res;
    res.one = a.one*b;
  res.e0 = a.e0*b;
  res.e1 = a.e1*b;
  res.e2 = a.e2*b;
  res.e3 = a.e3*b;
  res.e01 = a.e01*b;
  res.e02 = a.e02*b;
  res.e03 = a.e03*b;
  res.e12 = a.e12*b;
  res.e31 = a.e31*b;
  res.e23 = a.e23*b;
  res.e021 = a.e021*b;
  res.e013 = a.e013*b;
  res.e032 = a.e032*b;
  res.e123 = a.e123*b;
  res.e0123 = a.e0123*b;
  return res;
}

//***********************
// PGA3D.sadd : res = a + b 
// scalar/multivector addition
//***********************
PGA3D sadd (float a, PGA3D b) {
  PGA3D res;
  res.one = a+b.one;
    res.e0 = b.e0;
  res.e1 = b.e1;
  res.e2 = b.e2;
  res.e3 = b.e3;
  res.e01 = b.e01;
  res.e02 = b.e02;
  res.e03 = b.e03;
  res.e12 = b.e12;
  res.e31 = b.e31;
  res.e23 = b.e23;
  res.e021 = b.e021;
  res.e013 = b.e013;
  res.e032 = b.e032;
  res.e123 = b.e123;
  res.e0123 = b.e0123;
  return res;
}

//***********************
// PGA3D.adds : res = a + b 
// multivector/scalar addition
//***********************
PGA3D adds (PGA3D a, float b) {
  PGA3D res;
  res.one = a.one+b;
    res.e0 = a.e0;
  res.e1 = a.e1;
  res.e2 = a.e2;
  res.e3 = a.e3;
  res.e01 = a.e01;
  res.e02 = a.e02;
  res.e03 = a.e03;
  res.e12 = a.e12;
  res.e31 = a.e31;
  res.e23 = a.e23;
  res.e021 = a.e021;
  res.e013 = a.e013;
  res.e032 = a.e032;
  res.e123 = a.e123;
  res.e0123 = a.e0123;
  return res;
}

//***********************
// PGA3D.ssub : res = a - b 
// scalar/multivector subtraction
//***********************
PGA3D ssub (float a, PGA3D b) {
  PGA3D res;
  res.one = a-b.one;
    res.e0 = -b.e0;
  res.e1 = -b.e1;
  res.e2 = -b.e2;
  res.e3 = -b.e3;
  res.e01 = -b.e01;
  res.e02 = -b.e02;
  res.e03 = -b.e03;
  res.e12 = -b.e12;
  res.e31 = -b.e31;
  res.e23 = -b.e23;
  res.e021 = -b.e021;
  res.e013 = -b.e013;
  res.e032 = -b.e032;
  res.e123 = -b.e123;
  res.e0123 = -b.e0123;
  return res;
}

//***********************
// PGA3D.subs : res = a - b 
// multivector/scalar subtraction
//***********************
PGA3D subs (PGA3D a, float b) {
  PGA3D res;
  res.one = a.one-b;
    res.e0 = a.e0;
  res.e1 = a.e1;
  res.e2 = a.e2;
  res.e3 = a.e3;
  res.e01 = a.e01;
  res.e02 = a.e02;
  res.e03 = a.e03;
  res.e12 = a.e12;
  res.e31 = a.e31;
  res.e23 = a.e23;
  res.e021 = a.e021;
  res.e013 = a.e013;
  res.e032 = a.e032;
  res.e123 = a.e123;
  res.e0123 = a.e0123;
  return res;
}


float norm(PGA3D a) {
  return sqrt(abs((geoProduct(a, conjugate(a))).one));
}

float inorm(PGA3D a) {
  return norm(dual(a));
}

PGA3D normalized(PGA3D a) {
  return muls(a, 1. / norm(a));
}


// Vectors and multivectors getters

// get e0
PGA3D get_e0() {
  return PGA3D(0., 1.0, 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.);
}

// get e1
PGA3D get_e1() {
  return PGA3D(0., 0., 1.0, 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.);
}

// get e2
PGA3D get_e2() {
  return PGA3D(0., 0., 0., 1.0, 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.);
}

// get e3
PGA3D get_e3() {
  return PGA3D(0., 0., 0., 0., 1.0, 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.);
}

// get e123
PGA3D get_e123() {
  return meet(meet(get_e1(), get_e2()), get_e3());
}

// get e032
PGA3D get_e032() {
  return meet(meet(get_e0(), get_e3()), get_e2());
}

// get e013
PGA3D get_e013() {
  return meet(meet(get_e0(), get_e1()), get_e3());
}

// get e021
PGA3D get_e021() {
  return meet(meet(get_e0(), get_e2()), get_e1());
}

// convert to vec4
vec4 PGA3D2vec4(PGA3D a) {
  PGA3D e123 = get_e123();
  PGA3D res = substract(a, e123);
  return vec4(res.e032, res.e013, res.e021, 1.);
}

// A rotor (Euclidean line) and translator (Ideal line)
PGA3D rotor(float angle, PGA3D line) { return smul(cos(angle/2.) + sin(angle/2.), normalized(line)); }
PGA3D translator(float dist, PGA3D line) { return sadd(1.0, smul(dist/2.0, line)); }


// A plane is defined using its homogenous equation ax + by + cz + d = 0
PGA3D plane(float a,float b,float c,float d) {
  // PGA is plane based. Vectors are planes. (think linear functionals)
  PGA3D e0 = get_e0();
  PGA3D e1 = get_e1();
  PGA3D e2 = get_e2();
  PGA3D e3 = get_e3();
  return add(add(smul(a, e1), smul(b, e2)), add(smul(c, e3), smul(d, e0)));
}

// A point is just a homogeneous point, euclidean coordinates plus the origin
PGA3D point(float x, float y, float z) {

  // PGA points are trivectors.
  PGA3D e123 = get_e123();
  PGA3D e032 = get_e032();
  PGA3D e013 = get_e013();
  PGA3D e021 = get_e021();

  return add(add(e123, smul(x, e032)), add(smul(y, e013), smul(z, e021)));
}

// for our toy problem (generate points on the surface of a torus)
// we start with a function that generates motors.
// circle(t) with t going from 0 to 1.
PGA3D circle(float t, float radius, PGA3D line) {
  PGA3D e0 = initPGA3D(1.0,1);
  PGA3D e1 = initPGA3D(1.0,2);

  return geoProduct(rotor(t*2.0*PI,line), translator(radius, geoProduct(e1, e0)));
}

// a torus is now the product of two circles.
PGA3D torus(float s, float t, float r1, PGA3D l1, float r2, PGA3D l2) {
  return geoProduct(circle(s,r2,l2), circle(t,r1,l1));
}
`;