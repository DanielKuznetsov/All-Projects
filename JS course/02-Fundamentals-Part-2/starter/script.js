"use strict"; //more secire code, avoiding accidental errors

//////////////////////////////////
//declaration function
function calcPercentage1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld1 = calcPercentage1(150);
console.log(percentageOfWorld1);

//////////////////////////////////
//expression function
const calcPercentage2 = function (population) {
  return (population / 7900) * 100;
};

const percentageOfWorld2 = calcPercentage2(250);
console.log(percentageOfWorld2);
