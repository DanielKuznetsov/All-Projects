//CHALLENGE USING IF/ELSE AND LOGIC OPERATORS
const dolphinScoreOne = 96;
const dolphinScoreTwo = 108;
const dolphinScoreThree = 89;

const coalaScoreOne = 88;
const coalaScoreTwo = 91;
const coalaScoreThree = 110;

//calculating an average score
const dolphinAverage =
  (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;
const coalaAverage = (coalaScoreOne + coalaScoreTwo + coalaScoreThree) / 3;
console.log(
  `Dolphins' average score is ${dolphinAverage} and Coala's is ${coalaAverage}`
);

//checking for who has got a higher average score
/////////////////////////////////////////////
// if (dolphinAverage > coalaAverage) {
//   console.log(
//     `Dolphins' team has a higher average score, therefore it makes them a winner`
//   );
// } else if (dolphinAverage < coalaAverage) {
//   console.log(
//     `Coala's team has a higher average score, therefore it makes them a winner`
//   );
// } else {
//   console.log(`Their scores are the same and there is no winners`);
// }

//checking for a minimum of 100 average score, finding a winner and draw
//////////////////////////////////////////////////////////
if ((dolphinAverage && coalaAverage) >= 100 && dolphinAverage > coalaAverage) {
  console.log(
    `Dolphins' team has a higher average score, therefore it makes them a winner`
  );
} else if (dolphinAverage < coalaAverage) {
  console.log(
    `Coala's team has a higher average score, therefore it makes them a winner`
  );
} else if (dolphinAverage === coalaAverage) {
  console.log(`Their scores are the same and there is no winners`);
} else {
  console.log(`Average score must be a minimum of a 100`);
}
