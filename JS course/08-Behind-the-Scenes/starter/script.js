'use strict';
const firstName = 'Daniel';
calcAge(1993);

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age} years old, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      const firstName = 'Repeted name';
      const str = `Oh, your a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return `Return is ${(a, b)}`;
      }
    }
    //cannot call this function because it needs to be on the same level
    // console.log(add(2, 4));
  }
  printAge();
  return age;
}

//Variable hoisting
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Daniel';
let job = 'host';
const year = 1998;

//Function hoisting
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
