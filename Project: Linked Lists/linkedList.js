console.log('Start...\n\n----------');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if(this.head == null) {

    } else {
      let temp = this.head;
      
      while(temp.nextNode != null) {
        temp = temp.nextNode;
        temp.nextNode = new Node(value);
      }
    }
  }

}

class Node {
  constructor(value) {
    this.value = null;
    this.nextNode = null;
  }
}



const list = new LinkedList();

list.append('First Item');

console.log(list.toString());
console.log("----------\n\nEnd...")