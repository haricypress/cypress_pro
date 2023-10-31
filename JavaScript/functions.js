/* note :  without return statement, if anything tried to print from any "function"
           then "undefined" will print
           
*/
console.log("\nfinction 1 : ")
function someFunction1(str) {

    text = str
}

console.log(someFunction1("some"))


// ==================================================================================


  // after "return" statement nothing will execute

console.log("\nfinction 2 : ")
function someFunction2(str) {

    text = "a"
    return text

    // below code never execute
    text = "b"
    return text
}

console.log(someFunction2("some"))

// ==================================================================================



//  1st way printing

console.log("\nfinction 3 : ")
function someFunction3() {

    return "some_text"

}

console.log(someFunction3())


// ==================================================================================

//  2nd way printing

console.log("\nfinction 4 : ")
function someFunction4() {

    console.log("some_text")

}

someFunction4()