'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//STRING METHODS
const airline = 'American Airline LA';
const plane = 'A320';
console.log(plane[0]);
console.log(airline.length);
console.log('HELLOW'.length);

console.log(airline.indexOf('m'));
console.log(airline.lastIndexOf('i'));
console.log(airline.indexOf('American'));

//Slice method
console.log(airline.indexOf('n'));
console.log(airline.slice(9));
console.log(airline.slice(0, airline.indexOf(' '))); //slicing first word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //slicing last word

const checkMiddleSeat = function (seat) {
  const s1 = seat.slice(-1);
  s1 === 'B' || s1 === 'E'
    ? console.log(`You got a middle seat`)
    : console.log(`You got lucky`);
};

checkMiddleSeat('2E');

const passanger = 'daNiEl';
const passangerLower = passanger.toLowerCase();
const passangerCorrect =
  passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect);

//Compare emails
const email = 'danilkuznet@icloud.com';
const loginEmail = '   DanilKuzNet@Icloud.Com ';
const normalizedEmail = loginEmail.toLowerCase().trim(); //trim() removes space
console.log(email === normalizedEmail);

//Replacing
const priceRUS = '288,97 Rubl';
const priceUS =
  '$ ' + priceRUS.replace('Rubl', '$').replace(',', '.').slice(0, -1);
console.log(priceUS); // $ 288.97 is what it looks like now

//replacing entire word
const announcement =
  'All passangers come to the boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

//Booleans in strings
const plane2 = 'Air A320 neo';
console.log(plane2.includes('A32')); //true
console.log(plane2.startsWith('Air')); //true

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the new AIrbus family');
}

//Split method
console.log('hellow+world+tday+dmks'.split('+'));
const [firstName1, lastName1] = 'Daniel Kuznetsov'.split(' ');
console.log(firstName1);

const newName = ['Mr.', firstName1, lastName1.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];

  for (const n of names) {
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper);
};

capitalizeName('hello world daniel group seal beach');

const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4); //taking last 4 digits
  return last.padStart(str.length, '*');
};

const camelStr = function (str) {
  const strUnder = str.toLowerCase();
  const strSplit = strUnder.split('_');
  console.log(
    strSplit[0] +
      strSplit[1].replace(strSplit[1][0], strSplit[1][0].toUpperCase())
  );
};

camelStr('first_name');
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
const weekdays1 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const hours = {
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
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 object literals
  hours,

  //much easier ES6 syntax
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
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

//using for of loop and a option chaining "?."
for (const day of weekdays1) {
  const open = restaurant.hours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Will print out 'Store is closed" if 'mon' does not exist
console.log((restaurant.hours.mon ??= `Store is closed`));

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
  openingHours: ourHours,
  categories: tags,
} = restaurant;

console.log(restaurantName);

//Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

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
} = hours;
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
const { sat, sun, ...weekdays } = hours;
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

//AND logical operator - works best with nullish operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1); //numGuests = 0
console.log(rest2); //numGuests = 10

//CODING CHALLANGE
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [players1, players2] = game.players; //creating variable for each team
//2
const [gk, ...fP] = players1; //goalkeeper and field players of team#1
//3
const allPlayers = [...players1, ...players2]; //creating an array of all players
//4
const players1Final = [...players1, 'Thiago', 'Countino', 'Perisic']; //creating new array of Final players, adding 3 more
//5
const {
  odds: { team1, x: draw, team2 },
} = game;
//6
function printGoals(...players1) {
  console.log(`${players1.length} goals were scored`);
}
//7
team1 < team2 && console.log(`Team 1 is likely to win`);
team1 > team2 && console.log(`Team 2 is likely to win`);

printGoals(...game.scored);

//the FOR-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//Optional chaining (?.)
// console.log(hours.mon.open);
//WITHOUT
console.log((hours.thu ??= 'We are not open on Mondays. Sorry!'));
//WITH
console.log(restaurant?.hours?.mon); //if value before "?" exists, then it will output the result of what is after the dot "."

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Array
const users = [
  {
    name: 'Daniel',
    email: 'danilkuznet@icloud.com',
  },
];

console.log(users[0]?.name ?? `User array is empty`);

//Looping Objects Keys
//PROPERTY NAMES
const properties = Object.keys(hours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += ` ${day}, `;
}

console.log(openStr);
//PROPERTY VALUES
// const values = Object.values(hours);
// console.log(values);

//ENTIRE OBJECT
const entries = Object.entries(hours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//Sets
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(...'hellow');
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear(); //remove all items in the set
console.log(orderSet);

//can be looped through
for (const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
// const staffUnique = [...new Set(staff)];//transition into an array
console.log(staffUnique);
// console.log(...staffUnique);//spread operator works on sets

//Maps
const restMap = new Map();
restMap.set('name', 'Classico Italiano');

//Maps can be chained like this
restMap
  .set(1, 'Fironze", "Italy')
  .set(true, 'We are open :)')
  .set(false, 'We are closed ;(')
  .set('open', 11)
  .set('close', 23);

console.log(restMap.get(true));
console.log(restMap.get('name'));
console.log(restMap.get(1));

const time = 12;
console.log(
  restMap.get(time > restMap.get('open') && time < restMap.get('close')) //the value of what is in () is 'true'
);

restMap.delete(1); //removing the value by setting a key
console.log(restMap);

// Example 1
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3][(true, 'Correct. YAY!')],
//   [(true, 'Correct. Yay!')],
//   [false, 'Try again'],
// ]);

//Converting Objects to Maps
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap.get('fri'));

// console.log(Object.entries(hours));
//For loop
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2.
gameEvents.delete(64);
console.log(gameEvents);
// 3.
const time2 = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time2 / gameEvents.size} minutes`
);
// 4.
for (const [time, event] of gameEvents) {
  const half = time <= 45 ? ['FIRST'] : ['SECOND'];
  console.log(`[${half} HALF] ${time}: ${event}`);
  // time < 45 && console.log(`[FIRST HALF] ${time}: ${event}`);
  // time > 45 && console.log(`[SECOND HALF] ${time}: ${event}`);
}
