// let population = 300000000;

// const country = "USA";
// const continent = "North America";
// language = "english";

// const description = `${country} is in ${continent}, and its population is ${population} that speaks ${language}`;

// console.log(description);

// //type conversion
// const inputYear = "1998";
// console.log(Number(inputYear) + 18);

// type conversion in prompt
// const age = 22;
// if (Number(age) === 22) console.log(`you just turned 22`);

// const numberPrompt = Number(prompt(`What is your favorite number?`));
// if (numberPrompt >= 10) {
//   console.log("The number is above or equal to 10");
// } else {
//   console.log(`The number is less than 10`);
// }

//practicing switch conditions
const language = "english";

switch (language) {
  case `chinese`:
  case `mandarine`:
    console.log(`Most number of native speakers!`);
    break;
  case `spanish`:
    console.log(`2nd place in number of native speakers'`);
    break;
  case `english`:
    console.log(`3rd place`);
    break;
  case `hindi`:
    console.log`Number 4`;
    break;
  case `arabic`:
    console.log(`5th most spoken langauge`);
    break;
  default:
    console.log(`Great language too! :D`);
}
