var fileToString = require("../fileToString.js");
var input = fileToString.readFile("input1.txt");

// cas de test
// let input = ["3", '6', "1", "2", '5', '4'];
// let input = ["1", '2', "3", "4", '5', '6'];
// Résultat attendu : 5

// response
input = input.map(x => parseInt(x));
// console.log(input);
const sortedArray = [...input].sort((a, b) => a - b);
// console.log(sortedArray);

const retourneFromPos = (intPile, pos) => {
  const pile = [...intPile];
  const partPile = pile.splice(0, pos + 1);
  // console.log("dois retourner", partPile);
  partPile.reverse();
  // console.log("ce qui donne", partPile);
  // console.log("--------------------------");

  return [...partPile, ...pile];
};

let nbMatches = [0, 0, 0, 0, 0, 0, 0, 0];

const isMatching = entry => {
  const inputToTest = [...entry];
  // console.log(
  //   `${JSON.stringify(inputToTest)} === ${JSON.stringify(sortedArray)}`
  // );
  return JSON.stringify(inputToTest) === JSON.stringify(sortedArray);
};

const testMatch = nbCoups => {
  let tempInput = [...input];
  // console.log("nbCoups", nbCoups);

  const loop = (arrayToTest, profondeur = 1, previousSwitch = null) => {
    // console.log();
    // console.log("--------------- loop prof ", profondeur);
    // console.log("arrayToTest", arrayToTest);

    for (let index = 1; index < input.length; index++) {
      // console.log("previousSwitch", previousSwitch, "index", index);
      if (previousSwitch !== index) {
        const tempArr = retourneFromPos(arrayToTest, index);
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
console.log(nbMatches.findIndex(x => x > 0));
