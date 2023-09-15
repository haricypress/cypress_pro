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
