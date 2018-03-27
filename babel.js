"use strict";

var fileToString = require("../fileToString.js");
var input = fileToString.readFile("input1.txt");

// response
var myNotes = input.shift().split(" ").map(function (x) {
  return parseInt(x);
});
var nbPotes = parseInt(input.shift());
var nbBestPotes = parseInt(input.shift());
// console.log(myNotes, nbPotes, nbBestPotes);

input = input.map(function (notes) {
  var newNotes = notes.split(" ");
  return newNotes.map(function (x) {
    return parseInt(x);
  });
});

console.log(input);
var getEcart = function getEcart(notes) {
  //   console.log("======");
  //   console.log(myNotes);
  var lastRocky = notes.pop();
  //   console.log(notes);
  var moyenne = 0;
  for (var i = 0; i < notes.length; i++) {
    var temp = Math.abs(notes[i] - myNotes[i]);
    // console.log(temp);
    moyenne += temp;
  }

  //   console.log("res", moyenne);
  //   console.log("res", moyenne / 5);

  return { moyenne: moyenne, lastRocky: lastRocky };
};

// console.log(getEcart(input[0]));
// console.log("-------------------");

var friends = input.map(getEcart);
// console.log(friends);

friends.sort(function (a, b) {
  return a.moyenne - b.moyenne;
});
// console.log(friends);

var besta = friends.slice(0, nbBestPotes);
// console.log("-------------------");
// console.log(besta);
var add = besta.map(function (friend) {
  return friend.lastRocky;
}).reduce(function (a, b) {
  return a + b;
});
console.log(add / nbBestPotes);
