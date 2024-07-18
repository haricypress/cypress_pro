
/*
     sort then add elements last 4 values, if length is > 4
     sort then add 1st 4 elements if length is <= 4
*/

arr = [0, 1, 2, 1,1,1,1,]
// arr = [0, 1, 2,]

arr = arr.sort()
console.log("array : ",arr)

length = arr.length
last_index = length - 1
let sum = 0

if (length > 4) {
    let four_val = ""

    for (let i = last_index; i >= last_index - 3; i--) {

        four_val += arr[i] + " "
        sum += arr[i]
    }
    console.log("last 4 values : ",four_val)
    console.log("adding elements from 5th element :", sum)
}
else {
    for (let i = 0; i < length; i++) {
        sum += arr[i]
    }
    console.log("adding 1st 4 elements :",sum)
}


