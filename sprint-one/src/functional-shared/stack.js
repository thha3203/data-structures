var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = -1;

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },
  pop: function() {
    let result = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return result;
  },
  size: function() {
    let result = Object.keys(this.storage);
    return result.length;
  }
};


