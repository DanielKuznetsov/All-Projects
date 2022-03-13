const abc = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

// const [a, b, c, ...rest] = abc;

//COMBINE 2 ARRAYS INTO 1 –––– FIRST WAY
const newArrayRest = [...abc, ...numbers];

//COMBINE 2 ARRAYS INTO 1 –––– SECOND WAY
const newArrayConcat = abc.concat(numbers);

// console.log(a, b, c);
// console.log(rest);
console.log(newArrayConcat);

//FUNCTION RETURNS RESULT IN AN ARRAY
function sumAndMultiplyDiv(a, b) {
  return [a + b, a * b, b / a];
}

//DESTRUCTURE RETURNED ARRAY FROM A FUNCTION
//INTO VARIABLES
const [sum, multiply, division = "No division"] = sumAndMultiplyDiv(2, 3);
console.log(sum);
console.log(multiply);
console.log(division);

//DESTRUCTURING AN OBJECT
const personOne = {
  name: "Daniel",
  age: 24,
  favoriteFood: "Watermelon",
  address: {
    city: "Los Angeles",
    state: "California",
  },
};

const personTwo = {
  name: "Bobby",
  age: 31,
  address: {
    city: "Cincinatti",
    state: "Ohio",
  },
};

const {
  name: firstName,
  age,
  favoriteFood = "Rice",
  address: { city: myCity, state },
} = personOne;
console.log(firstName, age, favoriteFood, myCity, state);

const { ...rest } = personTwo;
// console.log(rest);

//OVERWRITING TWO OBJECTS
const personThree = { ...personOne, ...personTwo };
console.log(personThree);

function printUser({ age, favoriteFood }) {
  console.log(
    `Neme is ${firstName}. Age is ${age}. Also, he is from ${myCity}`
  );
}

printUser(personOne);
