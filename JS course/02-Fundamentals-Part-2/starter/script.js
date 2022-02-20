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

//////////////////////////////////
// arrow function
const calcPercentageOfWorld3 = (population, totalWorldPopulation) => {
  return (population / totalWorldPopulation) * 100;
};

const percentageOfWorld3 = calcPercentageOfWorld3(250, 7000);

console.log(percentageOfWorld3);

//////////////////////////////////
// arrow function with a conditional operator
const calcAge1 = (currentYear, birthYear) => currentYear - birthYear;

const age1 = calcAge1(2022, 1998);
console.log(age1);

const yearsUntilRetirement = (
  currentYear,
  birthYear,
  retirementAge,
  firstName
) => {
  const age = currentYear - birthYear;
  const retirement = retirementAge - age;
  return `${firstName} is ${age} years old and has ${retirement} ${
    retirement > 0 ? "years until retirement" : "years since he retired"
  }`;
};

console.log(yearsUntilRetirement(2022, 1998, 65, "Daniel"));
