/*
Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order.
The second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the 
standard reverse method
*/

let reverseArray = (nums) => {
  let newNums = [];
  for (let num of nums) {
    newNums.unshift(num);
  }
  return newNums;
};

let reverseArrayAlter = (nums) => {
  let newNums = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    newNums.push(nums[i]);
  }
  return newNums;
};

let reverseArrayInPlace = (nums) => {
  let swap;
  for (let i = 0; i < Math.floor(nums.length / 2); ++i) {
    swap = nums[i];
    nums[i] = nums[nums.length - 1 - i];
    nums[nums.length - 1 - i] = swap;
  }
  return nums;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
// -> [ 5, 4, 3, 2, 1 ]
console.log(reverseArrayAlter([1, 2, 3, 4, 5]));
// -> [ 5, 4, 3, 2, 1 ]
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));
// -> [ 6, 5, 4, 3, 2, 1 ]
