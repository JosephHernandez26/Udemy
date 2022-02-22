'use strict';

//+++++++++++++++++++++++++++++++++++++++++
// ******* Doubly Linked-Lists ************
//+++++++++++++++++++++++++++++++++++++++++

// A data structure that contains a head, tail, and length property
// Linked lists consist of Nodes
// Each Node has a value and a pointer
// A pointer or value to another Node or Null
// Like a bunch of train cars connected

// **BUT**

// Doubly linked lists have an additional pointer that points to the next Node AND the previous Node

// With DLL you can start at the end and iterate backwards using .previous
// A DDL is bidirectional which is fun.

//+++++++++++++++++++++++++++++++++++++++++
// ******* Doubly Linked-Lists BIG-O ************
//+++++++++++++++++++++++++++++++++++++++++

// Insertion = O(n) // takes constant time, regardless of the length of the list
// Removal = can either be O(1) or O(n)
//  - if removing from the beginning, its constant time
//  - if from the end, involves list iteration which is O(n)
// Searching = O(n) // as the list grows, so grows the number of operations
// Access = O(n) // as the list grows, so grows the number of operations

// Singly Linked Lists excel at insertion and deletion at the beginning vs arrays!

//+++++++++++++++++++++++++++++++++++++++++
// **The Push() Method**
// ----------------------
// adds a new Node to the end of the list

class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // ** Corrected Code **
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length ++;
    return DoublyLinkedList;
  }
  // ** My Attempt **
  // push(value) {
  //   let newNode = new Node (value);
  //   if (this.head === null) {
  //     this.head = newNode; 
  //     this.tail = this.head;
  //     newNode.previous = this.tail;
  //     this.tail = newNode;
  //     this.length ++;
  //   }
  //   return DoublyLinkedList;
  // }

}

// ----------------------
// **The Pop() Method**
// ----------------------
// Removes a Node from the end of the linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head =  null;
    this.tail = null;
    this.length = 0;
    
  }
// ** Corrected Code **
  pop() {
    if (!head) return undefined // in the event the list is empty
    let poppedNode = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null; // both lines need to be severed next
      poppedNode.prev = null; // and previous
    }
    this.length --;
    return poppedNode;
  }
// ** My Attempt **
  // pop() {
  //   if (this.length === 0) return undefined; // **dont forget this
  //   let currentTail = this.tail;
  //   if (this.length === 1) {
  //     this.head = null;
  //     this.tail = null;
  //   } else {
  //     let newTail = new Node(value); // **this was not necessary**
  //     this.tail = this.prev;
  //     this.tail.prev = null; // **should be: this.tail.next = null;
  //     newTail.next = null; // ** should be: newTail.prev = null;
  //     this.length --; // **this needs to be outside the function scope
  //   }
  // **decrement here:
  //   this.length --;
  //   return currentTail;
  // }
}

