
/* prototype :

prototype is class dependant,
creating variables / methods outside of class and accessing by object,
must create before object creation.
*/

// ======================================================================================================

// 18) prototype demo - 1

class employee {

    emp_name = 'hari'

    details() { 
        console.log('this is details method')
        this.emp_age = 22
    }
    display(){
        console.log('this is display method')
        console.log(this.emp_age)
        console.log(this.emp_city) // accessing prototype variable inside of class
    }
}  //  end of class

employee.prototype.emp_city = "nlr";  // creating "city" variable outside of class


employee.prototype.message = function() {  // creating "message" method outside of class

    console.log("displaying name in prototype method : ", this.emp_name)
}

const obj = new employee() 
obj.message()
obj.details()
obj.display() 



// output:
// displaying name in prototype method :  hari
// this is details method
// this is display method
// 22
// nlr

