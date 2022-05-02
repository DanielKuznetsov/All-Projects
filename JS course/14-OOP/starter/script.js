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
