//SPREAD OPERATOR
//combining 2 objects
const userProvided = {
  name: "Bil Smith",
  email: "bil@example.com",
};
const defaultValues = {
  name: "Unknown",
  address: "Alien",
  phone: null,
  email: null,
};
const userInfo = { ...defaultValues, ...userProvided };

console.log(userInfo);

//spread operator in a function
function myFun(m1, m2, m3, ...others) {
  console.log(m1, m2, m3, others);
}

let marks = [10, 23, 83, -1, 92];
myFun(...marks);

console.log(`this is bananas: `, ..."bananas");

//spread operator in loops
function sum(...arg) {
  let sum = 0;
  for (let i = 0; i < arg.length; i++) {
    sum += arg[i];
  }
  return console.log(sum);
}

sum(2, 3, 4, 1);

//spread operator in objects that's in an array
const todos = [
  { user: "Daniel", task: "Do homework", completed: false },
  { user: "Bobby", task: "Read book", completed: false },
];

function addTodo(newTodo) {
  //newTodo argument needs to be broken down using ...(spread operator)
  const result = [...todos, { ...newTodo, completed: false }];
  return console.log(result);
}

addTodo({ user: "Robert", task: "Walk the dogs" });

//REST PARAMETER
function addNumbers(name, ...numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return "Total of " + name + ": " + sum;
}

const totalPrice = addNumbers("Prices", 1, 2, 3, 4, 5);
console.log(totalPrice);
