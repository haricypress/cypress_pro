
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

class A{
    a = 10
    displayA(){
        console.log('class A - display method')
    }


}

class B extends A{  // inheritance creating with "extends" keyword
    b = 20
    displayB(){
        console.log('class B - display method')
    }
    
}

const b_obj = new B()  // class B object creating

console.log(b_obj.a)  // accessing class A - variable "a"
b_obj.displayA()  // accessing class A - method "displayA()"

console.log(b_obj.b) // accessing class B - variable "b"
b_obj.displayB() // accessing class B - method "displayB()"



// output:
// 10
// class A - display method
// 20
// class B - display method

