// // Checking if the input string or not
// const checkString = function (someString) {
//   const someStringCheck =
//     typeof someString === "string"
//       ? `It's a string`
//       : `It's a ${typeof someString}`;
//   return someStringCheck;
// };
// console.log(checkString("hellow"));

// // Checking if a string has a certain letters
// const browserType = "mozilla";
// if (browserType.includes("zilla")) {
//   console.log(`${browserType} does include zilla`);
// } else {
//   console.log(`It does not`);
// }

// //Says (pinky) at the end if the number is greater 1M
// const drEvil = function (num) {
//   console.log(`$${num} dollars ${num >= 1000000 ? "(pinky)" : false}`);
// };

// drEvil(1000000);

// //Replacing all letters of "a" with "*"
// const str = "abbsswafasnfbbsfda";
// console.log(str.replaceAll("a", "*"));

const orders = [
  "Salad",
  "Pasta",
  "Pizza",
  "Burger",
  "Burger",
  "Pasta",
  "Tea",
  "Tea",
];

//creates a set of values from an array above
const orderSet = new Set(orders);
console.log(`${orderSet.size} items were popular today`);

//creates an array that is connecting every single value with a comma
const a = [...orderSet].join(", ");
console.log(a);

//prints out the unique values
let orderStr = `These are our popular items today: ${a}.`;
console.log(orderStr);

const equalItems = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    if (arr[i] === arr[i + 1]) {
      sum += i;
      console.log(`There is a match for ${arr[i]} and ${sum}`);
    }
  }
};

equalItems(orders);
