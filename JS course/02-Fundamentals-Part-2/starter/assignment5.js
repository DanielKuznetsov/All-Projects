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
const percentages3 = [];
let i = 0;
while (i < population2.length) {
  const perc = percentageOfWorld(population2[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
