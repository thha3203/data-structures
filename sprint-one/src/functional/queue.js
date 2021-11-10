var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = -1;
  var beginning = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter++;
    storage[counter] = value;
  };

  someInstance.dequeue = function() {
    let result = storage[beginning];
    delete storage[beginning];
    beginning++;
    return result;
  };

  someInstance.size = function() {
    let result = Object.keys(storage);
    return result.length;
  };

  return someInstance;
};
