var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var key = {
    exist: false,
    i: null
  };

  if (!this._storage[index]) {
    this._storage[index] = [[k, v]];
  }

  this._storage[index].some(function(pair, indx) {
    if (pair[0] === k) {
      key.exist = true;
      key.i = indx;
    }
    return pair[0] === k;
  });

  if (key.exist) {
    this._storage[index][key.i] = [k, v];
  } else {
    this._storage[index].push([k, v]);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;
  this._storage[index].forEach(pair => {
    if (pair[0] === k) {
      result = pair[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index] = this._storage[index].filter(pair => pair[0] !== k);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

