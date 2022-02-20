'use strict';

//+++++++++++++++++++++++++++++++++++++++++
// ******* Singly Linked-Lists ************
//+++++++++++++++++++++++++++++++++++++++++

// A data structure that contains a head, tail, and length property
// Linked lists consist of Nodes
// Each Node has a value and a pointer
// A pointer or value to another Node or Null
// Like a bunch of train cars connected

// Node
// - stores a piece of data or a value
// - each Node either points to another node
//  - or if there is no Node - null.

//+++++++++++++++++++++++++++++++++++++++++
// ** Singly Linked-List Simple Example **
//+++++++++++++++++++++++++++++++++++++++++

class Node { // defines the class Node
  constructor(value) { // the value represents a piece of data
    this.value = value;
    this.next = null; // next is how you traverse, right now it is null
  }
}

let firstNode = new Node('Hey');
firstNode.next = new Node('there');
firstNode.next.next = new Node('friend')
firstNode.next.next = new Node('!!')

//+++++++++++++++++++++++++++++++++++++++++
// ** Improved Example **
//+++++++++++++++++++++++++++++++++++++++++

class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor(){

  }
}

let list = new SinglyLinkedList()
list.push('LETS')
list.push('GO!!')

//+++++++++++++++++++++++++++++++++++++++++
// ** Adding Methods**
//+++++++++++++++++++++++++++++++++++++++++
// **The Push() Method**
// ----------------------
// adds a new Node to the end of the list

class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0
  }
  push(value) {
    let newNode = new Node(value);
    // My first attempt
  //   if (this.head === null && this.tail === null) {
  //     this.head = newNode;
  //     this.tail = newNode;
  //     this.length = length ++;
  //   } else if (this.tail != null && this.tail != newNode) {
  //     this.next = newNode;
  //     this.length = length ++;
  //   }

    // The corrected code:
    if (!this.head) { // if there is no head
      this.head = newNode; // set the head to newNode value
      this.tail = this.head; // and also set the tail
    } else { //otherwise if the tail has a value and is not null
      this.tail.next = newNode; // set the next prop to newNode
      this.tail = newNode; // and set the tail to newNode
    }
    this.length++; // add one to the list length
    return this; // return the list
    
  }
}

let list = new SinglyLinkedList()
// list.push('LETS')
// list.push('GO!!')


// ----------------------
// **The Pop() Method**
// ----------------------
// Removes a Node from the end of the linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
  }
}
class SinglyLinkedList2 {
  constructor() {
    this.head = null;
    this.tail = null; 
    this.length = 0
  }
  // corrected code:
  pop() {
    if (!this.head) return undefined; //if there is no head there is no list
    // at the beginning, both variables will be set to the head
    let currentNode = this.head; // first node up equals head
    let newTailNode = currentNode; // new tail (trailing current as we traverse) will be equal to current
    while (currentNode.next) { // while the currentNode is something
      newTailNode = currentNode; // the new tail is equal to what currentNode was 
      currentNode = currentNode.next; // the currentNode moves one forward to next
    }
    // if there is nothing to traverse to
    this.tail = newTailNode; // this.tail becomes the newTail node
    this.tail.next = null; // the connection to currentNode (which is equal to the old tail) is severed (the arrow is cut)
    this.length--; // and the length is decremented by one
    // if we pop the last item we need to verify the list is empty and reset the head&tail to null
    if (this.length === 0) { // if the length of the list is 0
      this.head = null; // then head is set to null
      this.tail = null; // and tail is set to null
      console.log('you yeeted everything!');
    }
    return currentNode; // this returns the node that was removed
  }
  // My attempt - got stuck
  // pop() {
  //   let secondToLast = this.head;
  //   let lastNode = this.next;
  //   while (this.next != null) {
  //     this.head = secondToLast;
  //     this.next = lastNode;
  //   }
  // }
}

// ----------------------
// **The Shift() Method**
// ----------------------
// Removes a Node from the beginning of the linked list

class Node {
  constructor (value) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList3 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0
  }
// Corrected Code
shift() {
  if (!this.head) return undefined;
  let currentHead = this.head;
  this.head = currentHead.next;
  this. length--;
  return currentHead;
}
// My attempt
shift() {
  if (!this.head) return undefined;
  let deadHead = this.head;
  let newHead = deadHead;
  if (newHead === this.next) {
    this.head = newHead;
    this.next = null
  }
  return deadHead;
  }
}
