console.log("\n1. PRINT THE MANUALLY BUILT LINKED LIST");
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

console.log('\n2. PRINT A READABLE LINKED LIST')
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
  apend(data) {
    let node = new ListNode(data);
    let current = this.root;
    while (current !== null) {
      if (current.next === null) {
        current.next = node;
        node.next = null;
        return;
      }
      current = current.next;
    }
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

  // function to return the head of the linked list
  head() {
    return this.root;
  }

  // function to return the tail of the linked list
  tail() {
    let current = this.root;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    let count = 1;
    let current = this.root;

    if(index > list.length()) {
      return 'Not that many elements in the list';
    }

    if(index === 1) {
      return current;
    }

    while(count < index) {
      count++;
      current = current.next;
    }
    return current;
  }

  pop() {
    let secondToLast = this.at(this.length() - 1);
    secondToLast.next = null;
  }

  contains(value) {
    let current = this.root;

    while(current.next !== null) {
      if(current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    let current = this.root;
    let count = 0;

    if (current.data === value) {
      console.log('Found at index: ' + count );
      return;
    }

    while(current.next !== null) {
      current = current.next;
      count++;
      
      if (current.data === value) {
        console.log('Found at index: ' + count);
        return;
      }
    }
    console.log('Value not found in list.')
    return;
  }
}

console.log('\n3. PRINT PREPEND VALUES USING toString()');
console.log("--------------------------------------");

// Let prepend a few items to create a list and then print the list and length

let list = new LinkedList();
console.log('...prepending 5, 545, and 34 to the list');
list.prepend(5);
list.prepend(545);
list.prepend(34);

console.log(list.toString());
console.log('Length of this list: ' + list.length());

// Appending a value and printing the new linked list
console.log('\n4. PRINT LINKED LIST WITH APPENDED VALUES');
console.log("--------------------------------------");

console.log('...apending 77 to the list and printing...');

list.apend(77);

console.log(list.toString());
console.log('Length of this list: ' + list.length());

// Print only the head element of the list
console.log('\n5. PRINT THE HEAD ELEMENT OF THE LINKED LIST')
console.log("--------------------------------------");

console.log('...printing the head element...\n');
console.log(list.head());

// Print only the tail element of the list
console.log('\n5. PRINT THE TAIL ELEMENT OF THE LINKED LIST')
console.log("--------------------------------------");

console.log('...printing the tail element...');
console.log(list.tail());

// Print the nth node of the linked list
console.log('\n6. PRINT THE NTH ELEMENT OF THE LINKED LIST')
console.log("--------------------------------------");
console.log(list.toString());
console.log();


console.log('...printing the 1st element...');
console.log(list.at(1));

console.log('\n...printing the 4th element...');
console.log(list.at(4));

console.log('\n...printing the 5th element...')
console.log(list.at(5))

// Remove the last element from the list
console.log('\n7. REMOVE THE LAST ELEMENT FROM THE LIST')
console.log("--------------------------------------");
console.log('The current list is: ');
console.log(list.toString());
console.log();

list.pop();

console.log('\nThe new list is: ');
console.log(list.toString());

// Contains a value
console.log('\n8. CHECK FOR A VALUE IN THE LIST')
console.log("--------------------------------------");
console.log('The current list is: ');
console.log(list.toString());
console.log();

console.log("\nSearching for the number 100: " + list.contains(100));
console.log("Searching for the number 545: " + list.contains(545));

// Contains a value
console.log('\n9. SEARCH FOR VALUE AND RETURN INDEX')
console.log("--------------------------------------");
console.log('The current list is: ');
console.log(list.toString());
console.log();

list.find(5);

























