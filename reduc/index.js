var fileToString = require("../fileToString.js");
var input = fileToString.readFile("input2.txt");

// response

const prixBuffet = parseInt(input.shift());
const nbTable = parseInt(input.shift());
input = input.map(x => parseInt(x));
console.log(input, prixBuffet, nbTable);

const getReduc = nbPers => {
  if (nbPers >= 10) {
    return 30;
  } else if (nbPers >= 6) {
    return 20;
  } else if (nbPers >= 4) {
    return 10;
  } else {
    return 0;
  }
};

// console.log("calc", 10 - 10 * 30 / 100);

const getPrixTable = table => {
  const reduc = getReduc(table);
  console.log(table, reduc, table * prixBuffet);
  console.log(table * prixBuffet - table * prixBuffet * reduc / 100);
  return table * prixBuffet - table * prixBuffet * reduc / 100;
};

// getPrixTable(input[0]);

let prixTable = 0;
input.forEach(table => {
  //   console.log(prixTable, getPrixTable(table));
  prixTable += getPrixTable(table);
});

console.log(Math.ceil(prixTable));
