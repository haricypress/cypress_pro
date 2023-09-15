
// if first and last letters of any world is equal then print

// x = [ "rara", "rar", "efjhbfujwevd", "brrtffb", "cerewcc", "arewrwer"]

//  result : [ 'rar', 'brrtffb', 'cerewcc' ]


x = ["rara", "rar", "efjhbfujwevd", "brrtffb", "cerewcc", "arewrwer"]
z = []

for (i of x) {
    if (i[0] == i[i.length - 1])
        z.push(i)

}
console.log(z)