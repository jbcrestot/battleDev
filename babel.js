"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
var definitivePair = { b1: "", b2: "" };
input = input.sort(function (a, b) {
  return b.length - a.length;
});
console.log(input);

var compare = function compare(pair) {
  var cb1 = pair.b1,
      cb2 = pair.b2;
  pair.b1.length > pair.b2.length ? cb1 = pair.b1.slice(0, pair.b2.length) : cb2 = pair.b2.slice(0, pair.b1.length);
  console.log("compare pair", pair, cb1, cb2);

  var good = true;
  cb1.split("").forEach(function (osef, index) {
    console.log("----", index, cb1[index], cb2[index]);
    // console.log("isComplementary", isComplementary(cb1[index], cb2[index]));
    if (!isComplementary(cb1[index], cb2[index])) good = false;
  });
  if (good) {
    definitivePair = _extends({}, pair);
    input.splice(input.findIndex(function (val) {
      return val === pair.b1;
    }), 1);
    input.splice(input.findIndex(function (val) {
      return val === pair.b2;
    }), 1);

    console.log("*****\n      jackpot\n      *****", "new pair", { b1: cb1, b2: cb2 }, pair);
  }
  console.log("                               .");

  return good;
};

var isComplementary = function isComplementary(a, b) {
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

var addFrag = function addFrag(frag) {
  var newPair = _extends({}, definitivePair);
  definitivePair.b1.length > definitivePair.b2.length ? newPair.b2 = newPair.b2.concat(frag) : newPair.b1 = newPair.b1.concat(frag);
  return newPair;
};

var testIndex = function testIndex(ind) {
  var tempInput = [].concat(_toConsumableArray(input));
  if (!definitivePair.b1) {
    definitivePair.b1 = tempInput.splice(ind, 1)[0];
  } else {
    definitivePair.b1.concat(tempInput[ind]);
  }

  return tempInput.findIndex(function (el, id) {
    console.log("findIndex", el
    // compare(addFrag(el))
    );
    return compare(addFrag(el));
  });
};

// do {
console.log("do begin");
for (var i = 0; i < nbFragment; i++) {
  console.log("loooop", input[i]);
  var indexF = testIndex(i);
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
