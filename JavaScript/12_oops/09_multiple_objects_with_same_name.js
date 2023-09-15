// // 9)  if multiple methods are there with same name and same parameters then excuting last "arrow" method

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
