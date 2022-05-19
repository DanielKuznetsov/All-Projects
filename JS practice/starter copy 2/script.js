class Robot {
  constructor(age, name, city) {
    this.age = age;
    this.name = name;
    this.city = city;
  }

  introduceSelf() {
    return `My name is ${this.name}, I'm ${this.age} years old and live in ${this.city}`;
  }
}

// Will come from inputs or API later on
const nameC = "Daniel";
const ageC = 24;
const cityC = "Seal Beach";

const nameC2 = "Robert";
const ageC2 = 31;
const cityC2 = "Long Beach";

const r1 = new Robot(ageC, nameC, cityC);
const r2 = new Robot(ageC, nameC2, cityC2);

const arrRobots = [];
arrRobots.push(r1, r2);

class Person {
  constructor(name, personality, isSitting, robotOwned) {
    this.name = name;
    this.personality = personality;
    this.isSitting = isSitting;
    this.robotOwned = robotOwned;
  }
}

const p1 = new Person("Daniel", "talkative", true, arrRobots);
console.log(p1);
