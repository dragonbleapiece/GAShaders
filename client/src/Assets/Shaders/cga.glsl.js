export default `
// for points
struct CGAVec1 {
  float t0; //e0
  float t1; //e1
  float t2; //e2
  float t3; //e3
  float t4; //ei
};

// for bivectors
struct CGAVec2 {
  float t0; //e01
  float t1; //e02
  float t2; //e03
  float t3; //e0i
  float t4; //e12
  float t5; //e13
  float t6; //e1i
  float t7; //e23
  float t8; //e2i
  float t9; //e3i
};

// for trivectors (circle, line)
struct CGAVec3 {
  float t0; //e012
  float t1; //e013
  float t2; //e01i
  float t3; //e023
  float t4; //e02i
  float t5; //e03i
  float t6; //e123
  float t7; //e12i
  float t8; //e13i
  float t9; //e23i
};

// for spheres, planes
struct CGAVec4 {
  float t0; //e0123
  float t1; //e012i
  float t2; //e013i
  float t3; //e023i
  float t4; //e123i
};

struct CGAVec5 {
  float t0; //e0123i
};

//***********************
// CGA.Reverse : res = ~a
// Reverse the order of the basis blades.
//***********************
CGA reverse (CGA a) {
  CGA res;
  res.one=a.one;
  res.e1=a.e1;
  res.e2=a.e2;
  res.e3=a.e3;
  res.e4=a.e4;
  res.e5=a.e5;
  res.e12=-a.e12;
  res.e13=-a.e13;
  res.e14=-a.e14;
  res.e15=-a.e15;
  res.e23=-a.e23;
  res.e24=-a.e24;
  res.e25=-a.e25;
  res.e34=-a.e34;
  res.e35=-a.e35;
  res.e45=-a.e45;
  res.e123=-a.e123;
  res.e124=-a.e124;
  res.e125=-a.e125;
  res.e134=-a.e134;
  res.e135=-a.e135;
  res.e145=-a.e145;
  res.e234=-a.e234;
  res.e235=-a.e235;
  res.e245=-a.e245;
  res.e345=-a.e345;
  res.e1234=a.e1234;
  res.e1235=a.e1235;
  res.e1245=a.e1245;
  res.e1345=a.e1345;
  res.e2345=a.e2345;
  res.e12345=a.e12345;
  return res;
}

//***********************
// CGA.Dual : res = !a
// Poincare duality operator.
//***********************
CGA dual (CGA a) {
  CGA res;
  res.one=-a.e12345;
  res.e1=-a.e2345;
  res.e2=a.e1345;
  res.e3=-a.e1245;
  res.e4=a.e1235;
  res.e5=a.e1234;
  res.e12=a.e345;
  res.e13=-a.e245;
  res.e14=a.e235;
  res.e15=a.e234;
  res.e23=a.e145;
  res.e24=-a.e135;
  res.e25=-a.e134;
  res.e34=a.e125;
  res.e35=a.e124;
  res.e45=-a.e123;
  res.e123=a.e45;
  res.e124=-a.e35;
  res.e125=-a.e34;
  res.e134=a.e25;
  res.e135=a.e24;
  res.e145=-a.e23;
  res.e234=-a.e15;
  res.e235=-a.e14;
  res.e245=a.e13;
  res.e345=-a.e12;
  res.e1234=-a.e5;
  res.e1235=-a.e4;
  res.e1245=a.e3;
  res.e1345=-a.e2;
  res.e2345=a.e1;
  res.e12345=a.one;
  return res;
}

//***********************
// CGA.Conjugate : res = a.Conjugate()
// Clifford Conjugation
//***********************
CGA conjugate (CGA a) {
  CGA res;
  res.one=a.one;
  res.e1=-a.e1;
  res.e2=-a.e2;
  res.e3=-a.e3;
  res.e4=-a.e4;
  res.e5=-a.e5;
  res.e12=-a.e12;
  res.e13=-a.e13;
  res.e14=-a.e14;
  res.e15=-a.e15;
  res.e23=-a.e23;
  res.e24=-a.e24;
  res.e25=-a.e25;
  res.e34=-a.e34;
  res.e35=-a.e35;
  res.e45=-a.e45;
  res.e123=a.e123;
  res.e124=a.e124;
  res.e125=a.e125;
  res.e134=a.e134;
  res.e135=a.e135;
  res.e145=a.e145;
  res.e234=a.e234;
  res.e235=a.e235;
  res.e245=a.e245;
  res.e345=a.e345;
  res.e1234=a.e1234;
  res.e1235=a.e1235;
  res.e1245=a.e1245;
  res.e1345=a.e1345;
  res.e2345=a.e2345;
  res.e12345=-a.e12345;
  return res;
}

//***********************
// CGA.Vee : res = a & b 
// The regressive product. (JOIN)
//***********************
CGA join (CGA a, CGA b) {
  CGA res;
  res.e12345=b.e12345*a.e12345;
  res.e2345=b.e2345*a.e12345+b.e12345*a.e2345;
  res.e1345=b.e1345*a.e12345+b.e12345*a.e1345;
  res.e1245=b.e1245*a.e12345+b.e12345*a.e1245;
  res.e1235=b.e1235*a.e12345+b.e12345*a.e1235;
  res.e1234=b.e1234*a.e12345+b.e12345*a.e1234;
  res.e345=b.e345*a.e12345+b.e1345*a.e2345-b.e2345*a.e1345+b.e12345*a.e345;
  res.e245=b.e245*a.e12345+b.e1245*a.e2345-b.e2345*a.e1245+b.e12345*a.e245;
  res.e235=b.e235*a.e12345+b.e1235*a.e2345-b.e2345*a.e1235+b.e12345*a.e235;
  res.e234=b.e234*a.e12345+b.e1234*a.e2345-b.e2345*a.e1234+b.e12345*a.e234;
  res.e145=b.e145*a.e12345+b.e1245*a.e1345-b.e1345*a.e1245+b.e12345*a.e145;
  res.e135=b.e135*a.e12345+b.e1235*a.e1345-b.e1345*a.e1235+b.e12345*a.e135;
  res.e134=b.e134*a.e12345+b.e1234*a.e1345-b.e1345*a.e1234+b.e12345*a.e134;
  res.e125=b.e125*a.e12345+b.e1235*a.e1245-b.e1245*a.e1235+b.e12345*a.e125;
  res.e124=b.e124*a.e12345+b.e1234*a.e1245-b.e1245*a.e1234+b.e12345*a.e124;
  res.e123=b.e123*a.e12345+b.e1234*a.e1235-b.e1235*a.e1234+b.e12345*a.e123;
  res.e45=b.e45*a.e12345+b.e145*a.e2345-b.e245*a.e1345+b.e345*a.e1245+b.e1245*a.e345-b.e1345*a.e245+b.e2345*a.e145+b.e12345*a.e45;
  res.e35=b.e35*a.e12345+b.e135*a.e2345-b.e235*a.e1345+b.e345*a.e1235+b.e1235*a.e345-b.e1345*a.e235+b.e2345*a.e135+b.e12345*a.e35;
  res.e34=b.e34*a.e12345+b.e134*a.e2345-b.e234*a.e1345+b.e345*a.e1234+b.e1234*a.e345-b.e1345*a.e234+b.e2345*a.e134+b.e12345*a.e34;
  res.e25=b.e25*a.e12345+b.e125*a.e2345-b.e235*a.e1245+b.e245*a.e1235+b.e1235*a.e245-b.e1245*a.e235+b.e2345*a.e125+b.e12345*a.e25;
  res.e24=b.e24*a.e12345+b.e124*a.e2345-b.e234*a.e1245+b.e245*a.e1234+b.e1234*a.e245-b.e1245*a.e234+b.e2345*a.e124+b.e12345*a.e24;
  res.e23=b.e23*a.e12345+b.e123*a.e2345-b.e234*a.e1235+b.e235*a.e1234+b.e1234*a.e235-b.e1235*a.e234+b.e2345*a.e123+b.e12345*a.e23;
  res.e15=b.e15*a.e12345+b.e125*a.e1345-b.e135*a.e1245+b.e145*a.e1235+b.e1235*a.e145-b.e1245*a.e135+b.e1345*a.e125+b.e12345*a.e15;
  res.e14=b.e14*a.e12345+b.e124*a.e1345-b.e134*a.e1245+b.e145*a.e1234+b.e1234*a.e145-b.e1245*a.e134+b.e1345*a.e124+b.e12345*a.e14;
  res.e13=b.e13*a.e12345+b.e123*a.e1345-b.e134*a.e1235+b.e135*a.e1234+b.e1234*a.e135-b.e1235*a.e134+b.e1345*a.e123+b.e12345*a.e13;
  res.e12=b.e12*a.e12345+b.e123*a.e1245-b.e124*a.e1235+b.e125*a.e1234+b.e1234*a.e125-b.e1235*a.e124+b.e1245*a.e123+b.e12345*a.e12;
  res.e5=b.e5*a.e12345+b.e15*a.e2345-b.e25*a.e1345+b.e35*a.e1245-b.e45*a.e1235+b.e125*a.e345-b.e135*a.e245+b.e145*a.e235+b.e235*a.e145-b.e245*a.e135+b.e345*a.e125+b.e1235*a.e45-b.e1245*a.e35+b.e1345*a.e25-b.e2345*a.e15+b.e12345*a.e5;
  res.e4=b.e4*a.e12345+b.e14*a.e2345-b.e24*a.e1345+b.e34*a.e1245-b.e45*a.e1234+b.e124*a.e345-b.e134*a.e245+b.e145*a.e234+b.e234*a.e145-b.e245*a.e134+b.e345*a.e124+b.e1234*a.e45-b.e1245*a.e34+b.e1345*a.e24-b.e2345*a.e14+b.e12345*a.e4;
  res.e3=b.e3*a.e12345+b.e13*a.e2345-b.e23*a.e1345+b.e34*a.e1235-b.e35*a.e1234+b.e123*a.e345-b.e134*a.e235+b.e135*a.e234+b.e234*a.e135-b.e235*a.e134+b.e345*a.e123+b.e1234*a.e35-b.e1235*a.e34+b.e1345*a.e23-b.e2345*a.e13+b.e12345*a.e3;
  res.e2=b.e2*a.e12345+b.e12*a.e2345-b.e23*a.e1245+b.e24*a.e1235-b.e25*a.e1234+b.e123*a.e245-b.e124*a.e235+b.e125*a.e234+b.e234*a.e125-b.e235*a.e124+b.e245*a.e123+b.e1234*a.e25-b.e1235*a.e24+b.e1245*a.e23-b.e2345*a.e12+b.e12345*a.e2;
  res.e1=b.e1*a.e12345+b.e12*a.e1345-b.e13*a.e1245+b.e14*a.e1235-b.e15*a.e1234+b.e123*a.e145-b.e124*a.e135+b.e125*a.e134+b.e134*a.e125-b.e135*a.e124+b.e145*a.e123+b.e1234*a.e15-b.e1235*a.e14+b.e1245*a.e13-b.e1345*a.e12+b.e12345*a.e1;
  res.one=b.one*a.e12345+b.e1*a.e2345-b.e2*a.e1345+b.e3*a.e1245-b.e4*a.e1235+b.e5*a.e1234+b.e12*a.e345-b.e13*a.e245+b.e14*a.e235-b.e15*a.e234+b.e23*a.e145-b.e24*a.e135+b.e25*a.e134+b.e34*a.e125-b.e35*a.e124+b.e45*a.e123+b.e123*a.e45-b.e124*a.e35+b.e125*a.e34+b.e134*a.e25-b.e135*a.e24+b.e145*a.e23-b.e234*a.e15+b.e235*a.e14-b.e245*a.e13+b.e345*a.e12+b.e1234*a.e5-b.e1235*a.e4+b.e1245*a.e3-b.e1345*a.e2+b.e2345*a.e1+b.e12345*a.one;
  return res;
}

//***********************
// CGA.Add : res = a + b 
// Multivector addition
//***********************
CGA add (CGA a, CGA b) {
  CGA res;
      res.one = a.one+b.one;
    res.e1 = a.e1+b.e1;
    res.e2 = a.e2+b.e2;
    res.e3 = a.e3+b.e3;
    res.e4 = a.e4+b.e4;
    res.e5 = a.e5+b.e5;
    res.e12 = a.e12+b.e12;
    res.e13 = a.e13+b.e13;
    res.e14 = a.e14+b.e14;
    res.e15 = a.e15+b.e15;
    res.e23 = a.e23+b.e23;
    res.e24 = a.e24+b.e24;
    res.e25 = a.e25+b.e25;
    res.e34 = a.e34+b.e34;
    res.e35 = a.e35+b.e35;
    res.e45 = a.e45+b.e45;
    res.e123 = a.e123+b.e123;
    res.e124 = a.e124+b.e124;
    res.e125 = a.e125+b.e125;
    res.e134 = a.e134+b.e134;
    res.e135 = a.e135+b.e135;
    res.e145 = a.e145+b.e145;
    res.e234 = a.e234+b.e234;
    res.e235 = a.e235+b.e235;
    res.e245 = a.e245+b.e245;
    res.e345 = a.e345+b.e345;
    res.e1234 = a.e1234+b.e1234;
    res.e1235 = a.e1235+b.e1235;
    res.e1245 = a.e1245+b.e1245;
    res.e1345 = a.e1345+b.e1345;
    res.e2345 = a.e2345+b.e2345;
    res.e12345 = a.e12345+b.e12345;
  return res;
}

//***********************
// CGA.Sub : res = a - b 
// Multivector subtraction
//***********************
CGA substract (CGA a, CGA b) {
  CGA res;
      res.one = a.one-b.one;
    res.e1 = a.e1-b.e1;
    res.e2 = a.e2-b.e2;
    res.e3 = a.e3-b.e3;
    res.e4 = a.e4-b.e4;
    res.e5 = a.e5-b.e5;
    res.e12 = a.e12-b.e12;
    res.e13 = a.e13-b.e13;
    res.e14 = a.e14-b.e14;
    res.e15 = a.e15-b.e15;
    res.e23 = a.e23-b.e23;
    res.e24 = a.e24-b.e24;
    res.e25 = a.e25-b.e25;
    res.e34 = a.e34-b.e34;
    res.e35 = a.e35-b.e35;
    res.e45 = a.e45-b.e45;
    res.e123 = a.e123-b.e123;
    res.e124 = a.e124-b.e124;
    res.e125 = a.e125-b.e125;
    res.e134 = a.e134-b.e134;
    res.e135 = a.e135-b.e135;
    res.e145 = a.e145-b.e145;
    res.e234 = a.e234-b.e234;
    res.e235 = a.e235-b.e235;
    res.e245 = a.e245-b.e245;
    res.e345 = a.e345-b.e345;
    res.e1234 = a.e1234-b.e1234;
    res.e1235 = a.e1235-b.e1235;
    res.e1245 = a.e1245-b.e1245;
    res.e1345 = a.e1345-b.e1345;
    res.e2345 = a.e2345-b.e2345;
    res.e12345 = a.e12345-b.e12345;
  return res;
}

//***********************
// CGA.smul : res = a * b 
// scalar/multivector multiplication
//***********************
CGA smul (float a, CGA b) {
  CGA res;
      res.one = a*b.one;
    res.e1 = a*b.e1;
    res.e2 = a*b.e2;
    res.e3 = a*b.e3;
    res.e4 = a*b.e4;
    res.e5 = a*b.e5;
    res.e12 = a*b.e12;
    res.e13 = a*b.e13;
    res.e14 = a*b.e14;
    res.e15 = a*b.e15;
    res.e23 = a*b.e23;
    res.e24 = a*b.e24;
    res.e25 = a*b.e25;
    res.e34 = a*b.e34;
    res.e35 = a*b.e35;
    res.e45 = a*b.e45;
    res.e123 = a*b.e123;
    res.e124 = a*b.e124;
    res.e125 = a*b.e125;
    res.e134 = a*b.e134;
    res.e135 = a*b.e135;
    res.e145 = a*b.e145;
    res.e234 = a*b.e234;
    res.e235 = a*b.e235;
    res.e245 = a*b.e245;
    res.e345 = a*b.e345;
    res.e1234 = a*b.e1234;
    res.e1235 = a*b.e1235;
    res.e1245 = a*b.e1245;
    res.e1345 = a*b.e1345;
    res.e2345 = a*b.e2345;
    res.e12345 = a*b.e12345;
  return res;
}

//***********************
// CGA.muls : res = a * b 
// multivector/scalar multiplication
//***********************
CGA muls (CGA a, float b) {
  CGA res;
      res.one = a.one*b;
    res.e1 = a.e1*b;
    res.e2 = a.e2*b;
    res.e3 = a.e3*b;
    res.e4 = a.e4*b;
    res.e5 = a.e5*b;
    res.e12 = a.e12*b;
    res.e13 = a.e13*b;
    res.e14 = a.e14*b;
    res.e15 = a.e15*b;
    res.e23 = a.e23*b;
    res.e24 = a.e24*b;
    res.e25 = a.e25*b;
    res.e34 = a.e34*b;
    res.e35 = a.e35*b;
    res.e45 = a.e45*b;
    res.e123 = a.e123*b;
    res.e124 = a.e124*b;
    res.e125 = a.e125*b;
    res.e134 = a.e134*b;
    res.e135 = a.e135*b;
    res.e145 = a.e145*b;
    res.e234 = a.e234*b;
    res.e235 = a.e235*b;
    res.e245 = a.e245*b;
    res.e345 = a.e345*b;
    res.e1234 = a.e1234*b;
    res.e1235 = a.e1235*b;
    res.e1245 = a.e1245*b;
    res.e1345 = a.e1345*b;
    res.e2345 = a.e2345*b;
    res.e12345 = a.e12345*b;
  return res;
}

//***********************
// CGA.sadd : res = a + b 
// scalar/multivector addition
//***********************
CGA sadd (float a, CGA b) {
  CGA res;
    res.one = a+b.one;
      res.e1 = b.e1;
    res.e2 = b.e2;
    res.e3 = b.e3;
    res.e4 = b.e4;
    res.e5 = b.e5;
    res.e12 = b.e12;
    res.e13 = b.e13;
    res.e14 = b.e14;
    res.e15 = b.e15;
    res.e23 = b.e23;
    res.e24 = b.e24;
    res.e25 = b.e25;
    res.e34 = b.e34;
    res.e35 = b.e35;
    res.e45 = b.e45;
    res.e123 = b.e123;
    res.e124 = b.e124;
    res.e125 = b.e125;
    res.e134 = b.e134;
    res.e135 = b.e135;
    res.e145 = b.e145;
    res.e234 = b.e234;
    res.e235 = b.e235;
    res.e245 = b.e245;
    res.e345 = b.e345;
    res.e1234 = b.e1234;
    res.e1235 = b.e1235;
    res.e1245 = b.e1245;
    res.e1345 = b.e1345;
    res.e2345 = b.e2345;
    res.e12345 = b.e12345;
  return res;
}

//***********************
// CGA.adds : res = a + b 
// multivector/scalar addition
//***********************
CGA adds (CGA a, float b) {
  CGA res;
    res.one = a.one+b;
      res.e1 = a.e1;
    res.e2 = a.e2;
    res.e3 = a.e3;
    res.e4 = a.e4;
    res.e5 = a.e5;
    res.e12 = a.e12;
    res.e13 = a.e13;
    res.e14 = a.e14;
    res.e15 = a.e15;
    res.e23 = a.e23;
    res.e24 = a.e24;
    res.e25 = a.e25;
    res.e34 = a.e34;
    res.e35 = a.e35;
    res.e45 = a.e45;
    res.e123 = a.e123;
    res.e124 = a.e124;
    res.e125 = a.e125;
    res.e134 = a.e134;
    res.e135 = a.e135;
    res.e145 = a.e145;
    res.e234 = a.e234;
    res.e235 = a.e235;
    res.e245 = a.e245;
    res.e345 = a.e345;
    res.e1234 = a.e1234;
    res.e1235 = a.e1235;
    res.e1245 = a.e1245;
    res.e1345 = a.e1345;
    res.e2345 = a.e2345;
    res.e12345 = a.e12345;
  return res;
}

CGA ssub(float a, CGA b) {
  return sadd(a, muls(b, -1.));
}

CGA subs(CGA a, float b) {
  return adds(a, -b);
}

float norm(CGA a) {
  return sqrt(abs((geometric(a, conjugate(a)).one)));
}
float inorm(CGA a) {
  return norm(dual(a));
}
CGA normalized(CGA a) {
  return muls(a, 1. / norm(a));
}

// Vectors and multivectors getters

CGAVec1 get_e1() {
  return CGAVec1(0., 1., 0., 0., 0.);
}

CGAVec1 get_e2() {
  return CGAVec1(0., 0., 1., 0., 0.);
}

CGAVec1 get_e3() {
  return CGAVec1(0., 0., 0., 1., 0.);
}

// PGA is point based. Vectors are points.

// We seldomly work in the natural basis, but instead in a null basis
// for this we create two null vectors 'origin' and 'infinity'

CGAVec1 get_e0() {
  return CGAVec1(1., 0., 0., 0., 0.);
}

CGAVec1 get_ei() {
  return CGAVec1(0., 0., 0., 0., 1.);
}

CGA inverse(CGA a) {
  return muls(conjugate(a), abs(1. / geometric(a, conjugate(a)).one));
}


// create a point from x,y,z coordinates
CGAVec1 point(float x, float y, float z) {
  CGA e1 = get_e1();
  CGA e2 = get_e2();
  CGA e3 = get_e3();

  CGA eo = get_e0();
  CGA ei = get_ei();

  float d = x*x + y*y + z*z;
  return add(add(smul(x, e1), smul(y, e2)), add(smul(z, e3), add(smul(0.5*d, ei), e0)));
}

vec4 CGAVec1AsPoint(CGAVec1 a) {
  return vec4(a.e1, a.e2, a.e3, a.e0);
}
`;