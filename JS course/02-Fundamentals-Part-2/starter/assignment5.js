//EXAMPLE #1
for (let i = 1; i <= 50; i++) {
  // console.log(`Voter number ${i} is currently voting`);
}

//EXAMPLE #2
const population2 = [160, 300, 42, 1040, 980];
const percentages2 = [];

const percentageOfWorld = function (number) {
  return (number / 7900) * 100;
};

for (let i = 0; i < population2.length; i++) {
  const perc = percentageOfWorld(population2[i]);
  percentages2.push(perc);
}

console.log(percentages2);

//EXAMPLE #3
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (i = 0; i < listOfNeighbours.length; i++) {
  for (y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}

//EXAMPLE #4
// const percentages3 = [];
// let i = 0;
// while (i < population2.length) {
//   const perc = percentageOfWorld(population2[i]);
//   percentages3.push(perc);
//   i++;
// }
// console.log(percentages3);

//EXAMPLE #5
const bills1 = [1200, 178, 279, 100, 85, 250, 400, 600, 1750, 10];
// const bills1 = [1200, 10];
const tips1 = [];
const totals1 = [];
let average;

const calcTip1 = function (bill) {
  return bill >= 50 || bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (i = 0; i < bills1.length; i++) {
  const tip = calcTip1(bills1[i]);
  tips1.push(tip);
  totals1.push(tip + bills1[i]);
}

console.log(tips1);
console.log(totals1);

const calcAverage1 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const average = sum / arr.length;
  return average;
};

console.log(calcAverage1(bills1));
