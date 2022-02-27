//EX1

// const birthYears = [1998, 2007, 1976, 1991, 1944];
// const ages = [];
// let average;

// const calcAge = function (currentYear) {
//   for (let i = 0; i < birthYears.length; i++) {
//     const age = currentYear - birthYears[i];
//     ages.push(age);
//   }
//   return ages;
// };

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (y = 0; y < arr.length; y++) {
//     sum += arr[y];
//     average = sum / arr.length;
//   }
//   return average;
// };

// console.log(calcAge(2022));
// console.log(calcAverage(ages));

//EX2

// const arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
// const arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351

// const calcSum = function (arr) {
//   sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };

// const totalSum = calcSum(arr_1) + calcSum(arr_2);
// console.log(totalSum);

//EX3
const arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
const reversed = [];

const reversedArr = function (arr) {
  for (i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

console.log(reversedArr(arr));
