
//   1221  = 1221 - pollindrome
//   1234 = 4321 - not pollindrome


// detailed
function palindrome(str) {
    console.log("str : ",str)

    var a = str.split("")
    console.log("split :", a)

    b = a.reverse()
   console.log("reverse spilt :", b)

    b = b.join("")
    console.log("join :", b)

    if (str == b) {
        console.log("this is palindrome")
    }
    else {
        console.log("this is not palindrome")
    }
}
palindrome("ann")

// ==========================================================

// short coding
function palindromeOrNot(str) {
    console.log("str : ", str)

    var a = str.split("")
        .reverse()
        .join("")

    console.log("reverse :", a)

    if (str == a) {
        console.log("this is palindrome")
    }
    else {
        console.log("this is not palindrome")
    }
}
palindromeOrNot("ann")  