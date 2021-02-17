/*
The standard JavaScript environment provides another data structure called
Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it
does not associate other values with those—it just tracks which values are part
of the set. A value can be part of a set only once—adding it again doesn’t have
any effect.

Write a class called Group (since Set is already taken). Like Set, it has add,
delete, and has methods. Its constructor creates an empty group, add adds
a value to the group (but only if it isn’t already a member), delete removes
its argument from the group (if it was a member), and has returns a Boolean
value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine
whether two values are the same.

Give the class a static from method that takes an iterable object as argument
and creates a group that contains all the values produced by iterating over it.
*/

class Group {
  constructor() {
    this.group = [];
  }

  add(element) {
    if (!this.has(element)) {
      this.group.push(element);
    }
  }

  delete(element) {
    if (this.has(element)) {
      let indexOfElement = this.group.indexOf(element);
      delete this.group[indexOfElement];
    }
  }

  has(element) {
    for (let value of this.group) {
      if (value === element) {
        return true;
      }
    }
    return false;
  }

  static from(iterable) {
    let newGroup = new Group();
    for (let element of iterable) {
      if (!newGroup.has(element)) {
        newGroup.add(element);
      }
    }
    return newGroup;
  }
}

let firstGroup = Group.from([23, 07, 10, 09, 23]);
console.log(firstGroup.has(23));
// → true
firstGroup.add(99);
console.log(firstGroup.has(99));
// → true
firstGroup.delete(99);
console.log(firstGroup.has(99));
// → false
