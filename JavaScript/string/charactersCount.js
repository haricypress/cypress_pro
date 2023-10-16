
// console.log("false + 1+2  :    ",false+1+2)
// console.log("undefined + 1+2   :   ", undefined+1+2)

// console.log("undefined + false + 1+2   :   ", (undefined || false)+1+2)

// No = (undefined || false)+1
// console.log(No)
// No = No +9
// console.log(No)



// // 1. counting everyting include special characters

// function countCharacters(str) {

//   // "charCount" is object, looks like,   charCount  = { "i" : 1, "am" : 3 }
//   const charCount = {}; 
//   for (let char of str) {

//     console.log("before:",charCount,char,charCount[char])
//     charCount[char] = (charCount[char] || false) + 1;
//     console.log("after:",charCount,char, charCount[char],"\n===========")
//   }

//   return charCount;
// }
// string = "i am an indian, 111111112";
// result = countCharacters(string);
// //  to print new line  "\n"  used
// console.log("\nstring :", string);
// console.log("all characters count :\n", result, "\n");
// console.log("=======================================\n")

// // //===========================================================================================

// // /*
// // note :

// //       first time letterCount[char] not available, at that time "false"  available,
// //       that's why "false" added in below statement.
// //       letterCount[char] = (letterCount[char] || false) + 1
// //       after that, count value increasing by 1.

// // */

// // //===========================================================================================

// 2. counting only   a to z, A to Z, 0 to 9   values


function countLetters(str) {
  var letterCount = {};

  // Iterate through each character in the string
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    // Check if the character is a letter
    if (/[a-zA-Z0-9]/.test(char)) {

      // 1st way
      letterCount[char] = (letterCount[char] || false) + 1; 


      // 2nd way
      // if (letterCount[char]) {
      //   letterCount[char]++;
      // } else {
      //   letterCount[char] = 1;
      // }


    }
  }

  return letterCount;
}


string = "i am an indian, 111111112";
result = countLetters(string);
console.log("String :",string);
console.log("a-z  /  A-Z   /   0-9 character count :\n",result,"\n");

// //===========================================================================================




// 1. counting everyting include special characters

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


// //===========================================================================================

// 2. counting only   a to z, A to Z, 0 to 9   values


function countLetters(str) {

  var letterCount = {};
  for (let char of str) {
    if (/[a-zA-Z0-9]/.test(char)) {
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

// //===========================================================================================

