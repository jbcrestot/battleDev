var fileToString = require("../fileToString.js");
var input = fileToString.readFile("input5.txt");

// response
var nbFragment = input.shift();
// console.log(input);

// C
// T
// T
// CGA
// AG
// GG
// CC
var b1 = "",
  b2 = "";
let definitivePair = { b1: "", b2: "" };
input = input.sort((a, b) => b.length - a.length);
console.log(input);

var compare = pair => {
  let cb1 = pair.b1,
    cb2 = pair.b2;
  pair.b1.length > pair.b2.length
    ? (cb1 = pair.b1.slice(0, pair.b2.length))
    : (cb2 = pair.b2.slice(0, pair.b1.length));
  console.log("compare pair", pair, cb1, cb2);

  let good = true;
  cb1.split("").forEach((osef, index) => {
    console.log("----", index, cb1[index], cb2[index]);
    // console.log("isComplementary", isComplementary(cb1[index], cb2[index]));
    if (!isComplementary(cb1[index], cb2[index])) good = false;
  });
  if (good) {
    definitivePair = { ...pair };
    input.splice(input.findIndex(val => val === pair.b1), 1);
    input.splice(input.findIndex(val => val === pair.b2), 1);

    console.log(
      `*****
      jackpot
      *****`,
      "new pair",
      { b1: cb1, b2: cb2 },
      pair
    );
  }
  console.log("                               .");

  return good;
};

const isComplementary = (a, b) => {
  switch (a) {
    case "A":
      return b === "T";
    case "T":
      return b === "A";
    case "C":
      return b === "G";
    case "G":
      return b === "C";

    default:
      console.log("no match");
      break;
  }
};

var addFrag = frag => {
  let newPair = { ...definitivePair };
  definitivePair.b1.length > definitivePair.b2.length
    ? (newPair.b2 = newPair.b2.concat(frag))
    : (newPair.b1 = newPair.b1.concat(frag));
  return newPair;
};

const testIndex = ind => {
  let tempInput = [...input];
  if (!definitivePair.b1) {
    definitivePair.b1 = tempInput.splice(ind, 1)[0];
  } else {
    definitivePair.b1.concat(tempInput[ind]);
  }

  return tempInput.findIndex((el, id) => {
    console.log(
      "findIndex",
      el
      // compare(addFrag(el))
    );
    return compare(addFrag(el));
  });
};

// do {
console.log("do begin");
for (let i = 0; i < nbFragment; i++) {
  console.log("loooop", input[i]);
  let indexF = testIndex(i);
  if (indexF > -1) {
    console.log("got it", definitivePair);
    break;
  }
}
console.log("do end", input);
// } while (input.length > 0);

// console.log("first", input[indexF]);

// input.forEach((frag, id) => {});
// compare(b1, input[0]);

// if (x[0] === "A") x[0] = "T";
// if (x[0] === "T") x[0] = "A";
// if (x[0] === "C") x[0] = "G";
// if (x[0] === "G") x[0] = "C";
