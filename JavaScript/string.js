// // 1)
// var x = "hari"  // with double quotes, "var" datatype
// var y = `Kishore`   // with backlet
// var z = 'this is a sentence.'  // with single quotes

// console.log(x)
// console.log('y value :',y)
// console.log(z)

// output:
// hari
// y value : Kishore
// this is a sentence.

// =====================================================================================================

// // 2)
// var str1 = "₹15,000"  // anything can make as string, "str1" is variable name - "var" datatype
// str2 = "6,499"  // "str2" is variable name - "var" datatype

// console.log(str1 + str2)   // concatenating, bcoz, string type variables

// output:
// ₹15,0006,499

// =====================================================================================================

// // 3)
// var str1 = "₹15,000"
// str2 = "6,499"

// console.log(str1.replace("₹" , "").replace("," , ""))   // replaceing "₹" and "," with empty, i.e., ""
// console.log(str2.replace("," , ""))

// output:
// 15000
// 6499

// =====================================================================================================

// // 4)

// var str1 = "₹15,000"
// str2 = "6,499"

// console.log(Number(str1.replace("₹" , "").replace("," , ""))+Number(str2.replace("," , "")))

// output:
// 21499

// =====================================================================================================

// // 5)

// var str1 = "₹15,000"
// str2 = "6,499"

// num1 = Number(str1.replace("₹" , "").replace("," , ""))
// num2 = Number(str2.replace("," , ""))
// console.log(num1 + num2)

// oputput:
// 21499

// =====================================================================================================

// // 6)

// num1 = '15000'
// console.log(typeof(num1))    // typeof()  method is returning variable type

// num2 = Number(num1)
// console.log(typeof(num2))

// output:
// string
// number
// =====================================================================================================

// // 7)

// var str1 = "₹15,000"
// str2 = "6,499"

// num1 = Number(str1.replace("₹" , "").replace("," , ""))
// num2 = Number(str2.replace("," , ""))

// total2 = num1 + num2

// total1 = Number(str1.replace("₹" , "").replace("," , ""))+Number(str2.replace("," , ""))


// if (total1 == total2){
//     console.log('both are equal')
// }
// else{console.log('not equal')}

// output:
// both are equal

// =====================================================================================================


// // 8)

// str = 'hari'

// console.log(str)
// console.log(str.split(""))
// console.log(str.split("").reverse())
// console.log(str.split("").reverse().join(""))

// console.log('---------------------')

// str1 = str.split("").reverse().join("")
// console.log(str1)

// output :

// hari
// [ 'h', 'a', 'r', 'i' ]
// [ 'i', 'r', 'a', 'h' ]
// irah
// ---------------------
// irah

// =====================================================================================================


