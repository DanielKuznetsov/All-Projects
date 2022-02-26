//EXAMPLE 1
const myCountry = {
  country: "USA",
  capital: "Washington",
  language: "english",
  population: 300,
  neighbors: ["Mexico", "Canada", "Russia"],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighbouring countries, and a capital called ${this.capital}`;
  },

  checkIsland: function () {
    return this.neighbors.length > 0;
  },
};

// // myCountry.population -= 2;
// myCountry["population"] += 2;

// //EXAMPLE 2
// const text = `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries, and a capital called ${myCountry.capital}`;
// console.log(text);

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

//EXAMPLE 3
const mark = {
  fullName: "Mark Miller",
  height: 169,
  weight: 78,

  calcBMI: function () {
    return this.weight / this.height ** 2;
  },
};

const john = {
  fullName: "John Smith",
  height: 169,
  weight: 79,

  calcBMI: function () {
    return this.weight / (this.height * this.height);
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
      john.fullName
    } (${john.calcBMI()}) `
  );
} else if (mark.calcBMI() < john.calcBMI()) {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
      mark.fullName
    } (${mark.calcBMI()}) `
  );
} else {
  console.log(`There is no winners :D`);
}

//loops
//FOR loop keeps running while condition is true
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repitition ${rep}`);
}

const danielArray = [
  "daniel",
  "kuznetsov",
  24,
  4444,
  "student",
  ["nick", "robert", "moscow"],
];

const types = [];

for (let i = 0; i < danielArray.length; i++) {
  //reading from an array
  console.log(danielArray[i]);

  //filling types array
  types[i] = typeof danielArray[i];

  //filling types array in another way
  types.push(typeof danielArray[i]);
}

//looping a new array through a function
const years = [1991, 2007, 1969, 2022, 1998];
const ages = [];

const age = function (currentYear, birthYear) {
  return currentYear - birthYear;
};

for (let i = 0; i < years.length; i++) {
  ages.push(age(2022, years[i]));
}

console.log(ages);

//continue and break statement
for (let i = 0; i < danielArray.length; i++) {
  //if a value in if statement is true, loop will be executed, otherwise it will break
  // if (typeof danielArray[i] !== "string") continue;

  if (danielArray[i] === typeof "number") break;
  console.log(danielArray[i], typeof danielArray[i]);
}

//looping backwards
for (let i = years.length - 1; i >= 0; i--) {
  console.log(i, years[i]);
}

//looping inside loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------- Starting an exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise #${exercise}: Lifting weight repetition #${rep}`);
  }
}

//while loop
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weight repetition #${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log(`Loop is about to end ....`);
  }
}
