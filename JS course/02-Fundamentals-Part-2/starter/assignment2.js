// calling functions
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreCoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgCoalas) {
  if (avgDolphins >= 2 * avgCoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgCoalas})`);
  } else if (avgCoalas >= 2 * avgDolphins) {
    console.log(`Coalas win (${avgCoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins..");
  }
};

checkWinner(scoreDolphins, scoreCoalas);
checkWinner(2, 45);
