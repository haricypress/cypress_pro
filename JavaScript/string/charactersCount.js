// to understand complex coding

// console.log("undefined + false  :   ", undefined )
// console.log("undefined + false  :   ", false )
// console.log("undefined || false  :   ", (undefined || false))

// console.log("undefined + 1   :  ", undefined + 1)
// console.log("undefined + 1 + 2   :  ", undefined + 1 + 2)

// console.log("false + 1  :  ",false + 1)
// console.log("false + 1 + 2  :  ",false + 1 + 2)

// console.log("undefined || false + 4  :   ", (undefined || false)+4)

// No = (undefined || false)
// console.log(No)
// No = No +9 
// console.log(No)
// No = No +1
// console.log(No)

// ===========================================================================================

// 1. counting everyting include special characters - with more print statements

function countCharacters(str) {
  // "charCount" is an object, looks like,   charCount  = { "i" : 1, "am" : 3 }
  const charCount = {}; 
  for (let char of str) {
    console.log("before:",charCount,char,charCount[char])
    charCount[char] = (charCount[char] || false) + 1;
    console.log("after:",charCount,char, charCount[char],"\n===========")
  }
  return charCount;
}
string = "i am an indian, 111111112";
result = countCharacters(string);
//  to print new line  "\n"  used
console.log("\nstring :", string);
console.log("all characters count :\n", result, "\n");
console.log("=======================================\n")

/* =================================================================================
note :
      first time comming into loop character not available in "letterCount" object,
      at that time charCount[char] get "undefined" as internal datatype,
      which raises Error, to avoid that "false" added in below statement.
      letterCount[char] = (letterCount[char] || false) + 1
      from 2nd time, count increasing by 1.
================================================================================= */

// 2. counting everyting include special characters - without more print statements

function countCharacters(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || false) + 1;
  }
  return charCount;
}
string = "i am an indian, 111111112";
result = countCharacters(string);
console.log("\nstring :", string);
console.log("all characters count :\n", result, "\n");

// ===========================================================================================

// 3. counting only   a to z, A to Z, 0 to 9   values  - using "for" loop

function countLetters(str) {
  var letterCount = {};
  // Iterate through each character in the string
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    // Check if the character is a letter
    if (/[a-zA-Z0-9]/.test(char)) {

      // 1st way
      letterCount[char] = (letterCount[char] || false) + 1; 

      // 2nd way===================
      // if (letterCount[char]) {
      //   letterCount[char]++;
      // } else {
      //   letterCount[char] = 1;
      // }
      //===========================
    }
  }
  return letterCount;
}
string = "i am an indian, 111111112";
result = countLetters(string);
console.log("String :",string);
console.log("a-z  /  A-Z   /   0-9 character count :\n",result,"\n");

//===========================================================================================

// 4. counting only   a to z, A to Z, 0 to 9   values   -  using "for of"

function countLetters(str) {
  var letterCount = {};
  for (let char of str) {
    if (/[a-zA-Z0-9]/.test(char)) {
      
      // 1st way
      letterCount[char] = (letterCount[char] || false) + 1;

      // 2nd way===================
      // if (letterCount[char]) {
      //   letterCount[char]++;
      // } else {
      //   letterCount[char] = 1;
      // }
      //===========================
    }
  }
  return letterCount;
}
string = "i am an indian, 111111112";
result = countLetters(string);
console.log("String :", string);
console.log("a-z  /  A-Z   /   0-9 character count :\n", result, "\n");

// ===========================================================================================
