var fileToString = require("../fileToString.js");
var input = fileToString.readFile("input3.txt");

// response
// console.log(input);
const nbRest = parseInt(input.shift());

let rest = input.map(notes => notes.split(" "));

const moyenTab = tab => {
  let count = 0;
  let total = 0;
  tab.forEach(val => {
    count++;
    total += parseInt(val);
  });

  return total / count;
};

let os = rest.map(moyenTab);

console.log(Math.ceil(os.sort((a, b) => b - a).shift()));
