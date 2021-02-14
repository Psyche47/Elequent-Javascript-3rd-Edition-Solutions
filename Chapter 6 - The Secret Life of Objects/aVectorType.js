/*
Write a class Vec that represents a vector in two-dimensional space. It takes
x and y parameters (numbers), which it should save to properties of the same
name.

Give the Vec prototype two methods, plus and minus, that take another
vector as a parameter and return a new vector that has the sum or difference
of the two vectors’ (this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length of
the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

Vec.prototype.plus = function plus(vec) {
  return new Vec(this.x + vec.x, this.y + vec.y);
};
Vec.prototype.minus = function minus(vec) {
  return new Vec(this.x - vec.x, this.y - vec.y);
};

let vector1 = new Vec(3, 5);
console.log(vector1);
// -> Vec { x: 3, y: 5 }
let vector2 = new Vec(5, 2);
console.log(vector2);
// -> Vec { x: 5, y: 2 }
console.log(vector1.plus(vector2));
// -> Vec { x: 8, y: 7 }
console.log(vector1.minus(vector2));
// -> Vec { x: -2, y: 3 }
console.log(vector1.length);
// -> 5.830951894845301
