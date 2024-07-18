
// 1) arrays concatenating 

arr1 = [1, 2]
arr2 = [3, 4]
arr3 = arr1.concat(arr2)
arr4 = arr1.concat(arr2, arr3);
console.log(arr1, typeof (arr1))
console.log(arr2, typeof (arr2))
console.log(arr3, typeof (arr3))
console.log(arr4, typeof (arr4))


/* =====================================================================
   2)  array result : 1a, 2b, 3c, 4d
       if both arrays length not equal then ignoring remaining values */

arr1 = [1, 2, 3, 4]
arr2 = ['a', 'b', 'c']
arr3 = []

for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    arr3.push(arr1[i] + arr2[i])
}
console.log(arr3)  // output : 1b, 2b, 3c
/* =====================================================================*/