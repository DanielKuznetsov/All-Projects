// "use strict"; //more secire code, avoiding accidental errors

// //////////////////////////////////
// //declaration function
function calcPercentage1(population1) {
  return (population1 / 7900) * 100;
}

// const percentageOfWorld1 = calcPercentage1(150);
// console.log(percentageOfWorld1);

// //////////////////////////////////
// //expression function
// const calcPercentage2 = function (population) {
//   return (population / 7900) * 100;
// };

// const percentageOfWorld2 = calcPercentage2(250);
// console.log(percentageOfWorld2);

// //////////////////////////////////
// // arrow function
// const calcPercentageOfWorld3 = (population, totalWorldPopulation) => {
//   return (population / totalWorldPopulation) * 100;
// };

// const percentageOfWorld3 = calcPercentageOfWorld3(250, 7000);

// console.log(percentageOfWorld3);

// //////////////////////////////////
// // arrow function with a conditional operator
// // const calcAge1 = (currentYear, birthYear) => currentYear - birthYear;

// // const age1 = calcAge1(2022, 1998);
// // console.log(age1);

// // const yearsUntilRetirement = (
// //   currentYear,
// //   birthYear,
// //   retirementAge,
// //   firstName
// // ) => {
// //   const age = currentYear - birthYear;
// //   const retirement = retirementAge - age;
// //   return `${firstName} is ${age} years old and has ${retirement} ${
// //     retirement > 0 ? "years until retirement" : "years since he retired"
// //   }`;
// // };

// // console.log(yearsUntilRetirement(2022, 1998, 65, "Daniel"));

// //////////////////////////////////
// // calling functions

// //EXAMPLE 1
// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);

//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// //EXAMPLE 2
// const describePopulation = (country, population) => {
//   const percentage = calcPercentage1(population);
//   const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;

//   return description;
// };

// console.log(describePopulation("Russia", 150));

// //EXAMPLE 3
// const calcAge = (currentYear, birthYear) => currentYear - birthYear;

// const yearsUntilRetirement = function (firstName, currentYear, birthYear) {
//   const retirementAge = 65;
//   const age = calcAge(currentYear, birthYear);
//   const retirement = retirementAge - age;
//   const retirementDescription = `${firstName} is ${age} years old and has ${retirement} ${
//     retirement > 0 ? "years until retirement" : "years since he retired"
//   }`;
//   return retirementDescription;
// };

// console.log(yearsUntilRetirement("Daniel", 2022, 1998));

//////////////////////////////////
// ARRRAYS

const friends = ["Peter", "Michael", "Steven"];

//adding elements to an array
friends.push("jay");
friends.unshift("daniel");

//removing elements to an array
const popped = friends.pop();
const shifted = friends.shift();
console.log(
  `${shifted} is removed from start, ${popped} is removed from the end`
);
console.log(friends, friends.indexOf("Peter"));

//arrays assignments

//EXAMPLE 1
const populations = [153, 1447, 350, 1050];
console.log(populations.length === 4 ? true : false);

const percentages = [
  calcPercentage1(populations[0]),
  calcPercentage1(populations[1]),
  calcPercentage1(populations[2]),
  calcPercentage1(populations[3]),
];
console.log(percentages);

//EXAMPLE 2
const neighbours = ["Canada", "Mexico", "Cuba"];
neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany")) {
  console.log("Your country is probably not a central European country :D");
}

neighbours[neighbours.indexOf("Canada")] = "Brazil";
console.log(neighbours);
