
function countLetters3(str) {
    var letterCount = {};
    // Iterate through each character in the string
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      // Check if the character is a letter
      if (/[a-zA-Z0-9]/.test(char)) {
  
        // 1st way
        letterCount[char] = (letterCount[char] || false) + 1; 
  
      }
    }
    return letterCount;
  }
  string = "i am an indian, @-_=111111112";
  result = countLetters3(string);
  console.log("String :",string);
  console.log("a-z  /  A-Z   /   0-9 character count :\n",result,"\n");
  
  
  j = ""
    for(let i in result){
        // console.log(i)
        if(result[i]>1)
        j = j + i  + " "
      //   console.log(i)
    }
    console.log("only duplicates : " + j)
    
    