var fileToString = require("../fileToString.js");
var input = fileToString.readFile("input1.txt");

var taille = input.shift();
// var grille = taille
input = input.map(x => x.split(""));

// console.log("base", input);

var points = [];
var findPoints = grille => {
  input.forEach((line, id) => {
    var addPoint = x => {
      points.push({ x: x, y: id });
    };
    var foundIndex = line.forEach((x, index) => {
      if (x === "X") {
        addPoint(index);
      }
    });
  });
};

findPoints(input);
// console.log("points", points);

var hydrateLine = (x, y) => {
  var line = input[y];
  if (line[x - 1] === ".") line[x - 1] = "o";
  if (line[x] === ".") line[x] = "o";
  if (line[x + 1] === ".") line[x + 1] = "o";
};

var hydrate = point => {
  input.forEach((line, id) => {
    if (point.y - 1 === id || point.y === id || point.y + 1 === id) {
      hydrateLine(point.x, id);
    }
  });
};

points.forEach(point => hydrate(point));
// console.log(input);

var countO = () => {
  var count = 0;
  input.forEach(line =>
    line.forEach(pt => {
      if (pt === "o") count++;
    })
  );

  console.log(count);
};

// response
countO();
