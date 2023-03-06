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

  // Return true or false if there are any nodes in the list
  // O(1) constant time
  isEmpty() {
    return this.root === null;
  }

  // Add a value to the front of the list
  // Big O of prepend() is O(1)
  prepend(data) {
    let node = new ListNode(data);
    node.next = this.root;
    this.root = node;
  }

  // Return a string, representing the list
  // Big O of toString() is O(N) linear time (takes as long to execute as there
  // are items in the list)
  toString() {
    let result = 'root -> ';
    let current = this.root;
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }

    return result + " null";
  }

  // Add  value to the end of the list
  apend() {

  }

  // Return the size of the list
  // O(N) linear time
  length() {
    let current = this.root;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }


}

console.log('\nPRINT APPENED VALUES USING toString()')
console.log("--------------------------------------")

// Let prepend a few items to create a list and then print the list and length

let list = new LinkedList();
list.prepend(5);
list.prepend(545);
list.prepend(34);
list.prepend(483);

console.log(list.toString());
console.log('Length of this list: ' + list.length());














































