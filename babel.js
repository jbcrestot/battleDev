"use strict";

var fileToString = require("../fileToString.js");
var input = fileToString.readFile("input3.txt");

// response
// console.log(input);
var nbRest = parseInt(input.shift());

var rest = input.map(function (notes) {
  return notes.split(" ");
});

var moyenTab = function moyenTab(tab) {
  var count = 0;
  var total = 0;
  tab.forEach(function (val) {
    count++;
    total += parseInt(val);
  });

  return total / count;
};

var os = rest.map(moyenTab);

console.log(Math.ceil(os.sort(function (a, b) {
  return b - a;
}).shift()));
