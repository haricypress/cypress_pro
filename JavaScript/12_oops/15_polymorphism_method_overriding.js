/*
polymorphism : method overriding

if any method / variable is there with same name in parent and child classes then
executing child class method / variable.

polymorphism : method overloading

if calling a method with different no.of parameters then executing most similar method,
if some methods with same name and different no.of parameters are there then executing last method


*/

// ======================================================================================================

// 15)  polymorphism demo - 1, polymorphism : method overriding


// class A  - parent class
// class B - child class

// class A{
//     a = 'calss A - variable a'

//     show(x){
//         console.log('class A - show method')
//         console.log(x)
//     }
// }

// class B extends A{  // inheritance creating with "extends" keyword
//     a = 'class B - variable a'
    
//     show(y){
//         console.log('class B - show method')
//         console.log(y)
//     }
// }

// const b_obj = new B()  // class B object creating

// console.log(b_obj.a)  // accessing class B - variable "a"

// b_obj.show(10)

// output :
// class B - variable a
// class B - show method
// 10

