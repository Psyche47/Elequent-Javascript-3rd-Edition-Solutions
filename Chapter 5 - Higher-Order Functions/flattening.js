let flattening = (array) => {
  return array.reduce((total, value) => {
    return total.concat(Array.isArray(value) ? flattening(value) : value);
  }, []);
};

let arr = [1, [2, 3], [4, [5, 6]], 7];
console.log(flattening(arr));
// → [ 1, 2, 3, 4, 5, 6, 7 ]
