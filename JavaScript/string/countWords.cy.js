
// words count with single input
console.log("words count with single input")

function countWords1(str) {

    if (str.length > 0) {

        let spaces = 1
        for (let char of str) {

            if (char == " ") {
                spaces = spaces + 1
            }

        }
        console.log("No of words : ", spaces)

    }
}
countWords1("hari kishore indian")

// =====================================================================

// words count with unknown No.of arguments
console.log("words count with unknown No.of arguments")

function countWords2(...args) {

    for (let singleArg of args) {

        if (singleArg.length > 0) {

            let count = 1
            for (let char of singleArg) {

                if (char == " ") {
                    count = count + 1
                }

            }
            console.log("No of words : ", count)
        }
    }
}
countWords2("hari", "hari kishore", "hari kishore indian")


// =====================================================================

// count no.of words with regex
console.log("count no.of words with regex")

function countWords3(str) {
    if (str.length > 0) {  // checking if input is empty of not

        console.log(str.trim().split(/\s+/))
        return str.trim().split(/\s+/).length;  // "i am an indian"
    }
}

console.log(countWords3("i am an            indian"))


