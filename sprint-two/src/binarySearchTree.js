var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var tree = new BinarySearchTree(value);
  if (value > this.value) {
    if (!this.right) {
      this.right = tree;
    } else {
      this.right.insert(value);
    }
  }
  if (value < this.value) {
    if (!this.left) {
      this.left = tree;
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  var result = false;
  if (this.value === value) {
    result = true;
  }
  if (value > this.value && this.right) {
    result = this.right.contains(value);
  }
  if (value < this.value && this.left) {
    result = this.left.contains(value);
  }

  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */