

// count no.of words

function countWords(str) {

    console.log(str.trim().split(/\s+/))
    return str.trim().split(/\s+/).length;  // "i am an indian"
  }


  console.log(countWords("i am an         indian"))
 