var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value);
      while (list.tail.next) {
        list.tail = list.tail.next;
      }
    }
  };

  list.removeHead = function() {
    var newHead = list.head.next;
    var deleted = list.head.value;
    delete list.head;
    list.head = newHead;

    return deleted;
  };

  list.contains = function(target) {

    var find = function(node) {
      var result = false;

      if (node.value === target) {
        result = true;
      } else if (node.next) {
        result = find(node.next);
      }

      return result;
    };

    return find(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;

};

/*
 * Complexity: What is the time complexity of the above functions? O(1) for adding and removing and O(n) for .contains
*/