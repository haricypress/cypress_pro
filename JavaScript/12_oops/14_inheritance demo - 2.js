
// // 14)  inheritance demo - 2, multi-level


// class A  - parent class to "class B"
// class B - child class to "class A" and parent class to "class C"
// clsas C - child class to "class B"

// here object is creating only to "class C"

// class A{
//     a = 10
//     displayA(){
//         console.log('class A - display method')
//     }
// }

// class B extends A{  // inheritance creating with "extends" keyword
//     b = 20
//     displayB(){
//         console.log('class B - display method')
//     }
// }


// class C extends B{
//     c = 30
//     displayC(){
//         console.log('class C - display method')
//     }
// }

// const C_obj = new C()  // class B object creating

// console.log(C_obj.a)  // accessing class A - variable "a"
// C_obj.displayA()  // accessing class A - method "displayA()"

// console.log(C_obj.b) // accessing class B - variable "b"
// C_obj.displayB() // accessing class B - method "displayB()"

// console.log(C_obj.c) // accessing class C - variable "c"
// C_obj.displayC() // accessing class C - method "displayB()"



// output:
// 10
// class A - display method
// 20
// class B - display method
// 30
// class C - display method
