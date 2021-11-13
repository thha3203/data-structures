var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {

  var result = false;
  var find = function(node) {
    if (node.value === target) {
      result = true;
      return;
    }
    if (node.children.length > 0) {
      node.children.forEach(function(child) {
        find(child);
      });
    }
  };
  find(this);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions? adding : O(1) contains: O(nSquared)
 */