
// // count specific word(s) in entire text

text = "str string str1,str2,str3,i am am am amama str4"

search_text = "str"
console.log(search_text,
(text.match(new RegExp(search_text, "g")) || []).length,
"times")    // "g" means global

search_text = "am" // "am" without space
console.log(search_text,
(text.match(new RegExp(search_text, "g")) || []).length,
"times")


search_text = "am "  // "am" with space
console.log(search_text,
(text.match(new RegExp(search_text, "g")) || []).length,
"times")

