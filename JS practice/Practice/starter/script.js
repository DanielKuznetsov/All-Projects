const a = {};
const b = {};
const myMap = new Map([
  [{}, "a"],
  [{}, "b"],
]);

myMap.set({}, "c");

console.log(myMap);
