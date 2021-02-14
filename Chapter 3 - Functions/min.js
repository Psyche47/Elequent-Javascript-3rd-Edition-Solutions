/*
The previous chapter introduced the standard function Math.min that returns 
its smallest argument. We can build something like that now. 
Write a function min that takes two arguments and returns their minimum.
*/
let min = (arg1, arg2) => {
  return arg1 < arg2 ? arg1 : arg2;
};

console.log(min(3, 5));
// -> 3
