//arrays - 1st approach

// const calcTip = function (bill) {
//   let tip;
//   if (bill >= 50 || bill <= 300) {
//     tip = bill * 0.15;
//   } else {
//     tip = bill * 0.2;
//   }
//   return tip;
// };

//arrays - 2nd approach
const calcTip = function (bill) {
  return bill >= 50 || bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`This is an array of bills: ${bills}`);
console.log(`This is an array of tips: ${tips}`);
console.log(`This is an array of total amounts: ${totals}`);
