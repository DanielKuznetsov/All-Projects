'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  //passing default value
  numPassangers = 1,
  //passing default value
  price = numPassangers * 199
) {
  //creating an object of values
  const booking = {
    flightNum,
    numPassangers,
    price,
  };

  bookings.push(booking);
};

createBooking('U231', 2, 245);
createBooking('U2324');
console.log(bookings);

const person = {
  name: 'Daniel',
  passport: 43333433343,
};

const checkIn = function (passanger) {
  if (passanger.passport === 43333433343) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(person);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//High order function
const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);
};

transformer('JavaScript is the best', upperFirstWord);

//EXAMPLE OF USAGE OF HIGH ORDER FUNCTIONS
function randomNumber() {
  return Math.trunc(Math.random() * 1000);
}

function id(name, rand) {
  return `${name}-${rand}`;
}

const userID = id('Daniel', randomNumber());
console.log(userID); //Daniel-441

//EXAMPLE 2
function plusFive(number) {
  return number + 5;
}
//assigning value to the value of a function
const n = plusFive;
console.log(n(9)); //14

//EX3
const isEven = function (number) {
  return number % 2 === 0 ? 'odd' : 'even';
};

const printMsg = function (fnEven, number) {
  console.log(`The number ${number} is ${fnEven(number)} `);
};

printMsg(isEven, 12);

//EX4 Function returning another function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}!`);
  };
};

greet('Hey')('Daniel');

//using arrow function
const greet1 = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};
//arrow function #2
const greetArr = greeting => name => {
  console.log(`${greeting} ${name}`);
};

greetArr('Hi')('Bobby');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(213, 'Daniel');
lufthansa.book(635, 'Bobby');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EU',
  bookings: [],
};

const book = lufthansa.book;

//telling JavaScript explicitly to which object point to
//CALL method
book.call(eurowings, 23, 'Sarah Williams');
book.call(lufthansa, 239, 'Mary Coopper');

//APPLY method
const flightData = [583, 'George Hemmilton'];
book.apply(lufthansa, flightData);
book.call(eurowings, ...flightData);

//BIND method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(23, 'Steven Williams');

//BIND with Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

const buyPlane = lufthansa.buyPlane;
const buyPlaneLH = buyPlane.bind(lufthansa);

document.querySelector('.buy').addEventListener('click', buyPlaneLH);

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

//The same but just function returning function
const addTax1 = function (rate) {
  return function (value) {
    return value + rate * value;
  };
};

const addVAT1 = addTax1(0.23);
console.log(addVAT1(100));
console.log(addVAT1(230));
