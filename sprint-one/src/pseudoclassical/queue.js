var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = -1;
  this.beginning = 0;
};

Queue.prototype.enqueue = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Queue.prototype.dequeue = function() {
  let result = this.storage[this.beginning];
  delete this.storage[this.beginning];
  this.beginning++;
  return result;
};

Queue.prototype.size = function() {
  let result = Object.keys(this.storage);
  return result.length;
};
