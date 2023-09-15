// to run CMD command     : node 'cypress\e2e\online classes\12_oops\01_non_static_demo_class.cy.js'


// // 1) calling non-static variable and non-static method 

class non_static_class_demo1 {

    emp_name = 'hari' // assigning variable outside of method

    details(){
        this.emp_age = 26  // assigning variable inside of method
    }


    display() { // non-static method
        console.log('this is display method')
        console.log(this.emp_name)  // accessing non-static variable
        console.log(this.emp_age)  // accessing non-static variable
    }

}

const obj = new non_static_class_demo1()  // "obj" is an object,  "const" variable type - value not changable , block-scope

console.log(obj.emp_name) // printing value of "name" variable

obj.details() // calling non-static method 
obj.display() // calling non-static method


// output :
// hari
// this is display method
// hari
// 26



// Note :   without object name, can't access any non-static variable (or) non-static method of class
//          class is a logical enity, memory not occupy,
//          only objects occupy memory
//          non-static variables and methods storing in objects

