
function findLongestWord_1(str) {
  var strSplit = str.split(' ')
  console.log(str, strSplit, strSplit.length)
  var longest_word = ''
  var longest_length = 0

  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longest_length) {
      longest_length = strSplit[i].length;
      longest_word = strSplit[i]
    }
  }

  //  here "\n\n" used to print new lines
  return 'longest word : ' + longest_word + ' (' + longest_length + ')'

}


stringValue = 'i am an indian'
stringEmpty = ''


console.log(findLongestWord_1(stringValue))
console.log(findLongestWord_1(stringEmpty))

// =================================================================================
