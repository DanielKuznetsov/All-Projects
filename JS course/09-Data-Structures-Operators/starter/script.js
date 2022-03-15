'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
    sun: {
      open: 12,
      close: 20,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (ingredient, ...others) {
    console.log(
      `Your pizza has ${
        others.length + 1
      } ingredients and the main one is ${ingredient}s `
    );
  },
};

restaurant.orderPizza('mashroom', 'pineapple', 'cheese', 'tomato', 'egg');

//Using spread (...) operator in a function
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];
restaurant.orderPasta(...ingredients);

//Adding items to arrays that's in an object
const { mainMenu: currentMenu, starterMenu } = restaurant;
const newMenu = [...currentMenu, 'Gnocci'];
console.log(newMenu);
console.log(...newMenu);

//Copy arrays
const currentMenuCopy = [...currentMenu];
//Joint 2 arrays or more
const jointArrays = [...currentMenu, ...starterMenu];
console.log(jointArrays);

restaurant.orderDelivery({
  time: '22:30',
  address: '333 First St',
  mainIndex: 2,
  starterIndex: 2,
});

//Spread operator in objects
const newRestaurant = { foundedIn: 2022, ...restaurant, founder: 'Daniel' };
console.log(newRestaurant);

//Copying objects using spread operators is way easier
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'The Bungalow Kitchen';
console.log(restaurantCopy.name);
restaurant.name = 'Pavilions';
console.log(restaurant.name);

//OBJECT DESCTRUCTURING
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//giving const variables new names (when dealing with 3rd party data)
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};

({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//ARRAY DESCTRUCTURING
const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [first, , second] = restaurant.categories;
console.log(first, second);

//switching variables in an array
[first, second] = [second, first];
console.log(first, second);

//Receive 2 return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//nested array
const nested = [2, 4, [5, 6]];
const [, , j] = nested;
const [q, w] = j;
console.log(q, w);

//or using destructuring
const [p, , [v, i]] = nested;
console.log(v, i);

//Default values
const [t = 1, e = 1, u = 1] = [8, 5];
console.log(t, e, u);

//THE SPREAD OPERATOR (...)
const array = [2, 3, 4];
// const newArray = [1, 9];
// const result = array.concat(newArray);
// console.log(result);

//OR
const newArray = [1, 9, ...array];
console.log(newArray);
console.log(...newArray);

//SPREAD
const someArray = [1, 2, ...[3, 5]];
//REST
const [s, d, ...others] = [1, 2, 3, 5, 6];
console.log(s, d, others);
console.log(...others);

//REST Objects
const { sat, sun, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//REST Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

const m = [23, 6, 7];
add(2, 3, 4);
add(...m);

//OR & AND OPERATORS
//OR operator accepts any value, any data type and always returns true value
//IF THE FIRST VALUE TRUE, THEN THE REST OF THE OPERATOR WILL BE TRUE
console.log(3 || 'Bobby'); //3
console.log('' || 'Daniel'); //Daniel
console.log(undefined || null); //null
console.log(true || 0); //true
console.log(undefined || 0 || '' || 'Hellow' || 23 || null); //Hellow

//AND operator return False value. If it's true, all values must be true
//IF THE FIRST VALUE FALSE, THEN THE REST OF THE OPERATOR WILL BE FALSE
console.log(0 && 'Daniel'); //0
console.log(7 && 'Daniel'); //Daniel
console.log('Hellow' && 23 && null && 'Jonas'); //null

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); //will return 10 when supposed to return 0

//NULLISH COALESING operator
//nullish coalesing operator works only with UNDEFINED/NULL
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //0

//LOGICAL ASSIGNMENT OPERATOR
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//if object does not have value for the number of guests, then set it equal to 10
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//OR logical assignment operator
rest2.numGuests ||= 10; //10

//NULLISH logical assignment operator (null or undefined)
rest1.numGuests ??= 10; //0

//AND logical operator
rest1.owner ??= '<ANONYMOUS>';
rest2.owner ??= '<ANONYMOUS>';

console.log(rest1); //numGuests = 0
console.log(rest2); //numGuests = 10
