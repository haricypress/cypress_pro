
// // 1) calling non-static variable and non-static method 

// class non_static_class_demo1 {

//     emp_name = 'hari' // assigning variable outside of method

//     details(){
//         this.emp_age = 26  // assigning variable inside of method
//     }


//     display() { // non-static method
//         console.log('this is display method')
//         console.log(this.emp_name)  // accessing non-static variable
//         console.log(this.emp_age)  // accessing non-static variable
//     }

// }

// const obj = new non_static_class_demo1()  // "obj" is an object,  "const" variable type - value not changable , block-scope

// console.log(obj.emp_name) // printing value of "name" variable

// obj.details() // calling non-static method 
// obj.display() // calling non-static method


// output :
// hari
// this is display method
// hari
// 26



// Note :   without object name, can't access any non-static variable (or) non-static method of class
//          class is a logical enity, memory not occupy,
//          only objects occupy memory
//          non-static variables and methods storing in objects

// ======================================================================================================

// // 2) calling static variable and static method 

// class static_class_demo1 {

//     static emp_name = 'hari' // static variable
//     static name = 'kishore' // static variable

//     static display() { // static method
//         console.log('this is display method')
//         console.log(this.emp_name)  // calling static variable
//         console.log(this.name)   // calling static variable
//     }

// }

// console.log(static_class_demo1.name)  //  calling static variable
// // if "name" static variable is not available then class name will display


// static_class_demo1.display() // calling static method

// Note :   static variables and methods storing in separate memory, not storing in objects
//          no object need to create for static variables and static methods
//          static variables and static methods can call with class name

// ======================================================================================================


// // 3) can't call non-static variable and non-static method with class name

// class static_class_demo1 {
//     // static variable
//     emp_name = 'hari' // non-static variable

//     // static method
//     display() { // non-static method
//         console.log('this is display method')
//         console.log(this.name)  // calling non-static variable
//     }

// }

// console.log(static_class_demo1.emp_name) // Error, "undefined" is displaying, 
// // above statement assumes no static variable with "emp_name" name
// // "emp_name" is non-static variable

// console.log(static_class_demo1.name) // displaying class name only,
// // if "name" static variable is available then variable's value will display, class name will not display

// // static_class_demo1.display() // Error, TypeError: static_class_demo1.display is not a function



// ======================================================================================================


// // 4) calling method with parameters

// class class_demo2 {

//     //methods
//     add(x,y) { // non-static method
//         console.log('first value : ', x)  // taking "x" value as number
//         console.log('second value : ' + y)  // taking "y" value as string. bcoz, "+" symbol used
//         console.log('sum : ', + (x+y))  // by coersion, changing "y" value's datatype to Number then adding
//     }

// }

// const obj = new class_demo2()  // const variable - value not changable , block-scope
// obj.add(5 ,8) // calling non-static method

// ======================================================================================================

// // 5) calling same method with diff datatype parameters

// class class_demo3 {

//     //methods
//     add(x,y) { // non-static method
//         console.log('first value : ', x)  // taking "x" value as number
//         console.log('second value : ' + y)  // taking "y" value as string. bcoz, "+" symbol used
//         console.log('sum : ', + (x+y))  // by coersion, changing "y" value's datatype to Number then adding
//     }

// }

// const obj = new class_demo3()  // const variable - value not changable , block-scope

// obj.add(5 ,8) // calling non-static method
// console.log('=============================')  // just for decoration

// obj.add(5. ,8) 
// console.log('=============================')

// obj.add(5.0 ,8) 
// console.log('=============================')

// obj.add(5.1 ,8) 
// console.log('=============================')

// obj.add("5" ,8)

// ======================================================================================================

// // 6) constructor demo - 1 ,  calling available variable & methods with constructor

/*

constructor is a method
if class object available, it will call automatically, no need explicit call
use "this" keywork while calling with "constructor"

*/



// class class_demo4 {

//     name = 'hari' // non-static variable

//     constructor() {
//         console.log('this is constructor method')
//         console.log(this.name) // displaying non-static variable
//         this.print_message()
//         this.print_message(1, 2)
//     }

//     print_message(x, y) {
//         console.log("this is print_message method with parameters : ", (x + y))
//     }


//     print_message() {
//         console.log("this is print_message method")
//     }



// }

// const obj = new class_demo4()  // const variable - value not changable , block-scope


// ======================================================================================================

// // 7) constructor demo - 2 ,  calling not available variable & methods with constructor

// class class_demo4 {


//     constructor() {
//         console.log('this is constructor method')

//         // this.print_message()       // Error, TypeError: this.print_message() is not a function

//         console.log(this.name)  // Error, but "undefined" displaying
//     }


// }

// const obj = new class_demo4()  // const variable - value not changable , block-scope

// ======================================================================================================


// // 8) creating multiple objects of a class

// class class_demo5 {

//     // non-static variable
//     name = 'hari' 

//     //non-static method
    
//     login () { 
//         console.log('this is login method')
//         console.log(this.name)
//     }

// }

// const obj1 = new class_demo5()

// console.log(obj1.name) // printing value of "name" variable

// obj1.login()

// const obj2 = new class_demo5() 
// const obj3 = new class_demo5() 
// // Note : it is usefull in some situations, like, if multiple scripts want login method of a class in a project

// ======================================================================================================

// // 9) if multiple methods are there with same name and same parameters then excuting last "arrow" method

// class class_demo5 {

//     // non-static variable
//     name = 'hari' 

//     //non-static method
//     login () { 
//         console.log('1 : this is login method without arraow')
//         console.log(this.name)
//     } 
//     login = () => { 
//         console.log('2 : this is login method with arraow')
//         console.log(this.name)
//     } 
    
//     login = () => { 
//         console.log('3 : this is login method with arraow')
//         console.log(this.name)
//     }
   
//     login () { 
//         console.log('4 : this is login method without arraow')
//         console.log(this.name)
//     }
// }

// const obj1 = new class_demo5()

// console.log(obj1.name) // printing value of "name" variable

// obj1.login()

// ======================================================================================================

/*

encapsulation : binding data between methods

*/
// // 10) encapsulation demo - 1,  with non-static variables declaration

// class class_demo10 {

// //  non-static global variables, i.e., "var" variable
//     wname = 'kishore'
//     wplace = 'blr'

//     //non-static method
//     details (emp_name,  emp_place) {   // values are taking from method calling

//         console.log('this is details method')
//         this.wname = emp_name       // "wname" value is replaceing here
//         this.wplace = emp_place     // "wplace" value is replaceing here

//     } 
//     display = () => {   

//         console.log('this is display method')
//         console.log(this.wname)
//         console.log(this.wplace)
//     } 
// }

//     const obj1 = new class_demo10()
//     obj1.details('hari','nellore')
//     obj1.display()


// // output :
// // this is details method
// // this is display method
// // hari
// // nellore

// ======================================================================================================


// // 11) encapsulation demo - 2,  without non-static variables declaration

// class class_demo10 {
    
//         //non-static methods
//         details (emp_name,  emp_place) {   // values are taking from method calling
    
//             console.log('this is details method')
//             this.wname = emp_name     // non-static global variable "wname" is creating and assigning
//             this.wplace = emp_place   // non-static global variable "wplace" is creating and assigning
    
//         } 
//         display = () => {   
    
//             console.log('this is display method')
//             console.log(this.wname)
//             console.log(this.wplace)
//         } 
//     }
    
//         const obj1 = new class_demo10()
//         obj1.details('hari','nellore')
//         obj1.display()
    
// output :
// this is details method
// this is display method
// hari
// nellore

    
// ======================================================================================================


// 12) encapsulation demo - 3,  encapsulation with constructor method

// class class_demo10 {
    
//     // constructor method
//     constructor (emp_name,  emp_place) {   // values are taking from object

//         console.log('this is constructor method')
//         this.wname = emp_name     // non-static global variable "wname" is creating and assigning
//         this.wplace = emp_place   // non-static global variable "wplace" is creating and assigning

//     } 

//     non-static method
//     display = () => {   

//         console.log('this is display method')
//         console.log(this.wname)
//         console.log(this.wplace)
//     } 
// }

//     const obj1 = new class_demo10('kishore', 'blr')  // object creation with parameters
//     obj1.display()

// output :
// this is constructor method
// this is display method
// kishore
// blr


// ======================================================================================================

/*

inheritance :   accessing one class's variables and methods with another class's object

no need object creation for parent class
need object creation for child class

accessed class   - parent \ super class
accessing class  - child \ derived class

"extends" keyword used to create inheritance

types of inheritance :

1) single  ( a--> b ), "a" is parent class, "b" is child class
2) multi-level  ( a--> b --> c ), "a" is parent class to "b",   "b" is parent class to "c"

Note : multiple inheritance is not supported in javascript

( a --> b <-- c), "a" and "c" both are parent classes to "b"


*/

// ======================================================================================================

// // 13)  inheritance demo - 1, single-level ( single inheritance )


// class A  - parent class
// class B - child class

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

// const b_obj = new B()  // class B object creating

// console.log(b_obj.a)  // accessing class A - variable "a"
// b_obj.displayA()  // accessing class A - method "displayA()"

// console.log(b_obj.b) // accessing class B - variable "b"
// b_obj.displayB() // accessing class B - method "displayB()"



// output:
// 10
// class A - display method
// 20
// class B - display method

// ======================================================================================================


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

// ======================================================================================================

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

// ======================================================================================================

// 16)  polymorphism demo - 2, method loading - a method calling with different no.of parameters


// class A{
//     a = 'class A - variable a'

//     show(x){ 
//         console.log('class A - show method')
//         console.log(x)
//     }

// }

// const a_obj = new A()  // class A object creating

// console.log(a_obj.a) 

// a_obj.show(10) 
// a_obj.show(10,20) 
// a_obj.show(10,20,30) 
// a_obj.show("hari",20,30)  


// output :

// class A - variable a
// class A - show method
// 10
// class A - show method
// 10
// class A - show method
// 10
// class A - show method
// hari

// ======================================================================================================

// 17)  polymorphism demo - 3, method loading - some methods with same name


// class A{
//     a = 'class A - variable a'

//     show(x){
//         console.log('1 :class A - show method')
//         console.log(x)
//     }

//     show(x,y){
//         console.log('2: class A - show method - sum')
//         console.log(x)
//         console.log(y)
//         console.log('sum :', x + y)
//     }

//     show(x,y){
//         console.log('3: class A - show method - sub')
//         console.log(x)
//         console.log(y)
//         console.log('sub :', x - y)
//     }

    
//     show(x,y,z){  
//         console.log('4: class A - show method - cube')
//         console.log(x) 
//         console.log(y)
//         console.log(z)
//         console.log('cube :', (x * y * z))
//     }

// }

// const a_obj = new A()  // class A object creating

// console.log(a_obj.a) 

// a_obj.show(10) 
// a_obj.show(10,20) 
// a_obj.show(20,30) 
// a_obj.show(10,20,30) 
// a_obj.show("hari",20,30)  


// output :

// class A - variable a
// 4: class A - show method - cube
// 10
// undefined
// undefined
// cube : NaN
// 4: class A - show method - cube
// 10
// 20
// undefined
// cube : NaN
// 4: class A - show method - cube
// 20
// 30
// undefined
// cube : NaN
// 4: class A - show method - cube
// 10
// 20
// 30
// cube : 6000
// 4: class A - show method - cube
// hari
// 20
// 30
// cube : NaN

// ======================================================================================================

/* prototype :

prototype is class dependant,
creating variables / methods outside of class and accessing by object,
must create before object creation.
*/

// ======================================================================================================

// 18) prototype demo - 1

// class employee {

//     emp_name = 'hari'

//     details() { 
//         console.log('this is details method')
//         this.emp_age = 22
//     }
//     display(){
//         console.log('this is display method')
//         console.log(this.emp_age)
//         console.log(this.emp_city) // accessing prototype variable inside of class
//     }
// }  //  end of class

// employee.prototype.emp_city = "nlr";  // creating "city" variable outside of class


// employee.prototype.message = function() {  // creating "message" method outside of class

//     console.log("displaying name in prototype method : ", this.emp_name)
// }

// const obj = new employee() 
// obj.message()
// obj.details()
// obj.display() 



// output:
// displaying name in prototype method :  hari
// this is details method
// this is display method
// 22
// nlr


// ======================================================================================================
