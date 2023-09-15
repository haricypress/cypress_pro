// arrays in js

/*
    data types in js:

    string   -    'hari' (or) `hari` (or) "hari"
    number   -     4 (or) -4  (or) 4. (or) 4.0 (or) 4.1
    boolean  -     true (or) false
    object   -     student = { "stuname":"hari", "lastname": "G", "rollnumber": 418 }
*/


// console.log(typeof('hari'),typeof(`hari`),typeof("hari"))
// console.log(typeof(-1),typeof(0),typeof(1),typeof(1.),typeof(1.0),typeof(1.1))
// console.log(typeof(true),typeof(false))
// console.log(typeof(student = { "stuname":"hari", "lastname": "G", "rollnumber": 418 }))

// output:

// string string string
// number number number number number number
// boolean boolean
// object

// //============================================================================================

// // empty array
// array_1 = []

// // displaying array
// console.log(array_1)

//  // homo-genious array
// array_1 = [1, 2, 3, 4, 5]
// console.log(array_1)

// // hetro-geneous array
// array_1 = [1, 'hari', 4, 5.1, 6.0, 'kishore', true, false,]  
// console.log(array_1)

// //=========================================================================================

//array_1 = [1, 'hari', 4, 5.1, 6.0, 'kishore', true, false,]
// console.log(array_1)

// // index count starts from "0" 

// // elements count starts from "1"

// // in this array, 
// // total elements : 8
// // last element index : 7

// // get array length (or) total no.of elements
// console.log(array_1.length)

// // get value by array index
// console.log(array_1[0])

// ================  methods of arrays ==================================================

// array_1 = [1, 'hari', 4, 5.1, 6.0, 'kishore', true, false,]
// console.log('before sort :',array_1)

// // permanantly sorting array_1   - result effected  "array_1" array
// console.log('after sort : ', array_1.sort())  

// // try to get index of vailable element
// console.log("index of 'hari' : ", array_1.indexOf('hari'))

// // try to get index of non-vailable element, result  :  -1
// console.log("index of 'hari' : ", array_1.indexOf('ndvajadgja'))


// concatenation - adding at last
array_1 = [1, 'hari', 4, 5.1, 6.0, 'kishore', true, false,]
array_2 = ['one','two']

// concat_array = array_1.concat(array_2)  // adding "array_2" at last of "array_1", result saving in "array_3" array
// console.log(concat_array)

// concat_array = array_2.concat(array_1)  // adding "array_1" at last of "array_2", result saving in "array_3" array
// console.log(concat_array)

// array reverse

// console.log('original array : ',array_1)
// console.log('reverse array : ',array_1.reverse())


// //push - adding at last
// console.log('before push  : ',array_2)
// array_2.push('three')
// console.log('after push :',array_2)

// // unshift - adding at begining
// console.log('before unshift  : ',array_2)
// array_2.unshift('zero')
// console.log('after unshift :',array_2)

// // replace an element
// console.log('array before replace element : ',array_1)
// array_1[0] = "one"   // first element "1" replaced by "one"
// console.log('array after replace element :',array_1)

// // shift - removes first element
// console.log('before shift :',array_1)
// array_1.shift()  
// console.log('after shift :',array_1)


// // pop - removes last element
// console.log('before pop :',array_1)
// array_1.pop()  
// console.log('after pop :',array_1)

// includes - return "true" if element available, else false returns
// console.log(array_1)
// if (array_1.includes(1)){
//     console.log("1 is available in 'array_1'")}
//     else{
//         console.log('1 in not available in "array_1"')}


// if (array_1.includes("hari")){
//     console.log("hari is available in 'array_1'")}
//     else{
//         console.log('hari in not available in "array_1"')}


// if (array_1.includes("play")){
//     console.log("play is available in 'array_1'")}
//     else{
//         console.log('play is not available in "array_1"')}

        
// if (array_1.includes(("play") || ("hari"))){
//     console.log("play (or) hari is available in 'array_1'")}
//     else{
//         console.log('play (or) hari is not available in "array_1"')}


// slice -  at begining remove specified no.of elements
console.log('no slice :',array_1.slice())
console.log('slice  1 element :',array_1.slice(1))
console.log('slice 2 elements :',array_1.slice(2))

// ======================================================================================================