console.log("----- LINKED LIST -----\n");
// There will be two classes to a linked list

// The first class will be the node class which holds the information
// for each individual link

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

// At this point we have a linked list

console.log(n1);
















