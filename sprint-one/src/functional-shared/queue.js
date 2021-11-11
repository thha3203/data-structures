var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = -1;
  someInstance.begin = 0;

  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },
  dequeue: function() {
    let result = this.storage[this.begin];
    delete this.storage[this.begin];
    this.begin++;
    return result;
  },
  size: function() {
    let result = Object.keys(this.storage);
    return result.length;
  }
};


