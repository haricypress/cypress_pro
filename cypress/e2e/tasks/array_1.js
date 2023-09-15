
/*

input :
            x = [1, 2, 3, 4, 5]
            y = ['a', 'b']
result :
            z = [1, 'a', 2, 'b', 3, 4,5]
*/


x = [1, 2, 3, 4, 5]
y = ['a', 'b']
z = []



while ((x.length != 0) || (y.length != 0)) {
    if (x.length != 0)
        z.push(x.shift())
    if (y.length != 0)
        z.push(y.shift())
}

console.log(z)