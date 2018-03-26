var fileToString = require("../fileToString.js");
var input = fileToString.readFile("input1.txt");

var nbProduct = input.shift();
var targetProduct = input.shift();

input = input
  .map(x => {
    var tem = x.split(" ");
    return [tem[0], parseInt(tem[1])];
  }, [])

  .filter(el => el[0] === targetProduct)
  .sort((a, b) => {
    return a[1] - b[1];
  });
// console.log(input);

// response
console.log(input.shift()[1]);
