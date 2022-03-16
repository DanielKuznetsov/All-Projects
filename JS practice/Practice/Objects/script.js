//CODING CHALLANGE

const scored = ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"];
const odds = {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
};

//Create an array
const values = Object.values(odds);
console.log(values);

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  //ES6 feature
  scored,
  odds,
  date: "Nov 9th, 2037",
};

//1 Printing goal number: player
for (const [goalNumber, player] of scored.entries()) {
  console.log(`Goal ${goalNumber + 1}: ${player}`);
}

//2 Calculating the average odd
let average;
let sum = 0;
//FIRST LOOP
// for (let i = 0; i < values.length; i++) {
//   sum += values[i];
//   average = sum / values.length;
// }
// console.log(average);

//SECOND LOOP
for (const [x, y] of values.entries()) {
  sum += y;
  average = sum / values.length;
}
console.log(`The average odd of all odds is ${average}`);

//3
const entries = Object.entries(odds);

for (const [team, odd] of entries) {
  const teamStr = team === "x" ? "draw" : "victory";
  console.log(`Odd of ${teamStr} ${(game[team] ??= "x")}: ${odd}`);
}
