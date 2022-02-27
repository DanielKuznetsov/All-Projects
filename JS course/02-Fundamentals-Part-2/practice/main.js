//EX1

const birthYears = [1998, 2007, 1976, 1991, 1944];
const ages = [];
let average;

const calcAge = function (currentYear) {
  for (let i = 0; i < birthYears.length; i++) {
    const age = currentYear - birthYears[i];
    ages.push(age);
  }
  return ages;
};

const calcAverage = function (arr) {
  let sum = 0;
  for (y = 0; y < arr.length; y++) {
    sum += arr[y];
    average = sum / arr.length;
  }
  return average;
};

console.log(calcAge(2022));
console.log(calcAverage(ages));
