let myOwnLoop = (value, test, update, body) => {
  for (let i = value; test(i); i = update(i)) {
    body(i);
  }
};

myOwnLoop(
  5,
  (n) => n > 1,
  (n) => n - 1,
  console.log
);
// → 5
// → 4
// → 3
// → 2
