class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = -1;
    this.beginning = 0;
  }

  enqueue(value) {
    this.count++;
    this.storage[this.count] = value;
  }

  dequeue() {
    let result = this.storage[this.beginning];
    delete this.storage[this.beginning];
    this.beginning++;
    return result;
  }

  size() {
    let result = Object.keys(this.storage);
    return result.length;
  }

}
