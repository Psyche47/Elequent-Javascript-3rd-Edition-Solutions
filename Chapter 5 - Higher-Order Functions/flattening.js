/*
Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays.
*/
let flattening = (array) => {
  return array.reduce((total, value) => {
    return total.concat(Array.isArray(value) ? flattening(value) : value);
  }, []);
};

let arr = [1, [2, 3], [4, [5, 6]], 7];
console.log(flattening(arr));
// → [ 1, 2, 3, 4, 5, 6, 7 ]
