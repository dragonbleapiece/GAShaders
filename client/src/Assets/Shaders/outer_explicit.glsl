/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 0) and mv2 (grade 0). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 0 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 0 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 0
float outer(float mv1, float mv2){
    return mv1 * mv2;
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 0) and mv2 (grade 1). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 0 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 1 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 1
CGAVec1 outer(float mv1, CGAVec1 mv2){
    return smul(mv1, mv2);
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 0) and mv2 (grade 2). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 0 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 2 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 2
CGAVec2 outer(float mv1, CGAVec2){
    return smul(mv1, mv2);
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 0) and mv2 (grade 3). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 0 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 3 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 3
CGAVec3 outer(float mv1, CGAVec3 mv2){
    return smul(mv1, mv2);
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 0) and mv2 (grade 4). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 0 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 4 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 4
CGAVec4 outer(float mv1, CGAVec4 mv2){
    return smul(mv1, mv2);
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 0) and mv2 (grade 5). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 0 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 5 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 5
CGAVec5 outer(float mv1, CGAVec5 mv2){
    return smul(mv1, mv2);
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 1) and mv2 (grade 0). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 1 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 0 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 1
CGAVec1 outer(CGAVec1 mv1, float mv2){
    return muls(mv1, mv2);
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 1) and mv2 (grade 1). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 1 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 1 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 2

CGAVec2 outer(CGAVec1 mv1, CGAVec1 mv2){
    CGAVec2 res;
    res.t0 =  mv1.t0*mv2.t1 - mv1.t1*mv2.t0;
    res.t1 =  mv1.t0*mv2.t2 - mv1.t2*mv2.t0;
    res.t2 =  mv1.t0*mv2.t3 - mv1.t3*mv2.t0;
    res.t3 =  mv1.t0*mv2.t4 - mv1.t4*mv2.t0;
    res.t4 =  mv1.t1*mv2.t2 - mv1.t2*mv2.t1;
    res.t5 =  mv1.t1*mv2.t3 - mv1.t3*mv2.t1;
    res.t6 =  mv1.t1*mv2.t4 - mv1.t4*mv2.t1;
    res.t7 =  mv1.t2*mv2.t3 - mv1.t3*mv2.t2;
    res.t8 =  mv1.t2*mv2.t4 - mv1.t4*mv2.t2;
    res.t9 =  mv1.t3*mv2.t4 - mv1.t4*mv2.t3;
    return res;
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 1) and mv2 (grade 2). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 1 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 2 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 3

CGAVec3 outer(CGAVec1 mv1, CGAVec2 mv2){
    CGAVec3 res;
    res.t0 =  mv1.t0*mv2.t4 - mv1.t1*mv2.t1 + mv1.t2*mv2.t0;
    res.t1 =  mv1.t0*mv2.t5 - mv1.t1*mv2.t2 + mv1.t3*mv2.t0;
    res.t2 =  mv1.t0*mv2.t6 - mv1.t1*mv2.t3 + mv1.t4*mv2.t0;
    res.t3 =  mv1.t0*mv2.t7 - mv1.t2*mv2.t2 + mv1.t3*mv2.t1;
    res.t4 =  mv1.t0*mv2.t8 - mv1.t2*mv2.t3 + mv1.t4*mv2.t1;
    res.t5 =  mv1.t0*mv2.t9 - mv1.t3*mv2.t3 + mv1.t4*mv2.t2;
    res.t6 =  mv1.t1*mv2.t7 - mv1.t2*mv2.t5 + mv1.t3*mv2.t4;
    res.t7 =  mv1.t1*mv2.t8 - mv1.t2*mv2.t6 + mv1.t4*mv2.t4;
    res.t8 =  mv1.t1*mv2.t9 - mv1.t3*mv2.t6 + mv1.t4*mv2.t5;
    res.t9 =  mv1.t2*mv2.t9 - mv1.t3*mv2.t8 + mv1.t4*mv2.t7;
    CGAVec3 res;
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 1) and mv2 (grade 3). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 1 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 3 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 4

CGAVec4 outer(CGAVec1 mv1, CGAVec3 mv2){
    CGAVec4 res;
    res.t0 =  mv1.t0*mv2.t6 - mv1.t1*mv2.t3 + mv1.t2*mv2.t1 - mv1.t3*mv2.t0;
    res.t1 =  mv1.t0*mv2.t7 - mv1.t1*mv2.t4 + mv1.t2*mv2.t2 - mv1.t4*mv2.t0;
    res.t2 =  mv1.t0*mv2.t8 - mv1.t1*mv2.t5 + mv1.t3*mv2.t2 - mv1.t4*mv2.t1;
    res.t3 =  mv1.t0*mv2.t9 - mv1.t2*mv2.t5 + mv1.t3*mv2.t4 - mv1.t4*mv2.t3;
    res.t4 =  mv1.t1*mv2.t9 - mv1.t2*mv2.t8 + mv1.t3*mv2.t7 - mv1.t4*mv2.t6;
    return res;
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 1) and mv2 (grade 4). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 1 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 4 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 5

CGAVec5 outer(CGAVec1 mv1, CGAVec4 mv2){
    CGAVec5 res;
    res.t0 =  mv1.t0*mv2.t4 - mv1.t1*mv2.t3 + mv1.t2*mv2.t2 - mv1.t3*mv2.t1 + mv1.t4*mv2.t0;
    return res;
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 2) and mv2 (grade 0). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 2 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 0 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 2

CGAVec2 outer(CGAVec2 mv1, float mv2){
    return muls(mv1, mv2);
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 2) and mv2 (grade 1). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 2 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 1 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 3

CGAVec3 outer(CGAVec2 mv1, CGAVec1 mv2){
    CGAVec3 res;
    res.t0 =  mv1.t0*mv2.t2 - mv1.t1*mv2.t1 + mv1.t4*mv2.t0;
    res.t1 =  mv1.t0*mv2.t3 - mv1.t2*mv2.t1 + mv1.t5*mv2.t0;
    res.t2 =  mv1.t0*mv2.t4 - mv1.t3*mv2.t1 + mv1.t6*mv2.t0;
    res.t3 =  mv1.t1*mv2.t3 - mv1.t2*mv2.t2 + mv1.t7*mv2.t0;
    res.t4 =  mv1.t1*mv2.t4 - mv1.t3*mv2.t2 + mv1.t8*mv2.t0;
    res.t5 =  mv1.t2*mv2.t4 - mv1.t3*mv2.t3 + mv1.t9*mv2.t0;
    res.t6 =  mv1.t4*mv2.t3 - mv1.t5*mv2.t2 + mv1.t7*mv2.t1;
    res.t7 =  mv1.t4*mv2.t4 - mv1.t6*mv2.t2 + mv1.t8*mv2.t1;
    res.t8 =  mv1.t5*mv2.t4 - mv1.t6*mv2.t3 + mv1.t9*mv2.t1;
    res.t9 =  mv1.t7*mv2.t4 - mv1.t8*mv2.t3 + mv1.t9*mv2.t2;
    return res;
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 2) and mv2 (grade 2). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 2 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 2 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 4

CGAVec4 outer(CGAVec2 mv1, CGAVec2 mv2){
    CGAVec4 res;
    res.t0 =  mv1.t0*mv2.t7 - mv1.t1*mv2.t5 + mv1.t2*mv2.t4 + mv1.t4*mv2.t2 - mv1.t5*mv2.t1 + mv1.t7*mv2.t0;
    res.t1 =  mv1.t0*mv2.t8 - mv1.t1*mv2.t6 + mv1.t3*mv2.t4 + mv1.t4*mv2.t3 - mv1.t6*mv2.t1 + mv1.t8*mv2.t0;
    res.t2 =  mv1.t0*mv2.t9 - mv1.t2*mv2.t6 + mv1.t3*mv2.t5 + mv1.t5*mv2.t3 - mv1.t6*mv2.t2 + mv1.t9*mv2.t0;
    res.t3 =  mv1.t1*mv2.t9 - mv1.t2*mv2.t8 + mv1.t3*mv2.t7 + mv1.t7*mv2.t3 - mv1.t8*mv2.t2 + mv1.t9*mv2.t1;
    res.t4 =  mv1.t4*mv2.t9 - mv1.t5*mv2.t8 + mv1.t6*mv2.t7 + mv1.t7*mv2.t6 - mv1.t8*mv2.t5 + mv1.t9*mv2.t4;
    return res;
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 2) and mv2 (grade 3). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 2 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 3 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 5

void outer(CGAVec2 mv1, CGAVec3 mv2){
    CGAVec5 res;
    res.t0 =  mv1.t0*mv2.t9 - mv1.t1*mv2.t8 + mv1.t2*mv2.t7 - mv1.t3*mv2.t6 + mv1.t4*mv2.t5 - mv1.t5*mv2.t4 + mv1.t6*mv2.t3 + mv1.t7*mv2.t2 - mv1.t8*mv2.t1 + mv1.t9*mv2.t0;
    return res;
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 3) and mv2 (grade 0). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 3 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 0 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 3

CGAVec3 outer(CGAVec3 mv1, float mv2){
    return muls(mv1, mv2);
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 3) and mv2 (grade 1). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 3 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 1 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 4

CGAVec4 outer(CGAVec3 mv1, CGAVec1 mv2){
    CGAVec4 res;
    res.t0 =  mv1.t0*mv2.t3 - mv1.t1*mv2.t2 + mv1.t3*mv2.t1 - mv1.t6*mv2.t0;
    res.t1 =  mv1.t0*mv2.t4 - mv1.t2*mv2.t2 + mv1.t4*mv2.t1 - mv1.t7*mv2.t0;
    res.t2 =  mv1.t1*mv2.t4 - mv1.t2*mv2.t3 + mv1.t5*mv2.t1 - mv1.t8*mv2.t0;
    res.t3 =  mv1.t3*mv2.t4 - mv1.t4*mv2.t3 + mv1.t5*mv2.t2 - mv1.t9*mv2.t0;
    res.t4 =  mv1.t6*mv2.t4 - mv1.t7*mv2.t3 + mv1.t8*mv2.t2 - mv1.t9*mv2.t1;
    return res;
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 3) and mv2 (grade 2). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 3 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 2 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 5

CGAVec5 outer(CGAVec3 mv1, CGAVec2 mv2){
    CGAVec5 res;
    res.t0 =  mv1.t0*mv2.t9 - mv1.t1*mv2.t8 + mv1.t2*mv2.t7 + mv1.t3*mv2.t6 - mv1.t4*mv2.t5 + mv1.t5*mv2.t4 - mv1.t6*mv2.t3 + mv1.t7*mv2.t2 - mv1.t8*mv2.t1 + mv1.t9*mv2.t0;
    return res;
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 4) and mv2 (grade 0). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 4 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 0 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 4

CGAVec4 outer(CGAVec4 mv1, float mv2){
    return muls(mv1, mv2);
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 4) and mv2 (grade 1). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 4 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 1 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 5

CGAVec5 outer(CGAVec4 mv1, CGAVec1 mv2){
    CGAVec5 res;
    res.t0 =  mv1.t0*mv2.t4 - mv1.t1*mv2.t3 + mv1.t2*mv2.t2 - mv1.t3*mv2.t1 + mv1.t4*mv2.t0;
    return res;
}


/// \brief Compute the outer product between two homogeneous multivectors mv1 (grade 5) and mv2 (grade 0). 
/// \tparam the type of value that we manipulate, either float or double or something.
/// \param mv1 - the first homogeneous multivector of grade 5 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 0 represented as a Eigen::VectorXd
/// \param res - the result of mv1^mv2, which is also a homogeneous multivector of grade 5

CGAVec5 outer(CGAVec5 mv1, float mv2){
    return muls(mv1, mv2);
}