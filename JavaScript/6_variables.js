
// 1) comments

//  to make any line(s) comment or uncomment, first single click on a line (or) select multiple lines,  next fallow below

//     ctrl + /      ( or )     ctrl + k + c - make comments
//     ctrl + /      ( or )     ctrl + k + u - uncomments

// to write single comment line start with "//"
// example: this is comment line

// to write multiple comment lines, start with "/*"  and ends with "*/"

// example :

/*
comment line -1
comment line -2
comment line -3
comment line -4 */

// ==========================================================================================================

// 2) printing ways

// name1 = 'name1'
// name2 = 'name2'

// console.log(name1,name2)  // printing variables
// console.log(name1)   //printing variable
// console.log(name2)  // printing variable
// console.log(name2='name2 changed') // printing and changing variable


// ==========================================================================================================

//  3) variable types

//  var - variable       :  global-scope,   value changable,      can declare again ( value changing only )

//  let - variable       :  block-scope,    value changable,      can't declare again in same block

//  const - variable     :  blcok-scope,    value not changable,  can't declare again in same block


// ==========================================================================================================


// // 4) var variable declaring

// var name1 = 'name1'
// console.log(name1)

// var name2 = 'name2'
// console.log(name2) 

// name3 = 'name3'  // not mentioned "var"
// console.log(name3)

// var name1 = 'name1 value changing'  // not declaring again, value changing
// console.log(name1)

// name2 = 'name2 value changing'  // not declaring again, value changing, not mentioned "var"
// console.log(name2) 

// name3 = 'name2 value changing'  // not declaring again, value changing,    not mentioned "var"
// console.log(name3) 

// name4  // Error, ReferenceError: name4 is not defined


// ==========================================================================================================


// // 5) value changing ( new value asigning ) ways

// name1 = 'name1' // value asigning

// console.log(name1 = 'name1 value changing')  // value changing ( new value asigning ) and printing

// name1  = 'name1 value changing again' // value changing ( new value asigning )
// console.log(name1)  // value printing


// ==========================================================================================================

// 6) var variables

// name_a = 'var name_a'
// console.log('1 :', name_a)
// if (true) {
//     name_a = 'var name_a changing inside if-block'  
//     console.log('2 :', name_a)
// }
// console.log('3 :', name_a)
// console.log(name_a = '4 : var name_a changing outside')  



// output:
// 1 : var name_a
// 2 : var name_a changing inside if-block
// 3 : var name_a changing inside if-block
// 4 : var name_a changing outside 


// ==========================================================================================================

// // 7) let variable scope -1

// let name_d = 'let name_d'
// console.log('1 :', name_d)

// if (true) {
//     name_d = 'let name_d changing'  // not declare new let variable
//     console.log('2 :', name_d)
// }
// console.log('3 :', name_d)
// name_d = 'let name_d again changing'
// console.log('4 :', name_d)

// output:
// 1 : let name_d
// 2 : let name_d changing
// 3 : let name_d changing
// 4 : let name_d again changing



// ==========================================================================================================

// // 8) let variable scope -2

// let name_d = 'let name_d'
// console.log('1 :', name_d)

// if (true) {
//     let name_d = 'new let name_d'  // declared new let variable
//     console.log('2 :', name_d)
// }
// console.log('3 :', name_d)
// name_d = 'let name_d value changing'
// console.log('4 :', name_d)

// output :
// 1 : let name_d
// 2 : new let name_d
// 3 : let name_d
// 4 : let name_d value changing

// ==========================================================================================================


// // 9) const variable scope -1

// const name_d = 'const name_d'
// console.log('1 :', name_d)

// if (true) {
//     //  name_d = 'const name_d variable'  // Error, TypeError: Assignment to constant variable.
//     console.log('2 :', name_d)
// }
// console.log('3 :', name_d)
// // console.log('4 :', name_d = 'try to changing const name_d variable') //Error, TypeError: Assignment to constant variable.

// output:
// 1 : const name_d
// 2 : const name_d
// 3 : const name_d


// ==========================================================================================================

// // 10) const variable scope -2

// const name_d = 'const name_d'
// console.log('1 :', name_d)

// if (true) {
//     const name_d = 'const name_d variable' 
//     console.log('2 :', name_d)
// }
// console.log('3 :', name_d)
// // console.log('4 :', name_d = 'try to changing const name_d variable') //Error, TypeError: Assignment to constant variable.

// output :
// 1 : const name_d
// 2 : const name_d variable
// 3 : const name_d

// ==========================================================================================================
