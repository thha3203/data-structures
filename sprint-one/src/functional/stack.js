var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = -1;

  // Implement the methods below
  someInstance.push = function(value) {
    counter++;
    storage[counter] = value;

  };

  someInstance.pop = function() {
    delete storage[counter];
    counter--;
  };

  someInstance.size = function() {
    var result = Object.keys(storage);
    return result.length;
  };

  return someInstance;
};