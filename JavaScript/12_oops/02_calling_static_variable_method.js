
// // 2) calling static variable and static method 

class static_class_demo1 {

    static emp_name = 'hari' // static variable
    static name = 'kishore' // static variable

    static display() { // static method
        console.log('this is display method')
        console.log(this.emp_name)  // calling static variable
        console.log(this.name)   // calling static variable
    }

}

console.log(static_class_demo1.name)  //  calling static variable
// if "name" static variable is not available then class name will display


static_class_demo1.display() // calling static method

// Note :   static variables and methods storing in separate memory, not storing in objects
//          no object need to create for static variables and static methods
//          static variables and static methods can call with class name
