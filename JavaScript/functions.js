/* note :  without return if priting calling function then undefined will print.
           
*/
console.log("\nfinction 1 : ")
function someFunction1(str) {

    text = str
}

console.log(someFunction1("some"))

// output : 

// finction 1 : 
// undefined

// ==================================================================================


  // after "return" nothing will execute

console.log("\nfinction 2 : ")
function someFunction2(str) {

    text = "a"
    return text

    // below code never execute
    text = "b"
    return text
}

console.log(someFunction2("some"))

// output: 
// finction 2 :
// a

// ==================================================================================



//  1st way printing

console.log("\nfinction 3 : ")
function someFunction3() {

    return "some_text"

}

console.log(someFunction3())

// output: 
// finction 3 :
// some_text

// ==================================================================================

//  2nd way printing

console.log("\nfinction 4 : ")
function someFunction4() {

    console.log("some_text")

}

someFunction4()

// output: 
// finction 4 :
// some_text