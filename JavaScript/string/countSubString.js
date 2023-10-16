
// // count specific word(s) in entire text

// text = "str string str1,str2,str3,i am am am amama str4"

// search_text = "str"
// console.log(search_text,' : ',
// (text.match(new RegExp(search_text, "g")) || []).length)

// search_text = "am" // "am" with space
// console.log(search_text,' : ',
// (text.match(new RegExp(search_text, "g")) || []).length)


// search_text = "am "  // "am" with space
// console.log(search_text,' : ',
// (text.match(new RegExp(search_text, "g")) || []).length)




function countWords(str) {

    console.log(str.trim().split(/\s+/))
    return str.trim().split(/\s+/).length;  // "i am an indian"
  }

  console.log(countWords("i am an         indian"))
  console.log()