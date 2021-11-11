var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = -1;
};

Stack.prototype.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function() {
  let result = this.storage[this.count];
  delete this.storage[this.count];
  this.count--;
  return result;
};

Stack.prototype.size = function() {
  let result = Object.keys(this.storage);
  return result.length;
};
