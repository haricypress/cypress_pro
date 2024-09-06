
/*
==============================   objects vs maps   ===================================
        Object	                                       Map
1) Not directly iterable	                    Directly iterable
2) haven't size property	                    Have size property
3) Keys are Strings or Symbols	                Keys can be any datatype
4) Keys not ordered	                            Keys ordered by insertion
5) Have default keys	                        Don't have default keys

======================================================================================
*/

// // Create a Map with array
// const fruits1 = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ])
// console.log(fruits1)

// // geting available value
// console.log(fruits1.get("apples"))

// // geting un-available value
// console.log(fruits1.get("mango"))

// ===============================================
// // using objects as key

// // Creating Objects
// const apples = {name: 'Apples'};
// const bananas = {name: 'Bananas'};
// const oranges = {name: 'Oranges'};


// const fruits = new Map();

// fruits.set(apples, 500);
// fruits.set(bananas, 300);
// fruits.set(oranges, 200);
// fruits.set("banana", 150)

// console.log(fruits)
// console.log(fruits.get(apples))  // apples is an object, not string
// console.log(fruits.get("banana"))  // banana is a string

// ======================================================================================

// // Creating empty Map

// const fruits2 = new Map();
// console.log(fruits2)

// ====================================================

// const fruits2 = new Map();

// // add new Values
// fruits2.set("apples", 500);
// fruits2.set("bananas", 300);
// fruits2.set("oranges", 200);
// console.log(fruits2)

// ====================================================
// changing value

// const fruits3 = new Map();
// fruits2.set("apples", 500);
// fruits3.set("apples", 200);
// console.log(fruits3)

// ====================================================
// typeof

// const fruits5 = new Map();
// console.log(typeof fruits5)

// ===============================================
// instanceof

// const fruits6 = new Map();
// console.log(fruits6 instanceof Map)
// ===============================================

// size

// const fruits1 = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ])
// console.log(fruits1.size)
// ===============================================

// delete

// const fruits1 = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ])

// fruits1.delete("apples")
// console.log(fruits1)
// ===============================================
// clear - removing all elements

// const fruits1 = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ])

// fruits1.clear()
// console.log(fruits1)
// ===============================================
// has() - cheacks element available or not
// return true  - if available
//        false - if not available

// const fruits1 = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ])


// console.log(fruits1.has("apples"))  // true
// fruits1.delete("apples")
// console.log(fruits1.has("apples"))  // false

// ===============================================

// foreach() - getting all entries with key/value

// const fruits1 = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ])


// let text = "";
// fruits1.forEach (function(value, key) {
//   text += key + ' = ' + value + " ";
// })
// console.log(text)
// ===============================================


// entries() - getting all entries with [key,values]

// const fruits1 = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ])

// let text = "";
// for (const x of fruits1.entries()) {
//   text += x + "    ";
// }
// console.log(text)
// ===============================================

// keys() - getting all keys

// const fruits1 = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ])

// let text = "";
// for (const x of fruits1.keys()) {
//   text += x + "    ";
// }
// console.log(text)
// ===============================================

// values() - getting all values

// const fruits1 = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ])

// let text = "";
// for (const x of fruits1.values()) {
//   text += x + "    ";
// }
// console.log(text)
// ===============================================

// // Create an Array  -  Error
// const fruits = [
//   {name:"apples", quantity:300},
//   {name:"bananas", quantity:500},
//   {name:"oranges", quantity:200},
//   {name:"kiwi", quantity:150}
// ];

// // Callback function to Group Elements
// function myCallback({ quantity }) {
//   return quantity > 200 ? "ok" : "low";
// }

// // Group by Quantity
// const result = Map.groupBy(fruits, myCallback)

// ==========================================================

