CGAVec1 geometric(CGAVec1 mv1, CGAVec1 mv2) {
    return add(outer(mv1, mv2), inner(mv1, mv2));
}

CGAVec2 geometric(CGAVec1 mv1, CGAVec2 mv2) {
    return add(outer(mv1, mv2), inner(mv1, mv2));
}

CGAVec3 geometric(CGAVec1 mv1, CGAVec3 mv2) {
    return add(outer(mv1, mv2), inner(mv1, mv2));
}

CGAVec4 geometric(CGAVec1 mv1, CGAVec4 mv2) {
    return add(outer(mv1, mv2), inner(mv1, mv2));
}

CGAVec2 geometric(CGAVec2 mv1, CGAVec1 mv2) {
    return add(outer(mv1, mv2), inner(mv1, mv2));
}

CGAVec3 geometric(CGAVec3 mv1, CGAVec1 mv2) {
    return add(outer(mv1, mv2), inner(mv1, mv2));
}

CGAVec4 geometric(CGAVec4 mv1, CGAVec1 mv2) {
    return add(outer(mv1, mv2), inner(mv1, mv2));
}

/// \brief Compute the geometric product between two homogeneous multivectors mv1 (grade 2) and mv2 (grade 2). 
/// \tparam the type of value that we manipulate, either float or double or something else.
/// \param mv1 - the first homogeneous multivector of grade 2 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 2 represented as a Eigen::VectorXd
/// \param res - the result of mv1 mv2 whose grade is 2

CGAVec2 geometric(CGAVec2 mv1, CGAVec2 mv2){
    CGAVec2 res;
    res.t0 =  mv1.t0*mv2.t3 - mv1.t1*mv2.t4 - mv1.t2*mv2.t5 - mv1.t3*mv2.t0 + mv1.t4*mv2.t1 + mv1.t5*mv2.t2;
    res.t1 =  mv1.t0*mv2.t4 + mv1.t1*mv2.t3 - mv1.t2*mv2.t7 - mv1.t3*mv2.t1 - mv1.t4*mv2.t0 + mv1.t7*mv2.t2;
    res.t2 =  mv1.t0*mv2.t5 + mv1.t1*mv2.t7 + mv1.t2*mv2.t3 - mv1.t3*mv2.t2 - mv1.t5*mv2.t0 - mv1.t7*mv2.t1;
    res.t3 =  mv1.t0*mv2.t6 + mv1.t1*mv2.t8 + mv1.t2*mv2.t9 - mv1.t6*mv2.t0 - mv1.t8*mv2.t1 - mv1.t9*mv2.t2;
    res.t4 = -mv1.t0*mv2.t8 + mv1.t1*mv2.t6 - mv1.t5*mv2.t7 - mv1.t6*mv2.t1 + mv1.t7*mv2.t5 + mv1.t8*mv2.t0;
    res.t5 = -mv1.t0*mv2.t9 + mv1.t2*mv2.t6 + mv1.t4*mv2.t7 - mv1.t6*mv2.t2 - mv1.t7*mv2.t4 + mv1.t9*mv2.t0;
    res.t6 =  mv1.t3*mv2.t6 + mv1.t4*mv2.t8 + mv1.t5*mv2.t9 - mv1.t6*mv2.t3 - mv1.t8*mv2.t4 - mv1.t9*mv2.t5;
    res.t7 = -mv1.t1*mv2.t9 + mv1.t2*mv2.t8 - mv1.t4*mv2.t5 + mv1.t5*mv2.t4 - mv1.t8*mv2.t2 + mv1.t9*mv2.t1;
    res.t8 =  mv1.t3*mv2.t8 - mv1.t4*mv2.t6 + mv1.t6*mv2.t4 + mv1.t7*mv2.t9 - mv1.t8*mv2.t3 - mv1.t9*mv2.t7;
    res.t9 =  mv1.t3*mv2.t9 - mv1.t5*mv2.t6 + mv1.t6*mv2.t5 - mv1.t7*mv2.t8 + mv1.t8*mv2.t7 - mv1.t9*mv2.t3;
    return res;
}


/// \brief Compute the geometric product between two homogeneous multivectors mv1 (grade 2) and mv2 (grade 3). 
/// \tparam the type of value that we manipulate, either float or double or something else.
/// \param mv1 - the first homogeneous multivector of grade 2 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 3 represented as a Eigen::VectorXd
/// \param res - the result of mv1 mv2 whose grade is 3

CGAVec3 geometric(CGAVec2 mv1, CGAVec3 mv2){
    CGAVec3 res;
    res.t0 = -mv1.t0*mv2.t4 + mv1.t1*mv2.t2 + mv1.t2*mv2.t6 - mv1.t3*mv2.t0 - mv1.t5*mv2.t3 + mv1.t7*mv2.t1;
    res.t1 = -mv1.t0*mv2.t5 - mv1.t1*mv2.t6 + mv1.t2*mv2.t2 - mv1.t3*mv2.t1 + mv1.t4*mv2.t3 - mv1.t7*mv2.t0;
    res.t2 = -mv1.t1*mv2.t7 - mv1.t2*mv2.t8 + mv1.t4*mv2.t4 + mv1.t5*mv2.t5 - mv1.t8*mv2.t0 - mv1.t9*mv2.t1;
    res.t3 =  mv1.t0*mv2.t6 - mv1.t1*mv2.t5 + mv1.t2*mv2.t4 - mv1.t3*mv2.t3 - mv1.t4*mv2.t1 + mv1.t5*mv2.t0;
    res.t4 =  mv1.t0*mv2.t7 - mv1.t2*mv2.t9 - mv1.t4*mv2.t2 + mv1.t6*mv2.t0 + mv1.t7*mv2.t5 - mv1.t9*mv2.t3;
    res.t5 =  mv1.t0*mv2.t8 + mv1.t1*mv2.t9 - mv1.t5*mv2.t2 + mv1.t6*mv2.t1 - mv1.t7*mv2.t4 + mv1.t8*mv2.t3;
    res.t6 =  mv1.t0*mv2.t9 - mv1.t1*mv2.t8 + mv1.t2*mv2.t7 - mv1.t6*mv2.t3 + mv1.t8*mv2.t1 - mv1.t9*mv2.t0;
    res.t7 =  mv1.t3*mv2.t7 - mv1.t5*mv2.t9 - mv1.t6*mv2.t4 + mv1.t7*mv2.t8 + mv1.t8*mv2.t2 - mv1.t9*mv2.t6;
    res.t8 =  mv1.t3*mv2.t8 + mv1.t4*mv2.t9 - mv1.t6*mv2.t5 - mv1.t7*mv2.t7 + mv1.t8*mv2.t6 + mv1.t9*mv2.t2;
    res.t9 =  mv1.t3*mv2.t9 - mv1.t4*mv2.t8 + mv1.t5*mv2.t7 - mv1.t6*mv2.t6 - mv1.t8*mv2.t5 + mv1.t9*mv2.t4;
    return res;
}


/// \brief Compute the geometric product between two homogeneous multivectors mv1 (grade 2) and mv2 (grade 4). 
/// \tparam the type of value that we manipulate, either float or double or something else.
/// \param mv1 - the first homogeneous multivector of grade 2 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 4 represented as a Eigen::VectorXd
/// \param res - the result of mv1 mv2 whose grade is 4

CGAVec4 geometric(CGAVec2 mv1, CGAVec4 mv2){
    CGAVec4 res;
    res.t0 =  mv1.t0*mv2.t3 - mv1.t1*mv2.t2 + mv1.t2*mv2.t1 - mv1.t3*mv2.t0;
    res.t1 =  mv1.t2*mv2.t4 - mv1.t5*mv2.t3 + mv1.t7*mv2.t2 - mv1.t9*mv2.t0;
    res.t2 = -mv1.t1*mv2.t4 + mv1.t4*mv2.t3 - mv1.t7*mv2.t1 + mv1.t8*mv2.t0;
    res.t3 =  mv1.t0*mv2.t4 - mv1.t4*mv2.t2 + mv1.t5*mv2.t1 - mv1.t6*mv2.t0;
    res.t4 =  mv1.t3*mv2.t4 - mv1.t6*mv2.t3 + mv1.t8*mv2.t2 - mv1.t9*mv2.t1;
    return res;
}


/// \brief Compute the geometric product between two homogeneous multivectors mv1 (grade 3) and mv2 (grade 2). 
/// \tparam the type of value that we manipulate, either float or double or something else.
/// \param mv1 - the first homogeneous multivector of grade 3 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 2 represented as a Eigen::VectorXd
/// \param res - the result of mv1 mv2 whose grade is 3

CGAVec3 geometric(CGAVec3 mv1, CGAVec2 mv2){
    CGAVec3 res;
    res.t0 =  mv1.t0*mv2.t3 - mv1.t1*mv2.t7 - mv1.t2*mv2.t1 + mv1.t3*mv2.t5 + mv1.t4*mv2.t0 - mv1.t6*mv2.t2;
    res.t1 =  mv1.t0*mv2.t7 + mv1.t1*mv2.t3 - mv1.t2*mv2.t2 - mv1.t3*mv2.t4 + mv1.t5*mv2.t0 + mv1.t6*mv2.t1;
    res.t2 =  mv1.t0*mv2.t8 + mv1.t1*mv2.t9 - mv1.t4*mv2.t4 - mv1.t5*mv2.t5 + mv1.t7*mv2.t1 + mv1.t8*mv2.t2;
    res.t3 = -mv1.t0*mv2.t5 + mv1.t1*mv2.t4 + mv1.t3*mv2.t3 - mv1.t4*mv2.t2 + mv1.t5*mv2.t1 - mv1.t6*mv2.t0;
    res.t4 = -mv1.t0*mv2.t6 + mv1.t2*mv2.t4 + mv1.t3*mv2.t9 - mv1.t5*mv2.t7 - mv1.t7*mv2.t0 + mv1.t9*mv2.t2;
    res.t5 = -mv1.t1*mv2.t6 + mv1.t2*mv2.t5 - mv1.t3*mv2.t8 + mv1.t4*mv2.t7 - mv1.t8*mv2.t0 - mv1.t9*mv2.t1;
    res.t6 =  mv1.t0*mv2.t9 - mv1.t1*mv2.t8 + mv1.t3*mv2.t6 - mv1.t7*mv2.t2 + mv1.t8*mv2.t1 - mv1.t9*mv2.t0;
    res.t7 = -mv1.t2*mv2.t8 + mv1.t4*mv2.t6 + mv1.t6*mv2.t9 - mv1.t7*mv2.t3 - mv1.t8*mv2.t7 + mv1.t9*mv2.t5;
    res.t8 = -mv1.t2*mv2.t9 + mv1.t5*mv2.t6 - mv1.t6*mv2.t8 + mv1.t7*mv2.t7 - mv1.t8*mv2.t3 - mv1.t9*mv2.t4;
    res.t9 = -mv1.t4*mv2.t9 + mv1.t5*mv2.t8 + mv1.t6*mv2.t6 - mv1.t7*mv2.t5 + mv1.t8*mv2.t4 - mv1.t9*mv2.t3;
    return res;
}


/// \brief Compute the geometric product between two homogeneous multivectors mv1 (grade 3) and mv2 (grade 3). 
/// \tparam the type of value that we manipulate, either float or double or something else.
/// \param mv1 - the first homogeneous multivector of grade 3 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 3 represented as a Eigen::VectorXd
/// \param res - the result of mv1 mv2 whose grade is 2

CGAVec2 geometric(CGAVec3 mv1, CGAVec3 mv2){
    CGAVec2 res;
    res.t0 = -mv1.t0*mv2.t4 - mv1.t1*mv2.t5 - mv1.t3*mv2.t6 + mv1.t4*mv2.t0 + mv1.t5*mv2.t1 + mv1.t6*mv2.t3;
    res.t1 =  mv1.t0*mv2.t2 + mv1.t1*mv2.t6 - mv1.t2*mv2.t0 - mv1.t3*mv2.t5 + mv1.t5*mv2.t3 - mv1.t6*mv2.t1;
    res.t2 = -mv1.t0*mv2.t6 + mv1.t1*mv2.t2 - mv1.t2*mv2.t1 + mv1.t3*mv2.t4 - mv1.t4*mv2.t3 + mv1.t6*mv2.t0;
    res.t3 = -mv1.t0*mv2.t7 - mv1.t1*mv2.t8 - mv1.t3*mv2.t9 + mv1.t7*mv2.t0 + mv1.t8*mv2.t1 + mv1.t9*mv2.t3;
    res.t4 =  mv1.t1*mv2.t9 + mv1.t2*mv2.t4 - mv1.t3*mv2.t8 - mv1.t4*mv2.t2 + mv1.t8*mv2.t3 - mv1.t9*mv2.t1;
    res.t5 = -mv1.t0*mv2.t9 + mv1.t2*mv2.t5 + mv1.t3*mv2.t7 - mv1.t5*mv2.t2 - mv1.t7*mv2.t3 + mv1.t9*mv2.t0;
    res.t6 =  mv1.t4*mv2.t7 + mv1.t5*mv2.t8 - mv1.t6*mv2.t9 - mv1.t7*mv2.t4 - mv1.t8*mv2.t5 + mv1.t9*mv2.t6;
    res.t7 =  mv1.t0*mv2.t8 - mv1.t1*mv2.t7 + mv1.t4*mv2.t5 - mv1.t5*mv2.t4 + mv1.t7*mv2.t1 - mv1.t8*mv2.t0;
    res.t8 = -mv1.t2*mv2.t7 + mv1.t5*mv2.t9 + mv1.t6*mv2.t8 + mv1.t7*mv2.t2 - mv1.t8*mv2.t6 - mv1.t9*mv2.t5;
    res.t9 = -mv1.t2*mv2.t8 - mv1.t4*mv2.t9 - mv1.t6*mv2.t7 + mv1.t7*mv2.t6 + mv1.t8*mv2.t2 + mv1.t9*mv2.t4;
    return res;
}


/// \brief Compute the geometric product between two homogeneous multivectors mv1 (grade 3) and mv2 (grade 3). 
/// \tparam the type of value that we manipulate, either float or double or something else.
/// \param mv1 - the first homogeneous multivector of grade 3 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 3 represented as a Eigen::VectorXd
/// \param res - the result of mv1 mv2 whose grade is 4

CGAVec4 geometric(CGAVec3 mv1, CGAVec3 mv2){
    CGAVec4 res;
    res.t0 = -mv1.t0*mv2.t5 + mv1.t1*mv2.t4 - mv1.t2*mv2.t3 - mv1.t3*mv2.t2 + mv1.t4*mv2.t1 - mv1.t5*mv2.t0;
    res.t1 = -mv1.t1*mv2.t9 + mv1.t3*mv2.t8 - mv1.t5*mv2.t6 - mv1.t6*mv2.t5 + mv1.t8*mv2.t3 - mv1.t9*mv2.t1;
    res.t2 =  mv1.t0*mv2.t9 - mv1.t3*mv2.t7 + mv1.t4*mv2.t6 + mv1.t6*mv2.t4 - mv1.t7*mv2.t3 + mv1.t9*mv2.t0;
    res.t3 = -mv1.t0*mv2.t8 + mv1.t1*mv2.t7 - mv1.t2*mv2.t6 - mv1.t6*mv2.t2 + mv1.t7*mv2.t1 - mv1.t8*mv2.t0;
    res.t4 = -mv1.t2*mv2.t9 + mv1.t4*mv2.t8 - mv1.t5*mv2.t7 - mv1.t7*mv2.t5 + mv1.t8*mv2.t4 - mv1.t9*mv2.t2;
    return res;
}


/// \brief Compute the geometric product between two homogeneous multivectors mv1 (grade 3) and mv2 (grade 4). 
/// \tparam the type of value that we manipulate, either float or double or something else.
/// \param mv1 - the first homogeneous multivector of grade 3 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 4 represented as a Eigen::VectorXd
/// \param res - the result of mv1 mv2 whose grade is 3

CGAVec3 geometric(CGAVec3 mv1, CGAVec4 mv2){
    CGAVec3 res;
    res.t0 = -mv1.t1*mv2.t3 + mv1.t3*mv2.t2 - mv1.t5*mv2.t0;
    res.t1 =  mv1.t0*mv2.t3 - mv1.t3*mv2.t1 + mv1.t4*mv2.t0;
    res.t2 = -mv1.t3*mv2.t4 + mv1.t6*mv2.t3 - mv1.t9*mv2.t0;
    res.t3 = -mv1.t0*mv2.t2 + mv1.t1*mv2.t1 - mv1.t2*mv2.t0;
    res.t4 =  mv1.t1*mv2.t4 - mv1.t6*mv2.t2 + mv1.t8*mv2.t0;
    res.t5 = -mv1.t0*mv2.t4 + mv1.t6*mv2.t1 - mv1.t7*mv2.t0;
    res.t6 = -mv1.t2*mv2.t3 + mv1.t4*mv2.t2 - mv1.t5*mv2.t1;
    res.t7 = -mv1.t5*mv2.t4 + mv1.t8*mv2.t3 - mv1.t9*mv2.t2;
    res.t8 =  mv1.t4*mv2.t4 - mv1.t7*mv2.t3 + mv1.t9*mv2.t1;
    res.t9 = -mv1.t2*mv2.t4 + mv1.t7*mv2.t2 - mv1.t8*mv2.t1;
    return res;
}


/// \brief Compute the geometric product between two homogeneous multivectors mv1 (grade 4) and mv2 (grade 2). 
/// \tparam the type of value that we manipulate, either float or double or something else.
/// \param mv1 - the first homogeneous multivector of grade 4 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 2 represented as a Eigen::VectorXd
/// \param res - the result of mv1 mv2 whose grade is 4

CGAVec4 geometric(CGAVec4 mv1, CGAVec2 mv2){
    CGAVec4 res;
    res.t0 =  mv1.t0*mv2.t3 - mv1.t1*mv2.t2 + mv1.t2*mv2.t1 - mv1.t3*mv2.t0;
    res.t1 =  mv1.t0*mv2.t9 - mv1.t2*mv2.t7 + mv1.t3*mv2.t5 - mv1.t4*mv2.t2;
    res.t2 = -mv1.t0*mv2.t8 + mv1.t1*mv2.t7 - mv1.t3*mv2.t4 + mv1.t4*mv2.t1;
    res.t3 =  mv1.t0*mv2.t6 - mv1.t1*mv2.t5 + mv1.t2*mv2.t4 - mv1.t4*mv2.t0;
    res.t4 =  mv1.t1*mv2.t9 - mv1.t2*mv2.t8 + mv1.t3*mv2.t6 - mv1.t4*mv2.t3;
    return res;
}


/// \brief Compute the geometric product between two homogeneous multivectors mv1 (grade 4) and mv2 (grade 3). 
/// \tparam the type of value that we manipulate, either float or double or something else.
/// \param mv1 - the first homogeneous multivector of grade 4 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 3 represented as a Eigen::VectorXd
/// \param res - the result of mv1 mv2 whose grade is 3

CGAVec3 geometric(CGAVec4 mv1, CGAVec3 mv2){
    CGAVec4 res;
    res.t0 = -mv1.t0*mv2.t5 + mv1.t2*mv2.t3 - mv1.t3*mv2.t1;
    res.t1 =  mv1.t0*mv2.t4 - mv1.t1*mv2.t3 + mv1.t3*mv2.t0;
    res.t2 = -mv1.t0*mv2.t9 + mv1.t3*mv2.t6 - mv1.t4*mv2.t3;
    res.t3 = -mv1.t0*mv2.t2 + mv1.t1*mv2.t1 - mv1.t2*mv2.t0;
    res.t4 =  mv1.t0*mv2.t8 - mv1.t2*mv2.t6 + mv1.t4*mv2.t1;
    res.t5 = -mv1.t0*mv2.t7 + mv1.t1*mv2.t6 - mv1.t4*mv2.t0;
    res.t6 = -mv1.t1*mv2.t5 + mv1.t2*mv2.t4 - mv1.t3*mv2.t2;
    res.t7 = -mv1.t2*mv2.t9 + mv1.t3*mv2.t8 - mv1.t4*mv2.t5;
    res.t8 =  mv1.t1*mv2.t9 - mv1.t3*mv2.t7 + mv1.t4*mv2.t4;
    res.t9 = -mv1.t1*mv2.t8 + mv1.t2*mv2.t7 - mv1.t4*mv2.t2;
    return res;
}


/// \brief Compute the geometric product between two homogeneous multivectors mv1 (grade 4) and mv2 (grade 4). 
/// \tparam the type of value that we manipulate, either float or double or something else.
/// \param mv1 - the first homogeneous multivector of grade 4 represented as an Eigen::VectorXd
/// \param mv2 - the second homogeneous multivector of grade 4 represented as a Eigen::VectorXd
/// \param res - the result of mv1 mv2 whose grade is 2

CGAVec2 geometric(CGAVec4 mv1, CGAVec4 mv2){
    CGAVec2 res;
    res.t0 = -mv1.t0*mv2.t3 + mv1.t3*mv2.t0;
    res.t1 =  mv1.t0*mv2.t2 - mv1.t2*mv2.t0;
    res.t2 = -mv1.t0*mv2.t1 + mv1.t1*mv2.t0;
    res.t3 = -mv1.t0*mv2.t4 + mv1.t4*mv2.t0;
    res.t4 = -mv1.t2*mv2.t3 + mv1.t3*mv2.t2;
    res.t5 =  mv1.t1*mv2.t3 - mv1.t3*mv2.t1;
    res.t6 = -mv1.t3*mv2.t4 + mv1.t4*mv2.t3;
    res.t7 = -mv1.t1*mv2.t2 + mv1.t2*mv2.t1;
    res.t8 =  mv1.t2*mv2.t4 - mv1.t4*mv2.t2;
    res.t9 = -mv1.t1*mv2.t4 + mv1.t4*mv2.t1;
    return res;
}