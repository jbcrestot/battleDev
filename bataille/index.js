var fileToString = require("../fileToString.js");
var input = fileToString.readFile("input3.txt");

var nbTour = input.shift();
input = input.slice(0, nbTour);

var t = input.map(x => {
  var tab = x.split(" ");

  return { a: parseInt(tab[0]), b: parseInt(tab[1]) };
});

var scoreA = 0,
  scoreB = 0;

var remportevarour = tour => {
  var { a, b } = tour;
  if (a === b) return;

  a > b ? scoreA++ : scoreB++;
};

t.forEach(remportevarour);

console.log(scoreA > scoreB ? "A" : "B");
