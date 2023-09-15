
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

