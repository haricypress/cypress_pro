

function swapEveryTwoCharacters(input) {
  let result = '';
  for (let i = 0; i < input.length; i += 2) {
    if (i + 1 < input.length) {
      result += input[i + 1] + input[i];
    } else {
      result += input[i];
    }
  }
  return result;
}

let originalString = "Hello, World!";
let swappedString = swapEveryTwoCharacters(originalString);
console.log(swappedString);
