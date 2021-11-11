class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = -1;
  }

  push(value) {
    this.count++;
    this.storage[this.count] = value;
  }

  pop() {
    let result = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return result;
  }

  size() {
    let result = Object.keys(this.storage);
    return result.length;
  }

}