//mark
const weightMark = 78;
const heightMark = 1.69;

const bmiMark = weightMark / heightMark ** 2;

//john
const weightJohn = 92;
const heightJohn = 1.95;

const bmiJohn = weightJohn / heightJohn ** 2;

//checking whose BMI is higher
const markHigherBMI = bmiMark > bmiJohn;

let whoseScoreHigher;
if (bmiMark > bmiJohn) {
  whoseScoreHigher = `Mark has a higher BMI score of ${bmiMark}`;
} else {
  whoseScoreHigher = `John has a higher BMI score of ${bmiJohn}`;
}

console.log(whoseScoreHigher);
