'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} </div>
          <div class="movements__value">${mov}</div>
      </div> `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, current) => {
    return acc + current;
  }, 0);

  labelBalance.textContent = `${balance ?? '0'} EUR`;
};

calcDisplayBalance(account1.movements);

const createUsernames = function (accounts) {
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//Map
// console.log(`------MAP-------`);
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //Set
// console.log(`------SET-------`);
// const currenciesUnique = new Set(['USD', 'GBP', 'RUS', 'USD', 'EUR']);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Reduce method
const balance = movements.reduce((total, current) => {
  return total + current;
}, 0);

console.log(balance);

//Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);

//Filter method
// const deposits = movements.filter(mov => {
//   return mov > 0;
// });

// const withdrawals = movements.filter(mov => {
//   return Math.abs(mov < 0);
// });

// console.log(withdrawals);

// //Map method
// const eurToUsd = 1.1;
// const movementUSD = movements.map(mov => {
//   return Math.floor(mov * eurToUsd);
// });
// console.log(movementUSD);

// const movementsDescriptions = movements.map((mov, i, arr) => {
//   return `Movement ${i + 1}: you ${
//     mov > 0 ? 'deposited' : 'withdrew'
//   } $ ${Math.abs(Math.floor(mov * eurToUsd))}`;
// });

// console.log(movementsDescriptions);

// //for..of loop
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// //forEach() loop
// console.log('----- FOREACH -----');
// movements.forEach((mov, i, arr) => {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE ---not mutable
// const arr2 = arr.slice();
// // console.log(arr2);
// // console.log(arr.slice(-1));

// // SPLICE ---mutate the original array
// // console.log(arr.splice(2));
// // console.log(arr.splice(-1));
// console.log(arr2);

// // REVERSE ---mutate the original array
// console.log(arr2.reverse());

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);

// // JOIN
// const name = 'Daniel';

// console.log(letters.join(' - '));

// console.log(movements.at(-1)); //instead of array[1]

// //getting a last arr method
// console.log(movements.slice(-1)[0]);

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each).
For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy
if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove
the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old")
or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const checkDogs = function (dogsJulia, dogsKate) {
//   const correctedDogsJulia = dogsJulia.splice(1, dogsJulia.length - 2);

//   const dogs = [...correctedDogsJulia, ...dogsKate];
//   // const dogs = correctedDogsJulia.concat(dogsKate);
//   // return dogs;

//   dogs.forEach(function (dog, i) {
//     console.log(
//       `Dog number ${i + 1} is ${
//         dog > 3 ? 'an adult' : 'a puppy'
//       }, and ${dog} years old`
//     );
//   });
// };

// console.log(checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]));
