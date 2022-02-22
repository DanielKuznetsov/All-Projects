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
//for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repitition ${rep}`);
}

const daniel1 = ["daniel", "kuznetsov", 24, "student"];

for (let i = 0; i < 4; i++) {
  console.log(daniel1[i]);
}
