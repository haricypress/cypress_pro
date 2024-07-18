// to understand complex coding

// console.log("undefined + false  :   ", undefined +false )  //NaN
// console.log("undefined || false  :   ", (undefined || false))  //false

// console.log("undefined + 1   :  ", undefined + 1) //NaN
// console.log("undefined + 1 + 2   :  ", undefined + 1 + 2) //NaN

// console.log("false + 1  :  ",false + 1) //1
// console.log("false + 1 + 2  :  ",false + 1 + 2) //3

// console.log("undefined || false + 4  :   ", (undefined || false)+4) //4

// No = (undefined || false)
// console.log(No)  //false
// No = No +9  
// console.log(No)  //9
// No = No +1 
// console.log(No)  //10

// ===========================================================================================

// 1. counting everyting include special characters - with more print statements

function countCharacters1(str) {
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
result = countCharacters1(string);
//  to print new line  "\n"  used
console.log("\nstring :", string);
console.log("all characters count :\n", result, "\n");
console.log("=======================================\n")

/* =================================================================================
note :
      first time comming into loop character not available in "letterCount" object,
      at that time charCount[char] get "undefined" as internal datatype,
      which raises Error, to avoid that, "false" added like below statement.
      letterCount[char] = (letterCount[char] || false) + 1
      from 2nd time, count increasing by 1.
================================================================================= */

// 2. above script without more print statements - counting everyting include special characters

function countCharacters2(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || false) + 1;
  }
  return charCount;
}
string = "i am an indian, 111111112";
result = countCharacters2(string);
console.log("\nstring :", string);
console.log("all characters count :\n", result, "\n");

// ===========================================================================================

// 3. counting only   a to z, A to Z, 0 to 9   values  - using "for" loop

function countLetters3(str) {
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
result = countLetters3(string);
console.log("String :",string);
console.log("a-z  /  A-Z   /   0-9 character count :\n",result,"\n");

//===========================================================================================

// 4. counting only   a to z, A to Z, 0 to 9   values   -  using "for of"

function countLetters4(str) {
  var letterCount = {};
  for (let char of str) {
    if (/[a-zA-Z0-9]/.test(char)) {
      
      // 1st way
                    // NaN || false = false
                    // false + 1 = 1
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
result = countLetters4(string);
console.log("String :", string);
console.log("a-z  /  A-Z   /   0-9 character count :\n", result, "\n");

// ===========================================================================================



function charcount1(...strs) {
  let count = {}
  for (let str of strs)
      for (let char of str) {
          if (/[a-zA-Z]/.test(char))
              count[char] = (count[char] || false) + 1
      }
  console.log(count)
}

charcount1("aabbc-_cb", "hhhhhhhz")

// ===========================================================================================

function charcount2(...strs) {
  let count = {}
  for (let str of strs)
      for (let char of str) {
          count[char] = (count[char] || false) + 1
      }
  console.log(count)
}

charcount2("aabbc-_cb", "hhhhhhhz")


