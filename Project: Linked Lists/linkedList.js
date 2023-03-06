console.log("\nPRINT THE MANUALLY BUILT LINKED LIST");
console.log("--------------------------------------")
// There will be two classes to a linked list

// The first class will be the node class which holds the information
// for each individual link

// This class is simple and models the node
// This class does not have methods in it.

class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// We can then create individual objects (nodes) using this class and add
// data to them

let n1 = new ListNode(34);
let n2 = new ListNode(89);
let n3 = new ListNode(135);

// We can then also add the pointer to the next linked object in the list

n1.next = n2;
n2.next = n3;

// At this point we can print our linked list

console.log(n1);

// We can create a function that will print the linked list using only their values:

function printList(node) {
  let current = node;
  while (current != null) {
    console.log(current.data);
    current = current.next;
  }
}

console.log('\nPRINT A READABLE LINKED LIST')
console.log("--------------------------------------")
console.log(printList(n1));


// This class represents the entire list of nodes
// This class has a property 'root' that represents only the first node in the list
// This class has methods that operate over the list from root

class LinkedList {
  constructor() {
    this.root = null;
  }

  // Add a value to the front of the list
  prepend() {

  }

  // Add  value to the end of the list
  apend() {

  }

  // Return the size of the list
  length() {

  }

  // Return a string, representing the list
  toString() {
    
  }
}
















































