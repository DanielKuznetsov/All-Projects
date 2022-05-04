'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const daniel = new Person('Daniel', 1998);

//Reusable method of an object
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

daniel.calcAge();

//Challenge
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log((this.speed += 10));
};

Car.prototype.brake = function () {
  console.log((this.speed -= 5));
};

const car1 = new Car('BMW', 120);
const car2 = new Car('BMW', 95);
car1.accelerate();
car1.brake();

//ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return 2022 - this.birthYear;
  }

  get age() {
    return 2024 - this.birthYear;
  }

  //Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1998);

PersonCl.prototype.greet = function () {
  console.log(`Hello, ${this.fullName}!`);
};

jessica.greet();

const walter = new PersonCl('Walte r', 1990);

const account = {
  owner: 'Daniel',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

//Static methods
