var fileToString = require("../fileToString.js");
var input = fileToString.readFile("input4.txt");

// response
const myNotes = input
  .shift()
  .split(" ")
  .map(x => parseInt(x));
const nbPotes = parseInt(input.shift());
const nbBestPotes = parseInt(input.shift());
// console.log(myNotes, nbPotes, nbBestPotes);

input = input.map(notes => {
  const newNotes = notes.split(" ");
  return newNotes.map(x => parseInt(x));
});

console.log(input);
const getEcart = notes => {
  //   console.log("======");
  //   console.log(myNotes);
  const lastRocky = notes.pop();
  //   console.log(notes);
  let moyenne = 0;
  for (let i = 0; i < notes.length; i++) {
    const temp = Math.abs(notes[i] - myNotes[i]);
    // console.log(temp);
    moyenne += temp;
  }

  //   console.log("res", moyenne);
  //   console.log("res", moyenne / 5);

  return { moyenne: moyenne, lastRocky: lastRocky };
};

// console.log(getEcart(input[0]));
// console.log("-------------------");

const friends = input.map(getEcart);
// console.log(friends);

friends.sort((a, b) => a.moyenne - b.moyenne);
// console.log(friends);

const besta = friends.slice(0, nbBestPotes);
// console.log("-------------------");
// console.log(besta);
const add = besta.map(friend => friend.lastRocky).reduce((a, b) => a + b);
console.log(add / nbBestPotes);
