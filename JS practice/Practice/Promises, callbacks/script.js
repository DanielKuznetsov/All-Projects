// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     const x = target - nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] === x) {
//         return [i, j];
//       }
//     }
//   }
// };

// console.log(twoSum([2, 3, 7, 4, 4, 2, 1], 8));

const temperatures = [10, 5, 3];

const sumTemperatures = (temperatures, callback) => {
  // setTimeout to simulate an "expensive calculation"
  setTimeout(() => {
    const sum = temperatures.reduce((total, current) => total + current, 0);
    callback(sum); // call the success callback (with the result of the sum)
  }, 1000);
};

sumTemperatures(temperatures, (value) => {
  console.log(value); // 18 (the sum of temperatures)
});

const welcomeUser = function (name, callback) {
  setTimeout(() => {
    console.log(`Welcome ${name}`);
    callback();
  }, 1000);
};

welcomeUser("Daniel", () => {
  console.log(`Done processing`);
});

//---------------------------------------
//---------------------------------------
//---------------------------------------
function clean(item) {
  console.log(`I just cleaned a ${item}`);
}

var nails = ["rusty nail", "rusty nail", "bent nail", "clean nail"];
var planks = ["splintered plank", "straight plank", "bent plank"];

//CALLBACK FUNCTIONS
function groupAndClean(items, cleaningMethod, done) {
  for (var i = 0; i < items.length; i++) {
    cleaningMethod(items[i]);
  }

  setTimeout(() => {
    done();
  }, 1000);
}

const done = () => console.log("Whew, that was a lot of work!");

// groupAndClean(nails.concat(planks), clean, done);

//REFACTORED USING PROMISE
const groupClean = (items, cleaningMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (var i = 0; i < items.length; i++) {
        cleaningMethod(items[i]);
      }
      resolve();
    }, 2500);
    // reject("Items were not found.");
  });
};

groupClean(nails.concat(planks), clean)
  .then(() => {
    setTimeout(() => {
      console.log("Whew, that was a lot of work!");
    }, 5000);
  })
  .catch((error) => {
    console.error(error);
  });
