//EX1 - calculates age and average age

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

//EX2 calculates summ of an array and then sum 2 arrays into one

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

//EX3 reverse array

// const arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// const reversed = [];

// const reversedArr = function (arr) {
//   for (i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// };

// console.log(reversedArr(arr));

//EX4 sum of numbers between 2 numbers
// const num1 = 2;
// const num2 = 8;
// let sum = 0;

// for (i = num1; i <= num2; i++) {
//   sum += i;
// }

// console.log(sum);

//EX5 if the string is a palindrome - all letters are the same if read backwards
// const stringArr = [];

// const calcSplitString = function (string) {
//   let result;
//   let splitString = string.split("");
//   let reversedString = string.split("").reverse();

//   for (i = 0; i < splitString.length; i++) {
//     if (splitString[i] === reversedString[i]) {
//       result = "Yes";
//     } else {
//       result = "No";
//     }
//   }

//   return result;
// };

// console.log(calcSplitString("hellow")); //No
// console.log(calcSplitString("dad")); //Yes

//EX6 add the array items onto 1 line and if 1 array is bigger than the other, still be able to add to 0 instead
const arr_3 = [4, 6, 7, 23, 11, 5];
const arr_4 = [8, 1, 9, 12];
const zero = 0;

const newArr = [];

const calcArr = function (arr1, arr2) {
  if (arr1.length > arr2.length) {
    for (i = 0; i < arr1.length; i++) {
      arr2.push(zero);
      newArr.push(arr1[i] + arr2[i]);
    }
  } else {
    for (i = 0; i < arr2.length; i++) {
      arr1.push(zero);
      newArr.push(arr1[i] + arr2[i]);
    }
  }

  // for (i = 0; i < arr1.length; i++) {
  //   newArr.push(arr1[i] + arr2[i]);
  // }
  return newArr;
};

console.log(calcArr(arr_3, arr_4));
