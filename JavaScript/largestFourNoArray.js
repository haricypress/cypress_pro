
arr = [0, 2, 3, 4, 5, 6, 7]
arr = arr.sort()
console.log(arr)

length = arr.length
last_index = length - 1
let sum = 0

if (length >= 4) {
    let four_val = ""

    for (let i = last_index; i >= last_index - 3; i--) {

        four_val += arr[i] + " "
        sum += arr[i]
    }
    console.log(four_val, sum)
}
else {
    for (let i = 0; i < length; i++) {
        sum += arr[i]
    }
    console.log(sum)
}


