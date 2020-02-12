export default `
// 3D Projective Geometric Algebra
// Inspired by a c++ code written by a generator written by enki.
// https://github.com/enkimute/ganja.js/blob/master/codegen/cpp/cga.cpp

//static const char* basis[] = { "1","e2","e3","e4","e4","e5","e23","e24","e14","e15","e34","e24","e25","e34","e35","e45","e234","e124","e125","e134","e135","e145","e234","e235","e245","e345","e1234","e1235","e1245","e1345","e2345","e12345" };

struct CGA {
  float one; // 0
  float e1; // 1
  float e2; // 2
  float e3; // 3
  float e4; // 4
  float e5; // 5
  float e12; // 6
  float e13; // 7
  float e14; // 8
  float e15; // 9
  float e23; // 10
  float e24; // 11
  float e25; // 12
  float e34; // 13
  float e35; // 14
  float e45; // 15
  float e123; // 16
  float e124; // 17
  float e125; // 18
  float e134; // 19
  float e135; // 20
  float e145; // 21
  float e234; // 22
  float e235; // 23
  float e245; // 24
  float e345; // 25
  float e1234; // 26
  float e1235; // 27
  float e1245; // 28
  float e1345; // 29
  float e2345; // 30
  float e12345; // 31
};

CGA initCGA() {
  return CGA(0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.);
}

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
// CGA.Mul : res = a * b 
// The geometric product.
//***********************
CGA geometric (CGA a, CGA b) {
  CGA res;
  res.one=b.one*a.one+b.e1*a.e1+b.e2*a.e2+b.e3*a.e3+b.e4*a.e4-b.e5*a.e5-b.e12*a.e12-b.e13*a.e13-b.e14*a.e14+b.e15*a.e15-b.e23*a.e23-b.e24*a.e24+b.e25*a.e25-b.e34*a.e34+b.e35*a.e35+b.e45*a.e45-b.e123*a.e123-b.e124*a.e124+b.e125*a.e125-b.e134*a.e134+b.e135*a.e135+b.e145*a.e145-b.e234*a.e234+b.e235*a.e235+b.e245*a.e245+b.e345*a.e345+b.e1234*a.e1234-b.e1235*a.e1235-b.e1245*a.e1245-b.e1345*a.e1345-b.e2345*a.e2345-b.e12345*a.e12345;
  res.e1=b.e1*a.one+b.one*a.e1-b.e12*a.e2-b.e13*a.e3-b.e14*a.e4+b.e15*a.e5+b.e2*a.e12+b.e3*a.e13+b.e4*a.e14-b.e5*a.e15-b.e123*a.e23-b.e124*a.e24+b.e125*a.e25-b.e134*a.e34+b.e135*a.e35+b.e145*a.e45-b.e23*a.e123-b.e24*a.e124+b.e25*a.e125-b.e34*a.e134+b.e35*a.e135+b.e45*a.e145+b.e1234*a.e234-b.e1235*a.e235-b.e1245*a.e245-b.e1345*a.e345-b.e234*a.e1234+b.e235*a.e1235+b.e245*a.e1245+b.e345*a.e1345-b.e12345*a.e2345-b.e2345*a.e12345;
  res.e2=b.e2*a.one+b.e12*a.e1+b.one*a.e2-b.e23*a.e3-b.e24*a.e4+b.e25*a.e5-b.e1*a.e12+b.e123*a.e13+b.e124*a.e14-b.e125*a.e15+b.e3*a.e23+b.e4*a.e24-b.e5*a.e25-b.e234*a.e34+b.e235*a.e35+b.e245*a.e45+b.e13*a.e123+b.e14*a.e124-b.e15*a.e125-b.e1234*a.e134+b.e1235*a.e135+b.e1245*a.e145-b.e34*a.e234+b.e35*a.e235+b.e45*a.e245-b.e2345*a.e345+b.e134*a.e1234-b.e135*a.e1235-b.e145*a.e1245+b.e12345*a.e1345+b.e345*a.e2345+b.e1345*a.e12345;
  res.e3=b.e3*a.one+b.e13*a.e1+b.e23*a.e2+b.one*a.e3-b.e34*a.e4+b.e35*a.e5-b.e123*a.e12-b.e1*a.e13+b.e134*a.e14-b.e135*a.e15-b.e2*a.e23+b.e234*a.e24-b.e235*a.e25+b.e4*a.e34-b.e5*a.e35+b.e345*a.e45-b.e12*a.e123+b.e1234*a.e124-b.e1235*a.e125+b.e14*a.e134-b.e15*a.e135+b.e1345*a.e145+b.e24*a.e234-b.e25*a.e235+b.e2345*a.e245+b.e45*a.e345-b.e124*a.e1234+b.e125*a.e1235-b.e12345*a.e1245-b.e145*a.e1345-b.e245*a.e2345-b.e1245*a.e12345;
  res.e4=b.e4*a.one+b.e14*a.e1+b.e24*a.e2+b.e34*a.e3+b.one*a.e4+b.e45*a.e5-b.e124*a.e12-b.e134*a.e13-b.e1*a.e14-b.e145*a.e15-b.e234*a.e23-b.e2*a.e24-b.e245*a.e25-b.e3*a.e34-b.e345*a.e35-b.e5*a.e45-b.e1234*a.e123-b.e12*a.e124-b.e1245*a.e125-b.e13*a.e134-b.e1345*a.e135-b.e15*a.e145-b.e23*a.e234-b.e2345*a.e235-b.e25*a.e245-b.e35*a.e345+b.e123*a.e1234+b.e12345*a.e1235+b.e125*a.e1245+b.e135*a.e1345+b.e235*a.e2345+b.e1235*a.e12345;
  res.e5=b.e5*a.one+b.e15*a.e1+b.e25*a.e2+b.e35*a.e3+b.e45*a.e4+b.one*a.e5-b.e125*a.e12-b.e135*a.e13-b.e145*a.e14-b.e1*a.e15-b.e235*a.e23-b.e245*a.e24-b.e2*a.e25-b.e345*a.e34-b.e3*a.e35-b.e4*a.e45-b.e1235*a.e123-b.e1245*a.e124-b.e12*a.e125-b.e1345*a.e134-b.e13*a.e135-b.e14*a.e145-b.e2345*a.e234-b.e23*a.e235-b.e24*a.e245-b.e34*a.e345+b.e12345*a.e1234+b.e123*a.e1235+b.e124*a.e1245+b.e134*a.e1345+b.e234*a.e2345+b.e1234*a.e12345;
  res.e12=b.e12*a.one+b.e2*a.e1-b.e1*a.e2+b.e123*a.e3+b.e124*a.e4-b.e125*a.e5+b.one*a.e12-b.e23*a.e13-b.e24*a.e14+b.e25*a.e15+b.e13*a.e23+b.e14*a.e24-b.e15*a.e25-b.e1234*a.e34+b.e1235*a.e35+b.e1245*a.e45+b.e3*a.e123+b.e4*a.e124-b.e5*a.e125-b.e234*a.e134+b.e235*a.e135+b.e245*a.e145+b.e134*a.e234-b.e135*a.e235-b.e145*a.e245+b.e12345*a.e345-b.e34*a.e1234+b.e35*a.e1235+b.e45*a.e1245-b.e2345*a.e1345+b.e1345*a.e2345+b.e345*a.e12345;
  res.e13=b.e13*a.one+b.e3*a.e1-b.e123*a.e2-b.e1*a.e3+b.e134*a.e4-b.e135*a.e5+b.e23*a.e12+b.one*a.e13-b.e34*a.e14+b.e35*a.e15-b.e12*a.e23+b.e1234*a.e24-b.e1235*a.e25+b.e14*a.e34-b.e15*a.e35+b.e1345*a.e45-b.e2*a.e123+b.e234*a.e124-b.e235*a.e125+b.e4*a.e134-b.e5*a.e135+b.e345*a.e145-b.e124*a.e234+b.e125*a.e235-b.e12345*a.e245-b.e145*a.e345+b.e24*a.e1234-b.e25*a.e1235+b.e2345*a.e1245+b.e45*a.e1345-b.e1245*a.e2345-b.e245*a.e12345;
  res.e14=b.e14*a.one+b.e4*a.e1-b.e124*a.e2-b.e134*a.e3-b.e1*a.e4-b.e145*a.e5+b.e24*a.e12+b.e34*a.e13+b.one*a.e14+b.e45*a.e15-b.e1234*a.e23-b.e12*a.e24-b.e1245*a.e25-b.e13*a.e34-b.e1345*a.e35-b.e15*a.e45-b.e234*a.e123-b.e2*a.e124-b.e245*a.e125-b.e3*a.e134-b.e345*a.e135-b.e5*a.e145+b.e123*a.e234+b.e12345*a.e235+b.e125*a.e245+b.e135*a.e345-b.e23*a.e1234-b.e2345*a.e1235-b.e25*a.e1245-b.e35*a.e1345+b.e1235*a.e2345+b.e235*a.e12345;
  res.e15=b.e15*a.one+b.e5*a.e1-b.e125*a.e2-b.e135*a.e3-b.e145*a.e4-b.e1*a.e5+b.e25*a.e12+b.e35*a.e13+b.e45*a.e14+b.one*a.e15-b.e1235*a.e23-b.e1245*a.e24-b.e12*a.e25-b.e1345*a.e34-b.e13*a.e35-b.e14*a.e45-b.e235*a.e123-b.e245*a.e124-b.e2*a.e125-b.e345*a.e134-b.e3*a.e135-b.e4*a.e145+b.e12345*a.e234+b.e123*a.e235+b.e124*a.e245+b.e134*a.e345-b.e2345*a.e1234-b.e23*a.e1235-b.e24*a.e1245-b.e34*a.e1345+b.e1234*a.e2345+b.e234*a.e12345;
  res.e23=b.e23*a.one+b.e123*a.e1+b.e3*a.e2-b.e2*a.e3+b.e234*a.e4-b.e235*a.e5-b.e13*a.e12+b.e12*a.e13-b.e1234*a.e14+b.e1235*a.e15+b.one*a.e23-b.e34*a.e24+b.e35*a.e25+b.e24*a.e34-b.e25*a.e35+b.e2345*a.e45+b.e1*a.e123-b.e134*a.e124+b.e135*a.e125+b.e124*a.e134-b.e125*a.e135+b.e12345*a.e145+b.e4*a.e234-b.e5*a.e235+b.e345*a.e245-b.e245*a.e345-b.e14*a.e1234+b.e15*a.e1235-b.e1345*a.e1245+b.e1245*a.e1345+b.e45*a.e2345+b.e145*a.e12345;
  res.e24=b.e24*a.one+b.e124*a.e1+b.e4*a.e2-b.e234*a.e3-b.e2*a.e4-b.e245*a.e5-b.e14*a.e12+b.e1234*a.e13+b.e12*a.e14+b.e1245*a.e15+b.e34*a.e23+b.one*a.e24+b.e45*a.e25-b.e23*a.e34-b.e2345*a.e35-b.e25*a.e45+b.e134*a.e123+b.e1*a.e124+b.e145*a.e125-b.e123*a.e134-b.e12345*a.e135-b.e125*a.e145-b.e3*a.e234-b.e345*a.e235-b.e5*a.e245+b.e235*a.e345+b.e13*a.e1234+b.e1345*a.e1235+b.e15*a.e1245-b.e1235*a.e1345-b.e35*a.e2345-b.e135*a.e12345;
  res.e25=b.e25*a.one+b.e125*a.e1+b.e5*a.e2-b.e235*a.e3-b.e245*a.e4-b.e2*a.e5-b.e15*a.e12+b.e1235*a.e13+b.e1245*a.e14+b.e12*a.e15+b.e35*a.e23+b.e45*a.e24+b.one*a.e25-b.e2345*a.e34-b.e23*a.e35-b.e24*a.e45+b.e135*a.e123+b.e145*a.e124+b.e1*a.e125-b.e12345*a.e134-b.e123*a.e135-b.e124*a.e145-b.e345*a.e234-b.e3*a.e235-b.e4*a.e245+b.e234*a.e345+b.e1345*a.e1234+b.e13*a.e1235+b.e14*a.e1245-b.e1234*a.e1345-b.e34*a.e2345-b.e134*a.e12345;
  res.e34=b.e34*a.one+b.e134*a.e1+b.e234*a.e2+b.e4*a.e3-b.e3*a.e4-b.e345*a.e5-b.e1234*a.e12-b.e14*a.e13+b.e13*a.e14+b.e1345*a.e15-b.e24*a.e23+b.e23*a.e24+b.e2345*a.e25+b.one*a.e34+b.e45*a.e35-b.e35*a.e45-b.e124*a.e123+b.e123*a.e124+b.e12345*a.e125+b.e1*a.e134+b.e145*a.e135-b.e135*a.e145+b.e2*a.e234+b.e245*a.e235-b.e235*a.e245-b.e5*a.e345-b.e12*a.e1234-b.e1245*a.e1235+b.e1235*a.e1245+b.e15*a.e1345+b.e25*a.e2345+b.e125*a.e12345;
  res.e35=b.e35*a.one+b.e135*a.e1+b.e235*a.e2+b.e5*a.e3-b.e345*a.e4-b.e3*a.e5-b.e1235*a.e12-b.e15*a.e13+b.e1345*a.e14+b.e13*a.e15-b.e25*a.e23+b.e2345*a.e24+b.e23*a.e25+b.e45*a.e34+b.one*a.e35-b.e34*a.e45-b.e125*a.e123+b.e12345*a.e124+b.e123*a.e125+b.e145*a.e134+b.e1*a.e135-b.e134*a.e145+b.e245*a.e234+b.e2*a.e235-b.e234*a.e245-b.e4*a.e345-b.e1245*a.e1234-b.e12*a.e1235+b.e1234*a.e1245+b.e14*a.e1345+b.e24*a.e2345+b.e124*a.e12345;
  res.e45=b.e45*a.one+b.e145*a.e1+b.e245*a.e2+b.e345*a.e3+b.e5*a.e4-b.e4*a.e5-b.e1245*a.e12-b.e1345*a.e13-b.e15*a.e14+b.e14*a.e15-b.e2345*a.e23-b.e25*a.e24+b.e24*a.e25-b.e35*a.e34+b.e34*a.e35+b.one*a.e45-b.e12345*a.e123-b.e125*a.e124+b.e124*a.e125-b.e135*a.e134+b.e134*a.e135+b.e1*a.e145-b.e235*a.e234+b.e234*a.e235+b.e2*a.e245+b.e3*a.e345+b.e1235*a.e1234-b.e1234*a.e1235-b.e12*a.e1245-b.e13*a.e1345-b.e23*a.e2345-b.e123*a.e12345;
  res.e123=b.e123*a.one+b.e23*a.e1-b.e13*a.e2+b.e12*a.e3-b.e1234*a.e4+b.e1235*a.e5+b.e3*a.e12-b.e2*a.e13+b.e234*a.e14-b.e235*a.e15+b.e1*a.e23-b.e134*a.e24+b.e135*a.e25+b.e124*a.e34-b.e125*a.e35+b.e12345*a.e45+b.one*a.e123-b.e34*a.e124+b.e35*a.e125+b.e24*a.e134-b.e25*a.e135+b.e2345*a.e145-b.e14*a.e234+b.e15*a.e235-b.e1345*a.e245+b.e1245*a.e345+b.e4*a.e1234-b.e5*a.e1235+b.e345*a.e1245-b.e245*a.e1345+b.e145*a.e2345+b.e45*a.e12345;
  res.e124=b.e124*a.one+b.e24*a.e1-b.e14*a.e2+b.e1234*a.e3+b.e12*a.e4+b.e1245*a.e5+b.e4*a.e12-b.e234*a.e13-b.e2*a.e14-b.e245*a.e15+b.e134*a.e23+b.e1*a.e24+b.e145*a.e25-b.e123*a.e34-b.e12345*a.e35-b.e125*a.e45+b.e34*a.e123+b.one*a.e124+b.e45*a.e125-b.e23*a.e134-b.e2345*a.e135-b.e25*a.e145+b.e13*a.e234+b.e1345*a.e235+b.e15*a.e245-b.e1235*a.e345-b.e3*a.e1234-b.e345*a.e1235-b.e5*a.e1245+b.e235*a.e1345-b.e135*a.e2345-b.e35*a.e12345;
  res.e125=b.e125*a.one+b.e25*a.e1-b.e15*a.e2+b.e1235*a.e3+b.e1245*a.e4+b.e12*a.e5+b.e5*a.e12-b.e235*a.e13-b.e245*a.e14-b.e2*a.e15+b.e135*a.e23+b.e145*a.e24+b.e1*a.e25-b.e12345*a.e34-b.e123*a.e35-b.e124*a.e45+b.e35*a.e123+b.e45*a.e124+b.one*a.e125-b.e2345*a.e134-b.e23*a.e135-b.e24*a.e145+b.e1345*a.e234+b.e13*a.e235+b.e14*a.e245-b.e1234*a.e345-b.e345*a.e1234-b.e3*a.e1235-b.e4*a.e1245+b.e234*a.e1345-b.e134*a.e2345-b.e34*a.e12345;
  res.e134=b.e134*a.one+b.e34*a.e1-b.e1234*a.e2-b.e14*a.e3+b.e13*a.e4+b.e1345*a.e5+b.e234*a.e12+b.e4*a.e13-b.e3*a.e14-b.e345*a.e15-b.e124*a.e23+b.e123*a.e24+b.e12345*a.e25+b.e1*a.e34+b.e145*a.e35-b.e135*a.e45-b.e24*a.e123+b.e23*a.e124+b.e2345*a.e125+b.one*a.e134+b.e45*a.e135-b.e35*a.e145-b.e12*a.e234-b.e1245*a.e235+b.e1235*a.e245+b.e15*a.e345+b.e2*a.e1234+b.e245*a.e1235-b.e235*a.e1245-b.e5*a.e1345+b.e125*a.e2345+b.e25*a.e12345;
  res.e135=b.e135*a.one+b.e35*a.e1-b.e1235*a.e2-b.e15*a.e3+b.e1345*a.e4+b.e13*a.e5+b.e235*a.e12+b.e5*a.e13-b.e345*a.e14-b.e3*a.e15-b.e125*a.e23+b.e12345*a.e24+b.e123*a.e25+b.e145*a.e34+b.e1*a.e35-b.e134*a.e45-b.e25*a.e123+b.e2345*a.e124+b.e23*a.e125+b.e45*a.e134+b.one*a.e135-b.e34*a.e145-b.e1245*a.e234-b.e12*a.e235+b.e1234*a.e245+b.e14*a.e345+b.e245*a.e1234+b.e2*a.e1235-b.e234*a.e1245-b.e4*a.e1345+b.e124*a.e2345+b.e24*a.e12345;
  res.e145=b.e145*a.one+b.e45*a.e1-b.e1245*a.e2-b.e1345*a.e3-b.e15*a.e4+b.e14*a.e5+b.e245*a.e12+b.e345*a.e13+b.e5*a.e14-b.e4*a.e15-b.e12345*a.e23-b.e125*a.e24+b.e124*a.e25-b.e135*a.e34+b.e134*a.e35+b.e1*a.e45-b.e2345*a.e123-b.e25*a.e124+b.e24*a.e125-b.e35*a.e134+b.e34*a.e135+b.one*a.e145+b.e1235*a.e234-b.e1234*a.e235-b.e12*a.e245-b.e13*a.e345-b.e235*a.e1234+b.e234*a.e1235+b.e2*a.e1245+b.e3*a.e1345-b.e123*a.e2345-b.e23*a.e12345;
  res.e234=b.e234*a.one+b.e1234*a.e1+b.e34*a.e2-b.e24*a.e3+b.e23*a.e4+b.e2345*a.e5-b.e134*a.e12+b.e124*a.e13-b.e123*a.e14-b.e12345*a.e15+b.e4*a.e23-b.e3*a.e24-b.e345*a.e25+b.e2*a.e34+b.e245*a.e35-b.e235*a.e45+b.e14*a.e123-b.e13*a.e124-b.e1345*a.e125+b.e12*a.e134+b.e1245*a.e135-b.e1235*a.e145+b.one*a.e234+b.e45*a.e235-b.e35*a.e245+b.e25*a.e345-b.e1*a.e1234-b.e145*a.e1235+b.e135*a.e1245-b.e125*a.e1345-b.e5*a.e2345-b.e15*a.e12345;
  res.e235=b.e235*a.one+b.e1235*a.e1+b.e35*a.e2-b.e25*a.e3+b.e2345*a.e4+b.e23*a.e5-b.e135*a.e12+b.e125*a.e13-b.e12345*a.e14-b.e123*a.e15+b.e5*a.e23-b.e345*a.e24-b.e3*a.e25+b.e245*a.e34+b.e2*a.e35-b.e234*a.e45+b.e15*a.e123-b.e1345*a.e124-b.e13*a.e125+b.e1245*a.e134+b.e12*a.e135-b.e1234*a.e145+b.e45*a.e234+b.one*a.e235-b.e34*a.e245+b.e24*a.e345-b.e145*a.e1234-b.e1*a.e1235+b.e134*a.e1245-b.e124*a.e1345-b.e4*a.e2345-b.e14*a.e12345;
  res.e245=b.e245*a.one+b.e1245*a.e1+b.e45*a.e2-b.e2345*a.e3-b.e25*a.e4+b.e24*a.e5-b.e145*a.e12+b.e12345*a.e13+b.e125*a.e14-b.e124*a.e15+b.e345*a.e23+b.e5*a.e24-b.e4*a.e25-b.e235*a.e34+b.e234*a.e35+b.e2*a.e45+b.e1345*a.e123+b.e15*a.e124-b.e14*a.e125-b.e1235*a.e134+b.e1234*a.e135+b.e12*a.e145-b.e35*a.e234+b.e34*a.e235+b.one*a.e245-b.e23*a.e345+b.e135*a.e1234-b.e134*a.e1235-b.e1*a.e1245+b.e123*a.e1345+b.e3*a.e2345+b.e13*a.e12345;
  res.e345=b.e345*a.one+b.e1345*a.e1+b.e2345*a.e2+b.e45*a.e3-b.e35*a.e4+b.e34*a.e5-b.e12345*a.e12-b.e145*a.e13+b.e135*a.e14-b.e134*a.e15-b.e245*a.e23+b.e235*a.e24-b.e234*a.e25+b.e5*a.e34-b.e4*a.e35+b.e3*a.e45-b.e1245*a.e123+b.e1235*a.e124-b.e1234*a.e125+b.e15*a.e134-b.e14*a.e135+b.e13*a.e145+b.e25*a.e234-b.e24*a.e235+b.e23*a.e245+b.one*a.e345-b.e125*a.e1234+b.e124*a.e1235-b.e123*a.e1245-b.e1*a.e1345-b.e2*a.e2345-b.e12*a.e12345;
  res.e1234=b.e1234*a.one+b.e234*a.e1-b.e134*a.e2+b.e124*a.e3-b.e123*a.e4-b.e12345*a.e5+b.e34*a.e12-b.e24*a.e13+b.e23*a.e14+b.e2345*a.e15+b.e14*a.e23-b.e13*a.e24-b.e1345*a.e25+b.e12*a.e34+b.e1245*a.e35-b.e1235*a.e45+b.e4*a.e123-b.e3*a.e124-b.e345*a.e125+b.e2*a.e134+b.e245*a.e135-b.e235*a.e145-b.e1*a.e234-b.e145*a.e235+b.e135*a.e245-b.e125*a.e345+b.one*a.e1234+b.e45*a.e1235-b.e35*a.e1245+b.e25*a.e1345-b.e15*a.e2345-b.e5*a.e12345;
  res.e1235=b.e1235*a.one+b.e235*a.e1-b.e135*a.e2+b.e125*a.e3-b.e12345*a.e4-b.e123*a.e5+b.e35*a.e12-b.e25*a.e13+b.e2345*a.e14+b.e23*a.e15+b.e15*a.e23-b.e1345*a.e24-b.e13*a.e25+b.e1245*a.e34+b.e12*a.e35-b.e1234*a.e45+b.e5*a.e123-b.e345*a.e124-b.e3*a.e125+b.e245*a.e134+b.e2*a.e135-b.e234*a.e145-b.e145*a.e234-b.e1*a.e235+b.e134*a.e245-b.e124*a.e345+b.e45*a.e1234+b.one*a.e1235-b.e34*a.e1245+b.e24*a.e1345-b.e14*a.e2345-b.e4*a.e12345;
  res.e1245=b.e1245*a.one+b.e245*a.e1-b.e145*a.e2+b.e12345*a.e3+b.e125*a.e4-b.e124*a.e5+b.e45*a.e12-b.e2345*a.e13-b.e25*a.e14+b.e24*a.e15+b.e1345*a.e23+b.e15*a.e24-b.e14*a.e25-b.e1235*a.e34+b.e1234*a.e35+b.e12*a.e45+b.e345*a.e123+b.e5*a.e124-b.e4*a.e125-b.e235*a.e134+b.e234*a.e135+b.e2*a.e145+b.e135*a.e234-b.e134*a.e235-b.e1*a.e245+b.e123*a.e345-b.e35*a.e1234+b.e34*a.e1235+b.one*a.e1245-b.e23*a.e1345+b.e13*a.e2345+b.e3*a.e12345;
  res.e1345=b.e1345*a.one+b.e345*a.e1-b.e12345*a.e2-b.e145*a.e3+b.e135*a.e4-b.e134*a.e5+b.e2345*a.e12+b.e45*a.e13-b.e35*a.e14+b.e34*a.e15-b.e1245*a.e23+b.e1235*a.e24-b.e1234*a.e25+b.e15*a.e34-b.e14*a.e35+b.e13*a.e45-b.e245*a.e123+b.e235*a.e124-b.e234*a.e125+b.e5*a.e134-b.e4*a.e135+b.e3*a.e145-b.e125*a.e234+b.e124*a.e235-b.e123*a.e245-b.e1*a.e345+b.e25*a.e1234-b.e24*a.e1235+b.e23*a.e1245+b.one*a.e1345-b.e12*a.e2345-b.e2*a.e12345;
  res.e2345=b.e2345*a.one+b.e12345*a.e1+b.e345*a.e2-b.e245*a.e3+b.e235*a.e4-b.e234*a.e5-b.e1345*a.e12+b.e1245*a.e13-b.e1235*a.e14+b.e1234*a.e15+b.e45*a.e23-b.e35*a.e24+b.e34*a.e25+b.e25*a.e34-b.e24*a.e35+b.e23*a.e45+b.e145*a.e123-b.e135*a.e124+b.e134*a.e125+b.e125*a.e134-b.e124*a.e135+b.e123*a.e145+b.e5*a.e234-b.e4*a.e235+b.e3*a.e245-b.e2*a.e345-b.e15*a.e1234+b.e14*a.e1235-b.e13*a.e1245+b.e12*a.e1345+b.one*a.e2345+b.e1*a.e12345;
  res.e12345=b.e12345*a.one+b.e2345*a.e1-b.e1345*a.e2+b.e1245*a.e3-b.e1235*a.e4+b.e1234*a.e5+b.e345*a.e12-b.e245*a.e13+b.e235*a.e14-b.e234*a.e15+b.e145*a.e23-b.e135*a.e24+b.e134*a.e25+b.e125*a.e34-b.e124*a.e35+b.e123*a.e45+b.e45*a.e123-b.e35*a.e124+b.e34*a.e125+b.e25*a.e134-b.e24*a.e135+b.e23*a.e145-b.e15*a.e234+b.e14*a.e235-b.e13*a.e245+b.e12*a.e345+b.e5*a.e1234-b.e4*a.e1235+b.e3*a.e1245-b.e2*a.e1345+b.e1*a.e2345+b.one*a.e12345;
  return res;
}

//***********************
// CGA.Wedge : res = a ^ b 
// The outer product. (MEET)
//***********************
CGA meet (CGA a, CGA b) {
  CGA res;
  res.one=b.one*a.one;
  res.e1=b.e1*a.one+b.one*a.e1;
  res.e2=b.e2*a.one+b.one*a.e2;
  res.e3=b.e3*a.one+b.one*a.e3;
  res.e4=b.e4*a.one+b.one*a.e4;
  res.e5=b.e5*a.one+b.one*a.e5;
  res.e12=b.e12*a.one+b.e2*a.e1-b.e1*a.e2+b.one*a.e12;
  res.e13=b.e13*a.one+b.e3*a.e1-b.e1*a.e3+b.one*a.e13;
  res.e14=b.e14*a.one+b.e4*a.e1-b.e1*a.e4+b.one*a.e14;
  res.e15=b.e15*a.one+b.e5*a.e1-b.e1*a.e5+b.one*a.e15;
  res.e23=b.e23*a.one+b.e3*a.e2-b.e2*a.e3+b.one*a.e23;
  res.e24=b.e24*a.one+b.e4*a.e2-b.e2*a.e4+b.one*a.e24;
  res.e25=b.e25*a.one+b.e5*a.e2-b.e2*a.e5+b.one*a.e25;
  res.e34=b.e34*a.one+b.e4*a.e3-b.e3*a.e4+b.one*a.e34;
  res.e35=b.e35*a.one+b.e5*a.e3-b.e3*a.e5+b.one*a.e35;
  res.e45=b.e45*a.one+b.e5*a.e4-b.e4*a.e5+b.one*a.e45;
  res.e123=b.e123*a.one+b.e23*a.e1-b.e13*a.e2+b.e12*a.e3+b.e3*a.e12-b.e2*a.e13+b.e1*a.e23+b.one*a.e123;
  res.e124=b.e124*a.one+b.e24*a.e1-b.e14*a.e2+b.e12*a.e4+b.e4*a.e12-b.e2*a.e14+b.e1*a.e24+b.one*a.e124;
  res.e125=b.e125*a.one+b.e25*a.e1-b.e15*a.e2+b.e12*a.e5+b.e5*a.e12-b.e2*a.e15+b.e1*a.e25+b.one*a.e125;
  res.e134=b.e134*a.one+b.e34*a.e1-b.e14*a.e3+b.e13*a.e4+b.e4*a.e13-b.e3*a.e14+b.e1*a.e34+b.one*a.e134;
  res.e135=b.e135*a.one+b.e35*a.e1-b.e15*a.e3+b.e13*a.e5+b.e5*a.e13-b.e3*a.e15+b.e1*a.e35+b.one*a.e135;
  res.e145=b.e145*a.one+b.e45*a.e1-b.e15*a.e4+b.e14*a.e5+b.e5*a.e14-b.e4*a.e15+b.e1*a.e45+b.one*a.e145;
  res.e234=b.e234*a.one+b.e34*a.e2-b.e24*a.e3+b.e23*a.e4+b.e4*a.e23-b.e3*a.e24+b.e2*a.e34+b.one*a.e234;
  res.e235=b.e235*a.one+b.e35*a.e2-b.e25*a.e3+b.e23*a.e5+b.e5*a.e23-b.e3*a.e25+b.e2*a.e35+b.one*a.e235;
  res.e245=b.e245*a.one+b.e45*a.e2-b.e25*a.e4+b.e24*a.e5+b.e5*a.e24-b.e4*a.e25+b.e2*a.e45+b.one*a.e245;
  res.e345=b.e345*a.one+b.e45*a.e3-b.e35*a.e4+b.e34*a.e5+b.e5*a.e34-b.e4*a.e35+b.e3*a.e45+b.one*a.e345;
  res.e1234=b.e1234*a.one+b.e234*a.e1-b.e134*a.e2+b.e124*a.e3-b.e123*a.e4+b.e34*a.e12-b.e24*a.e13+b.e23*a.e14+b.e14*a.e23-b.e13*a.e24+b.e12*a.e34+b.e4*a.e123-b.e3*a.e124+b.e2*a.e134-b.e1*a.e234+b.one*a.e1234;
  res.e1235=b.e1235*a.one+b.e235*a.e1-b.e135*a.e2+b.e125*a.e3-b.e123*a.e5+b.e35*a.e12-b.e25*a.e13+b.e23*a.e15+b.e15*a.e23-b.e13*a.e25+b.e12*a.e35+b.e5*a.e123-b.e3*a.e125+b.e2*a.e135-b.e1*a.e235+b.one*a.e1235;
  res.e1245=b.e1245*a.one+b.e245*a.e1-b.e145*a.e2+b.e125*a.e4-b.e124*a.e5+b.e45*a.e12-b.e25*a.e14+b.e24*a.e15+b.e15*a.e24-b.e14*a.e25+b.e12*a.e45+b.e5*a.e124-b.e4*a.e125+b.e2*a.e145-b.e1*a.e245+b.one*a.e1245;
  res.e1345=b.e1345*a.one+b.e345*a.e1-b.e145*a.e3+b.e135*a.e4-b.e134*a.e5+b.e45*a.e13-b.e35*a.e14+b.e34*a.e15+b.e15*a.e34-b.e14*a.e35+b.e13*a.e45+b.e5*a.e134-b.e4*a.e135+b.e3*a.e145-b.e1*a.e345+b.one*a.e1345;
  res.e2345=b.e2345*a.one+b.e345*a.e2-b.e245*a.e3+b.e235*a.e4-b.e234*a.e5+b.e45*a.e23-b.e35*a.e24+b.e34*a.e25+b.e25*a.e34-b.e24*a.e35+b.e23*a.e45+b.e5*a.e234-b.e4*a.e235+b.e3*a.e245-b.e2*a.e345+b.one*a.e2345;
  res.e12345=b.e12345*a.one+b.e2345*a.e1-b.e1345*a.e2+b.e1245*a.e3-b.e1235*a.e4+b.e1234*a.e5+b.e345*a.e12-b.e245*a.e13+b.e235*a.e14-b.e234*a.e15+b.e145*a.e23-b.e135*a.e24+b.e134*a.e25+b.e125*a.e34-b.e124*a.e35+b.e123*a.e45+b.e45*a.e123-b.e35*a.e124+b.e34*a.e125+b.e25*a.e134-b.e24*a.e135+b.e23*a.e145-b.e15*a.e234+b.e14*a.e235-b.e13*a.e245+b.e12*a.e345+b.e5*a.e1234-b.e4*a.e1235+b.e3*a.e1245-b.e2*a.e1345+b.e1*a.e2345+b.one*a.e12345;
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
// CGA.Dot : res = a | b 
// The inner product.
//***********************
CGA dot (CGA a, CGA b) {
  CGA res;
  res.one=b.one*a.one+b.e1*a.e1+b.e2*a.e2+b.e3*a.e3+b.e4*a.e4-b.e5*a.e5-b.e12*a.e12-b.e13*a.e13-b.e14*a.e14+b.e15*a.e15-b.e23*a.e23-b.e24*a.e24+b.e25*a.e25-b.e34*a.e34+b.e35*a.e35+b.e45*a.e45-b.e123*a.e123-b.e124*a.e124+b.e125*a.e125-b.e134*a.e134+b.e135*a.e135+b.e145*a.e145-b.e234*a.e234+b.e235*a.e235+b.e245*a.e245+b.e345*a.e345+b.e1234*a.e1234-b.e1235*a.e1235-b.e1245*a.e1245-b.e1345*a.e1345-b.e2345*a.e2345-b.e12345*a.e12345;
  res.e1=b.e1*a.one+b.one*a.e1-b.e12*a.e2-b.e13*a.e3-b.e14*a.e4+b.e15*a.e5+b.e2*a.e12+b.e3*a.e13+b.e4*a.e14-b.e5*a.e15-b.e123*a.e23-b.e124*a.e24+b.e125*a.e25-b.e134*a.e34+b.e135*a.e35+b.e145*a.e45-b.e23*a.e123-b.e24*a.e124+b.e25*a.e125-b.e34*a.e134+b.e35*a.e135+b.e45*a.e145+b.e1234*a.e234-b.e1235*a.e235-b.e1245*a.e245-b.e1345*a.e345-b.e234*a.e1234+b.e235*a.e1235+b.e245*a.e1245+b.e345*a.e1345-b.e12345*a.e2345-b.e2345*a.e12345;
  res.e2=b.e2*a.one+b.e12*a.e1+b.one*a.e2-b.e23*a.e3-b.e24*a.e4+b.e25*a.e5-b.e1*a.e12+b.e123*a.e13+b.e124*a.e14-b.e125*a.e15+b.e3*a.e23+b.e4*a.e24-b.e5*a.e25-b.e234*a.e34+b.e235*a.e35+b.e245*a.e45+b.e13*a.e123+b.e14*a.e124-b.e15*a.e125-b.e1234*a.e134+b.e1235*a.e135+b.e1245*a.e145-b.e34*a.e234+b.e35*a.e235+b.e45*a.e245-b.e2345*a.e345+b.e134*a.e1234-b.e135*a.e1235-b.e145*a.e1245+b.e12345*a.e1345+b.e345*a.e2345+b.e1345*a.e12345;
  res.e3=b.e3*a.one+b.e13*a.e1+b.e23*a.e2+b.one*a.e3-b.e34*a.e4+b.e35*a.e5-b.e123*a.e12-b.e1*a.e13+b.e134*a.e14-b.e135*a.e15-b.e2*a.e23+b.e234*a.e24-b.e235*a.e25+b.e4*a.e34-b.e5*a.e35+b.e345*a.e45-b.e12*a.e123+b.e1234*a.e124-b.e1235*a.e125+b.e14*a.e134-b.e15*a.e135+b.e1345*a.e145+b.e24*a.e234-b.e25*a.e235+b.e2345*a.e245+b.e45*a.e345-b.e124*a.e1234+b.e125*a.e1235-b.e12345*a.e1245-b.e145*a.e1345-b.e245*a.e2345-b.e1245*a.e12345;
  res.e4=b.e4*a.one+b.e14*a.e1+b.e24*a.e2+b.e34*a.e3+b.one*a.e4+b.e45*a.e5-b.e124*a.e12-b.e134*a.e13-b.e1*a.e14-b.e145*a.e15-b.e234*a.e23-b.e2*a.e24-b.e245*a.e25-b.e3*a.e34-b.e345*a.e35-b.e5*a.e45-b.e1234*a.e123-b.e12*a.e124-b.e1245*a.e125-b.e13*a.e134-b.e1345*a.e135-b.e15*a.e145-b.e23*a.e234-b.e2345*a.e235-b.e25*a.e245-b.e35*a.e345+b.e123*a.e1234+b.e12345*a.e1235+b.e125*a.e1245+b.e135*a.e1345+b.e235*a.e2345+b.e1235*a.e12345;
  res.e5=b.e5*a.one+b.e15*a.e1+b.e25*a.e2+b.e35*a.e3+b.e45*a.e4+b.one*a.e5-b.e125*a.e12-b.e135*a.e13-b.e145*a.e14-b.e1*a.e15-b.e235*a.e23-b.e245*a.e24-b.e2*a.e25-b.e345*a.e34-b.e3*a.e35-b.e4*a.e45-b.e1235*a.e123-b.e1245*a.e124-b.e12*a.e125-b.e1345*a.e134-b.e13*a.e135-b.e14*a.e145-b.e2345*a.e234-b.e23*a.e235-b.e24*a.e245-b.e34*a.e345+b.e12345*a.e1234+b.e123*a.e1235+b.e124*a.e1245+b.e134*a.e1345+b.e234*a.e2345+b.e1234*a.e12345;
  res.e12=b.e12*a.one+b.e123*a.e3+b.e124*a.e4-b.e125*a.e5+b.one*a.e12-b.e1234*a.e34+b.e1235*a.e35+b.e1245*a.e45+b.e3*a.e123+b.e4*a.e124-b.e5*a.e125+b.e12345*a.e345-b.e34*a.e1234+b.e35*a.e1235+b.e45*a.e1245+b.e345*a.e12345;
  res.e13=b.e13*a.one-b.e123*a.e2+b.e134*a.e4-b.e135*a.e5+b.one*a.e13+b.e1234*a.e24-b.e1235*a.e25+b.e1345*a.e45-b.e2*a.e123+b.e4*a.e134-b.e5*a.e135-b.e12345*a.e245+b.e24*a.e1234-b.e25*a.e1235+b.e45*a.e1345-b.e245*a.e12345;
  res.e14=b.e14*a.one-b.e124*a.e2-b.e134*a.e3-b.e145*a.e5+b.one*a.e14-b.e1234*a.e23-b.e1245*a.e25-b.e1345*a.e35-b.e2*a.e124-b.e3*a.e134-b.e5*a.e145+b.e12345*a.e235-b.e23*a.e1234-b.e25*a.e1245-b.e35*a.e1345+b.e235*a.e12345;
  res.e15=b.e15*a.one-b.e125*a.e2-b.e135*a.e3-b.e145*a.e4+b.one*a.e15-b.e1235*a.e23-b.e1245*a.e24-b.e1345*a.e34-b.e2*a.e125-b.e3*a.e135-b.e4*a.e145+b.e12345*a.e234-b.e23*a.e1235-b.e24*a.e1245-b.e34*a.e1345+b.e234*a.e12345;
  res.e23=b.e23*a.one+b.e123*a.e1+b.e234*a.e4-b.e235*a.e5-b.e1234*a.e14+b.e1235*a.e15+b.one*a.e23+b.e2345*a.e45+b.e1*a.e123+b.e12345*a.e145+b.e4*a.e234-b.e5*a.e235-b.e14*a.e1234+b.e15*a.e1235+b.e45*a.e2345+b.e145*a.e12345;
  res.e24=b.e24*a.one+b.e124*a.e1-b.e234*a.e3-b.e245*a.e5+b.e1234*a.e13+b.e1245*a.e15+b.one*a.e24-b.e2345*a.e35+b.e1*a.e124-b.e12345*a.e135-b.e3*a.e234-b.e5*a.e245+b.e13*a.e1234+b.e15*a.e1245-b.e35*a.e2345-b.e135*a.e12345;
  res.e25=b.e25*a.one+b.e125*a.e1-b.e235*a.e3-b.e245*a.e4+b.e1235*a.e13+b.e1245*a.e14+b.one*a.e25-b.e2345*a.e34+b.e1*a.e125-b.e12345*a.e134-b.e3*a.e235-b.e4*a.e245+b.e13*a.e1235+b.e14*a.e1245-b.e34*a.e2345-b.e134*a.e12345;
  res.e34=b.e34*a.one+b.e134*a.e1+b.e234*a.e2-b.e345*a.e5-b.e1234*a.e12+b.e1345*a.e15+b.e2345*a.e25+b.one*a.e34+b.e12345*a.e125+b.e1*a.e134+b.e2*a.e234-b.e5*a.e345-b.e12*a.e1234+b.e15*a.e1345+b.e25*a.e2345+b.e125*a.e12345;
  res.e35=b.e35*a.one+b.e135*a.e1+b.e235*a.e2-b.e345*a.e4-b.e1235*a.e12+b.e1345*a.e14+b.e2345*a.e24+b.one*a.e35+b.e12345*a.e124+b.e1*a.e135+b.e2*a.e235-b.e4*a.e345-b.e12*a.e1235+b.e14*a.e1345+b.e24*a.e2345+b.e124*a.e12345;
  res.e45=b.e45*a.one+b.e145*a.e1+b.e245*a.e2+b.e345*a.e3-b.e1245*a.e12-b.e1345*a.e13-b.e2345*a.e23+b.one*a.e45-b.e12345*a.e123+b.e1*a.e145+b.e2*a.e245+b.e3*a.e345-b.e12*a.e1245-b.e13*a.e1345-b.e23*a.e2345-b.e123*a.e12345;
  res.e123=b.e123*a.one-b.e1234*a.e4+b.e1235*a.e5+b.e12345*a.e45+b.one*a.e123+b.e4*a.e1234-b.e5*a.e1235+b.e45*a.e12345;
  res.e124=b.e124*a.one+b.e1234*a.e3+b.e1245*a.e5-b.e12345*a.e35+b.one*a.e124-b.e3*a.e1234-b.e5*a.e1245-b.e35*a.e12345;
  res.e125=b.e125*a.one+b.e1235*a.e3+b.e1245*a.e4-b.e12345*a.e34+b.one*a.e125-b.e3*a.e1235-b.e4*a.e1245-b.e34*a.e12345;
  res.e134=b.e134*a.one-b.e1234*a.e2+b.e1345*a.e5+b.e12345*a.e25+b.one*a.e134+b.e2*a.e1234-b.e5*a.e1345+b.e25*a.e12345;
  res.e135=b.e135*a.one-b.e1235*a.e2+b.e1345*a.e4+b.e12345*a.e24+b.one*a.e135+b.e2*a.e1235-b.e4*a.e1345+b.e24*a.e12345;
  res.e145=b.e145*a.one-b.e1245*a.e2-b.e1345*a.e3-b.e12345*a.e23+b.one*a.e145+b.e2*a.e1245+b.e3*a.e1345-b.e23*a.e12345;
  res.e234=b.e234*a.one+b.e1234*a.e1+b.e2345*a.e5-b.e12345*a.e15+b.one*a.e234-b.e1*a.e1234-b.e5*a.e2345-b.e15*a.e12345;
  res.e235=b.e235*a.one+b.e1235*a.e1+b.e2345*a.e4-b.e12345*a.e14+b.one*a.e235-b.e1*a.e1235-b.e4*a.e2345-b.e14*a.e12345;
  res.e245=b.e245*a.one+b.e1245*a.e1-b.e2345*a.e3+b.e12345*a.e13+b.one*a.e245-b.e1*a.e1245+b.e3*a.e2345+b.e13*a.e12345;
  res.e345=b.e345*a.one+b.e1345*a.e1+b.e2345*a.e2-b.e12345*a.e12+b.one*a.e345-b.e1*a.e1345-b.e2*a.e2345-b.e12*a.e12345;
  res.e1234=b.e1234*a.one-b.e12345*a.e5+b.one*a.e1234-b.e5*a.e12345;
  res.e1235=b.e1235*a.one-b.e12345*a.e4+b.one*a.e1235-b.e4*a.e12345;
  res.e1245=b.e1245*a.one+b.e12345*a.e3+b.one*a.e1245+b.e3*a.e12345;
  res.e1345=b.e1345*a.one-b.e12345*a.e2+b.one*a.e1345-b.e2*a.e12345;
  res.e2345=b.e2345*a.one+b.e12345*a.e1+b.one*a.e2345+b.e1*a.e12345;
  res.e12345=b.e12345*a.one+b.one*a.e12345;
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

CGA get_e1() {
  return CGA(0., 1., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.);
}

CGA get_e2() {
  return CGA(0., 0., 1., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.);
}

CGA get_e3() {
  return CGA(0., 0., 0., 1., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.);
}

CGA get_e4() {
  return CGA(0., 0., 0., 0., 1., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.);
}

CGA get_e5() {
  return CGA(0., 0., 0., 0., 0., 1., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.);
}

// PGA is point based. Vectors are points.

// We seldomly work in the natural basis, but instead in a null basis
// for this we create two null vectors 'origin' and 'infinity'

CGA get_eo() {
  return add(get_e4(), get_e5());
}

CGA get_ei() {
  return smul(0.5, substract(get_e5(), get_e4()));
}

// create a point from x,y,z coordinates
CGA point(float x, float y, float z) {
  CGA e1 = get_e1();
  CGA e2 = get_e2();
  CGA e3 = get_e3();

  CGA eo = get_eo();
  CGA ei = get_ei();

  float d = x*x + y*y + z*z;
  return add(add(smul(x, e1), smul(y, e2)), add(smul(z, e3), add(smul(0.5*d, ei), eo)));
}

CGA point(vec3 v) {
  return point(v.x, v.y, v.z);
}

vec4 CGA2vec4(CGA a) {
  return vec4(a.e1, a.e2, a.e3, a.e5 + a.e4);
}

// motors

CGA rotor(float angle, CGA axis) { return sadd(cos(angle/2.), normalized(muls(axis, -sin(angle/2.)))); }
CGA translator(CGA t) { return ssub(1.0, smul(0.5, geometric(t, get_ei()))); }
CGA dilator(float s) { return ssub(1., smul((1. - s) / (1. + s), meet(get_eo(), get_ei()))); }

`;