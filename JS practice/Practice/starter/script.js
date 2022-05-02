var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === x) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
