"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var fileToString = require("../fileToString.js");
var input = fileToString.readFile("input1.txt");

// cas de test
// let input = ["3", '6', "1", "2", '5', '4'];
// let input = ["1", '2', "3", "4", '5', '6'];
// Résultat attendu : 5

// response
input = input.map(function (x) {
  return parseInt(x);
});
// console.log(input);
var sortedArray = [].concat(_toConsumableArray(input)).sort(function (a, b) {
  return a - b;
});
// console.log(sortedArray);

var retourneFromPos = function retourneFromPos(intPile, pos) {
  var pile = [].concat(_toConsumableArray(intPile));
  var partPile = pile.splice(0, pos + 1);
  // console.log("dois retourner", partPile);
  partPile.reverse();
  // console.log("ce qui donne", partPile);
  // console.log("--------------------------");

  return [].concat(_toConsumableArray(partPile), _toConsumableArray(pile));
};

var nbMatches = [0, 0, 0, 0, 0, 0, 0, 0];

var isMatching = function isMatching(entry) {
  var inputToTest = [].concat(_toConsumableArray(entry));
  // console.log(
  //   `${JSON.stringify(inputToTest)} === ${JSON.stringify(sortedArray)}`
  // );
  return JSON.stringify(inputToTest) === JSON.stringify(sortedArray);
};

var testMatch = function testMatch(nbCoups) {
  var tempInput = [].concat(_toConsumableArray(input));
  // console.log("nbCoups", nbCoups);

  var loop = function loop(arrayToTest) {
    var profondeur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var previousSwitch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    // console.log();
    // console.log("--------------- loop prof ", profondeur);
    // console.log("arrayToTest", arrayToTest);

    for (var index = 1; index < input.length; index++) {
      // console.log("previousSwitch", previousSwitch, "index", index);
      if (previousSwitch !== index) {
        var tempArr = retourneFromPos(arrayToTest, index);
        if (isMatching(tempArr)) {
          nbMatches[profondeur]++;
        }
        if (profondeur < nbCoups) loop(tempArr, profondeur + 1, index);
      }
      // console.log("----------- end loop prof ", profondeur);
      // console.log();
    }
  };

  if (nbCoups === 0) {
    isMatching(input);
  }

  loop(tempInput);
};

// testMatch(0);
// console.log("nbMatches", nbMatches);
if (isMatching(input)) {
  nbMatches[0]++;
}
testMatch(7);
// console.log("nbMatchesMin", nbMatches.findIndex(x => x > 0));
console.log(nbMatches.findIndex(function (x) {
  return x > 0;
}));
