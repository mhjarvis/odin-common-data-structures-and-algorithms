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
































/* console.log('Start...\n\n----------');

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    if(this.head == null) {
      this.prepend(value);
    } else {
      let temp = this.head;
      
      while(temp.nextNode != null) {
        temp = temp.nextNode;
        temp.nextNode = new Node(value);
      }
    }
  }

  prepend(value) {
    let temp = null;

    if(this.head != null) {
      temp = this.head;
    }

    this.head = new Node(value);
    this.head.nextNode = temp;
  }

}

/********* LIST NODE *********
class Node {
  constructor(data) {
    this.data = null;
    this.next = null;
  }
}

let node1 = new Node(2);
let node2 = new Node(5);
node1.next = node2;

let list = new LinkedList(node1);

console.log(list)
console.log(list.head.next.data);



console.log("----------\n\nEnd...") */