var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create and object and set it's fallback source to stackMethods
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = -1;
  someInstance.beginning = 0;

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },
  dequeue: function() {
    let result = this.storage[this.beginning];
    delete this.storage[this.beginning];
    this.beginning++;
    return result;
  },
  size: function() {
    let result = Object.keys(this.storage);
    return result.length;
  }
};


