/*

1) arthematic operators :
        addition : +
        aubtraction : -
        multiplication :  *
        dvision :  /
        remaining : %

2) comparision operators :
        lessthan : <
        graterthan :  >
        lesstha or qequal to :  <=
        graterthan or equal to :  >=
        equal to :  ==
        euqal to (even in datatype) : ===


3) logical operators :
        and ( && ) - if both conditions are true then true,  else false
        or  ( || ) - if any one condition is true then true, else false
        not ( ! )  - reverse condition result
            like, say true as false
                  say positive as negetive

4) assigning operator :
             =    -  assigning a value
             +=   -  assigning a value after adding
             -=   -  assigning a value after subtraction
             *=   -  assigning a value after multiply
             /=   -  assigning a value after division
             %=   -  assigning remaining value after division


5) ternary operator :

syntax : <condition> ? <single-value-1> : <single-value-2>

if condition is true  then value1 is returning and printing
if condition is false then value2 is returning and printing

"single-value-1"   and   "single-value-2" both are single values
block of statements instead of "single-value-1"    or    "single-value-2" are not accepted

*/
// ==========================================================================================

// 1) aritehmatic operators demo - 1 :

// x = 10
// y = 20

// console.log('1st value : ',x)
// console.log('2nd value : ',y)
// console.log('sum : ',x + y)
// console.log('subtrcation : ',x - y)
// console.log('multiplication : ',x * y)
// console.log('duvusion : ',x / y)
// console.log('remaining : ',x % y)

// output:
// 1st value :  10
// 2nd value :  20
// sum :  30
// subtrcation :  -10
// multiplication :  200
// duvusion :  0.5
// remaining :  10

// ==========================================================================================

// 2) aritehmatic operators with if-condition - 2 :

/* between 1 to 100,
    if divisible by "3" and "5"  - print "fizzbuzz"
    if divisible by "3" only - print "fizz"
    if divisible by "5" only - print "buzz"
    otherwise - print number
    */

// for (i = 1; i<=100; i++){
//     if ((i % 3 == 0 ) && (i % 5 == 0)){
//         console.log( i + " : fizzbuzz")
//     }
//     else if (i % 3 == 0 ){
//         console.log(i + " : fizz")
//     }
//     else if(i % 5 == 0 ){
//         console.log(i + " : buzz")
//     }
//     else{
//         console.log(i)
//     }
// }

// ==========================================================================================

// 3) comparision operators demo - 1 :
/*

"==="   -  equal values, even in datatype
"=="    -  euql values

*/


// x = 3     // value assigning
// y = "3"

// if (x === y)  {   // values comparision
//     console.log('equal values, even in datatype')
// }

// if (x == y)  {   // values comparision

//     console.log('equal values')

// }else{ console.log('not equal values')}


// output:
// equal values

// ==========================================================================================

// 4) comparision operators demo - 2 :

// x = 10
// y = 20

// if (x < y){
//     console.log(x + ' is ' + 'less than ' + y)
// }else{
//     console.log(x + ' is not ' + 'less than ' + y)
// }

// // ==========================================================================================
// 5)
// x = 10
// y = 20

// if (x > y){
//     console.log(x + ' is ' + 'grater than ' + y)
// }else{
//     console.log(x + ' is not ' + 'grater than ' + y)
// }

// // ==========================================================================================

// 6)

// x = 10
// y = "10"

// if (x <= y){
//     console.log(x + ' is ' + 'lessthan or equal to' + y)
// }else{
//     console.log(x + ' is not ' + 'lessthan or equal to' + y)
// }

// // ==========================================================================================
// 7)
// x = 10
// y = "10"

// if (x >= y){
//     console.log(x + ' is ' + 'graterthan or equal to' + y)
// }else{
//     console.log(x + ' is not ' + 'graterthan or equal to' + y)
// }

// // ==========================================================================================
// 8)
// x = 10
// y = 20

// if (x == y){
//     console.log(x + ' is ' + 'equal to ' + y)
// }else{
//     console.log(x + ' is not ' + 'equal to ' + y)
// }

// // ==========================================================================================
// 9)
// x = 10
// y = "10"

// if (x === y){
//     console.log(x + ' is ' + 'equal to' + y + ' even in datatype ')
// }else{
//     console.log(x + ' is not ' + 'equal to' + y + ' even in datatype ')
// }

// ==========================================================================================
// 10)

// 3) logical operators demo - 1

// x = 10
// y = 25

// if (( x % 10 == 0) && ( y % 10 == 0)){
// console.log('x and y, both are divisible by "10"')
// }else{console.log('x and y, both are not divisible by "10"')}

// ==========================================================================================
// 11)
// x = 15
// y = 25

// if (( x % 10 == 0) || ( y % 10 == 0)){
// console.log('x or y divisible by "10"')
// }else{console.log('x and y, both are not divisible by "10"')}

// ==========================================================================================

// 12)
//    not ( ! ) -   demo  - 1
// x = 10

// if (!x){
//     console.log(x + ' is not positive number')
// }else{
//     console.log(x + ' is positive number')
// }


// ==========================================================================================
// 13)
//    not ( ! ) -   demo  - 2

/*   3 === "3"

original result : both are not equal in datatype
reversing result : both are equal in datatype

*/

// if ( ! ( 3 === "3" )){
//     console.log('reversing result : both are equal in datatype')
// }else{
//     consolr.log('reversing result : both are not equal in datatype')
// }

// output:
// reversing result : both are equal in datatype

// ==========================================================================================
// 14)

// a *= 6

/*

above  is Error
bcoz, a *= 6 means a = a * 6
so, first assign next use

correct way :

a = 4
a *= 6

output :
24

*/

// ==========================================================================================

// 15)

// a = 5 // defining variable "a"
// a *= 6   // measn a = 5 * 6

// console.log(a)

// output:
// 30

// ==========================================================================================

// 16)

// a = 5 // defining variable "a"

// a * = 6  // Error, don't give space between *=

/*

correct way :
a *= 6

*/

// ==========================================================================================

// 17) ternary operator demo - 1

// 3 > 6 ? console.log('true') : console.log('false')  // printing automatically

// output:
// false


// ==========================================================================================
// 18) ternary operator demo - 2

// result = (3 > 6) ? console.log('true') : console.log('false')

// console.log(result)

// output:

// false
// undefined


// ==========================================================================================
// 19)

// (3 > 6) ?
// console.log('true') :  console.log('false')

// // output:
// // false


// ==========================================================================================
// 20)

// result = (3 > 6) ? {  console.log('true') :  console.log('false')  } // Error, blocks not accepted


// ==========================================================================================

// 21)

// result = (3 > 6) ? (  console.log('true'); console.log('true')) : (  console.log('false'))
// Error, multiple values not accepted

// ==========================================================================================

// 22) assigning operators :

// a = 10
// console.log('value  : ',a)

// a += 1
// console.log('adding 1  : ',a)

// a -= 1
// console.log('subtract 1 : ',a)

// a *= 2
// console.log('multiply by 2 : ',a)

// a /= 2
// console.log('division by 2 : ',a)

// a %= 2
// console.log('remaining after division by 2 : ',a)

// output:

// value  :  10
// adding 1  :  11
// subtract 1 :  10
// multiply by 2 :  20
// division by 2 :  10
// remaining after division by 2 :  0

// ==========================================================================================

