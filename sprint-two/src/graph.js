

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {
    value: node,
    edges: []
  };
  this.storage[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  let result = false;
  if (this.storage[node] && this.storage[node].value === node) {
    result = true;
  }
  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.storage[node].edges.forEach(edge => this.removeEdge(node, edge));
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let result = false;
  if (this.storage[fromNode].edges.includes(toNode)) {
    result = true;
  }
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  let currentFromNode = this.storage[fromNode];
  currentFromNode.edges.push(toNode);
  let currentToNode = this.storage[toNode];
  currentToNode.edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let currentFromNode = this.storage[fromNode];
  let currentToNode = this.storage[toNode];
  currentFromNode.edges = currentFromNode.edges.filter(edge => edge !== toNode);
  currentToNode.edges = currentToNode.edges.filter(edge => edge !== fromNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(parseInt(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



