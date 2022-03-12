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
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: '333 First St',
  mainIndex: 2,
  starterIndex: 2,
});

//OBJECT DESCTRUCTURING
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//giving const variables new names (when dealing with 3rd party data)
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

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
