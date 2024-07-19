
/* differences b/t "for in" and "for of"

for in :  works with objects, looping properties of object

for of :  works with arrays, looping elements of array

*/


// ======================================================================================================

// for in :  works with objects, looping properties of object

// student is an object type variable, "for-in" used to loop properties of an object

// const student = {
//     "stuname":"hari",
//     "lastname": "G",
//     "rollnumber": 418,
//     }

// console.log('----------------1st loop started----------------')

// for (let i in student) {  //  "let" using within this block only
//     console.log('----loop 1 starts')
//     console.log(i)
//     console.log('----loop 1 ends')
// }
// console.log('----------------1st loop ended----------------')

// for (let i in student) {
//     console.log('----loop 2 starts----')
//     console.log(i + ' : ' + student[i])
//     console.log('----loop 2 ends------')
// }

// output:

// ----------------1st loop started----------------
// ----loop 1 starts
// stuname
// ----loop 1 ends  
// ----loop 1 starts
// lastname
// ----loop 1 ends  
// ----loop 1 starts
// rollnumber
// ----loop 1 ends
// ----------------1st loop ended----------------
// ----loop 2 starts----
// stuname : hari
// ----loop 2 ends------
// ----loop 2 starts----
// lastname : G
// ----loop 2 ends------
// ----loop 2 starts----
// rollnumber : 418
// ----loop 2 ends------

// ======================================================================================================

// // for of :  works with arrays, looping elements of array

// array_1 = [1, 'hari', 4, 5.1, 6.0, 'kishore', true, false,]
// console.log('before sort :',array_1)



// for ( const i of array_1){  // element value is saving in "i" variable
//     console.log(i)
// }

// output:

// before sort : [ 1, 'hari', 4, 5.1, 6, 'kishore', true, false ]
// 1      
// hari   
// 4      
// 5.1    
// 6      
// kishore
// true   
// false 

// ======================================================================================================

/*
Note : if know upper and lower boundaries then choose "for" loop


    syntax "for" loop :
    
    for (initialization; condition ; increament / decreament){

        }

*/

// ======================================================================================================

// for ( i = 1 ; i<= 5 ; i++){
//     console.log(i + " : javascript")
// }
// console.log('after for loop "i" value - ',i)

// output:

// 1 : javascript
// 2 : javascript
// 3 : javascript
// 4 : javascript
// 5 : javascript
// after for loop "i" value -  6

// ======================================================================================================

/*

Note : if don't know upper and lower boundaries,
but know condition then choose "while" loop


syntax "while" loop :
    
        initialization
            While(condition){
                -- coding here --
                increment/decrement
            }
*/

// ======================================================================================================

//console.log("while loop demo")

// i = 1
// while(i<=5){
//     console.log(i + " : javascript")
//     i++
// }
// console.log('after while loop "i" value - ' + i )


// output:
// 1 : javascript
// 2 : javascript
// 3 : javascript
// 4 : javascript
// 5 : javascript
// after while loop "i" value - 6

// ======================================================================================================


/*

Note : if don't know upper and lower limits,
but know condition and
want complete atleast 1 loop then choose "do" loop

bcoz, in "do" loop, first loop is completing next condition is ckecking.



syntax "do" loop :
    
        initialization
            do{
                -- coding here --
                increment/decrement
            }while(condition)
*/

// ======================================================================================================


// console.log("do loop demo - 1")
// i = 1

// do{
//     console.log(i + " : javascript")
//     i++
// }while(i<=5)

// console.log('after "do" loop "i" value - ' + i)

// output:

// do loop demo - 1
// 1 : javascript
// 2 : javascript
// 3 : javascript
// 4 : javascript
// 5 : javascript
// after "do" loop "i" value - 6

// ======================================================================================================

console.log("do loop demo - 2, with failed condition")
i = 6

do {
    console.log(i + " : javascript")
    i++
} while (i <= 5)

console.log('after "do" loop "i" value - ' + i)


// output:
// do loop demo - 2
// 6 : javascript
// after "do" loop "i" value - 7


// ======================================================================================================
