

// 3) can't call non-static variable and non-static method with class name

class static_class_demo1 {
    // static variable
    emp_name = 'hari' // non-static variable

    // static method
    display() { // non-static method
        console.log('this is display method')
        console.log(this.name)  // calling non-static variable
    }

}

console.log(static_class_demo1.emp_name) // Error, "undefined" is displaying, 
// above statement assumes no static variable with "emp_name" name
// "emp_name" is non-static variable

console.log(static_class_demo1.name) // displaying class name only,
// if "name" static variable is available then variable's value will display, class name will not display

// static_class_demo1.display() // Error, TypeError: static_class_demo1.display is not a function


