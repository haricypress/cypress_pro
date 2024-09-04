const str = "I havehkjhkhkj3 3 apples and 5 oranges";

const numbersArray = str.match(/\d+/g).map(Number);

console.log(numbersArray);
