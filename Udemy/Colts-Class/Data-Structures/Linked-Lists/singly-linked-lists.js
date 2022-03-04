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
// ******* Singly Linked-Lists BIG-O ************
//+++++++++++++++++++++++++++++++++++++++++

// Insertion = O(n) // takes constant time, regardless of the length of the list
// Removal = can either be O(1) or O(n)
//  - if removing from the beginning, its constant time
//  - if from the end, involves list iteration which is O(n)
// Searching = O(n) // as the list grows, so grows the number of operations
// Access = O(n) // as the list grows, so grows the number of operations

// Singly Linked Lists excel at insertion and deletion at the beginning vs arrays!

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
// ** Another Example **
//+++++++++++++++++++++++++++++++++++++++++

// 10-->5-->16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: {
//           value: null;
//         }
//       }
//     }
//   }
// }



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
    
    // **The Corrected Code:**
    if (!this.head) { // if there is no head
      this.head = newNode; // set the head to newNode value
      this.tail = this.head; // and also set the tail
    } else { //otherwise if the tail has a value and is not null
      this.tail.next = newNode; // set the next prop to newNode
      this.tail = newNode; // and set the tail to newNode
    }
    this.length++; // add one to the list length
    return this; // return the list
    
    // **My attempt**
  //   if (this.head === null && this.tail === null) {
  //     this.head = newNode;
  //     this.tail = newNode;
  //     this.length = length ++;
  //   } else if (this.tail != null && this.tail != newNode) {
  //     this.next = newNode;
  //     this.length = length ++;
  //   }
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
  // **Corrected Code:**
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
  // **My attempt - got stuck**
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
// **Corrected Code**
shift() {
  if (!this.head) return undefined; // if there is no head there is no list - return undefined
  let currentHead = this.head; // both the variable and the current head
  this.head = currentHead.next; // will start in the same place
  this. length--; // decrement length
  if (this.length === 0) { // an edge case check
    this.tail = null;
  }
  return currentHead;
}
// **My attempt**
// shift() {
//   if (!this.head) return undefined;
//   let deadHead = this.head;
//   let newHead = deadHead;
//   if (newHead === this.next) {
//     this.head = newHead;
//     this.next = null
//   }
//   return deadHead;
//   }
}

// ----------------------
// **The UN-Shift() Method**
// ----------------------
// inserts a new head at the beginning of the linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
  }
}
class SinglyLinkedList4 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // **Corrected code**
  unShift(value) {
    let newNode = new Node(value); // **dont forget this syntax for creating a new Node**
    if (!this.head) { // this is checking to see if there is no head
      this.head = newNode;
      this.tail = this.head;
    } else { // this covers the edge case and ensures the below only runs when the list isn't empty
      // without the else, the next and the head will assign the new value forever
      newNode.next = this.head; // points the newNode at the current Head
      this.head = newNode; // this updates the head value with the newNode value
    } // the below is outside the else and if, because the return is expected regardless
    this.length ++; // increment the list by one
    return this; //returns the whole list
  }
  // **My attempt**
  // unShift(value) {
  //   let newNode = value;
  //   if (!this.head) {
  //     this.head === newNode && this.head === this.tail;
  //   } else {
  //     let currentHead = this.head;
  //     newNode = currentHead;
  //     newNode = this.head;
  //     list.length ++;
  //   }
  //   return this;
  // }
}

// ----------------------
// **The Get() Method**
// ----------------------
// Retrieves a Node by its position in the Linked List
// it takes a number, index position, and returns that value.
// More importantly it takes in the number, traverses that many times,
// and returns the value at that index

class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
  }
}
class SinglyLinkedList5 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // ** Corrected Code**
  get(index) {
    if (index < 0 || index >= this.length) return null; // if index is < 0 or index >= list length, return null
    let listCounter = 0; // start the counter count at zero
    let currentIndex = this.head; // set the current index (presently at position zero) to the head value
    while (listCounter !== index) { // while the counter does not equal the index value
      currentIndex = currentIndex.next; // set the current index to next
      counterIndex ++; // increment the counter by one
    }
    return currentIndex; // return the current index when the desired index value is reached
  }
  // **My Attempt**
  // get(index) {
  //   if (index < 0 || index >= this.length) return null;
  //   for (i = 0; i <= index; i++) {
  //     return index[i];
  //   }
  // }
}

// ----------------------
// **The Set() Method**
// ----------------------
// Changing the value of a Node based on its position in the linked list
// Accepts a position/index and a value

class Node {
  constructor(value) {
    this.next = next;
    this.value = value;
  }
}

class SinglyLinkedList6 {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null
  }
  // **Corrected Code**
  set(index, value) { // set takes in an index and a value
    let foundNode = this.get(index); // we declare the found Node and get() will grab the index position
    if (foundNode) { // if we have the correct node found
      foundNode.value = value; // set the found node to its value
      return true; // and return true
    } // else is not needed because it is an either or situation it is either true or false
    return false; // if none of the above occurred, return false
  }
  // **My Attempt**
  // set(index, value) {
  //   let setNode = new Node(index, value);
  //   let foundNode = value;
  //   let setNode = foundNode;
  //   if (!setNode) {
  //   return false; 
  // } else {
  //   setNode === foundNode;
  // }
  // return true;
  // }
}

// ----------------------
// **The Insert() Method**
// ----------------------
// Adds a new Node to the linked list at a specific position (index)
// Accepts a position (index) and a value

class Node {
  constructor(value) {
    this.next = next;
    this.value = value;
  }
}

class SinglyLinkedList7 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // **Corrected Code**
  insert(index, value) {
    if (index < 0 || index > this.length) return false; //if index < 0 OR > the list length, return false
    if (index === this.length) return this.push(value); // if index is equal to list length, push the value
    if (index === 0) return this.unShift(value); // if index is equal to 0, unshift the value
    
    let insertedNode = new Node(value); // creates a new node and passes the value
    let previousValue = this.get(index -1); // sets the previous node to a variable
    // then uses the get method to retrieve the node at index position minus one (previous)
    let tempNode = previousValue.next // we dont want to delete the node when we insert the new one
    // so we need to create a temp variable for the value of the node in the .next position
    previousValue.next = insertedNode; // setting the new node to the previous node .next
    insertedNode.next = tempNode; // and setting the new Node's .next value to the Node that used to come after the previous Node
    this.length ++; // increment the list length by one
    return true; // return true because it worked

  }
  // **My Attempt**
  // insert(index, value) {
  //   let currentNode = this.get(index);
  //   let insertedNode = value;
  //   if (index < 0 || index > this.length) {
  //     return false;
  //   }
  //   if (index === this.length) {
  //     push(insertedNode);
  //     this.next = currentNode;
  //     this.tail = insertedNode;
  //   } else if (index === 0) {
  //     unshift(insertedNode)
  //     insertedNode = this.head;
  //     this.head = this.next;
  //   } else {
  //     get(currentNode, index -1);
  //     this.next = insertedNode;
  //     insertedNode = currentNode;
  //     this.length ++;
  //   }
  //   return true;
  // }
}

// ----------------------
// **The Remove() Method**
// ----------------------
// Removing a Node from the linked list at a specific position (index).
// Accepts an index.

class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList8 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // ** Corrected Code **
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length -1) return this.pop();

    let previousNode = this.get(index -1); // retrieves the node, one before, what we want to remove
    let removedNode = previousNode.next; // This will store the value of the Node we want to remove
    previousNode.next = removedNode.next; // with the desired node stored this sets
    // the previous Node's .next to the removed Node's .next.
    this.length --; // decrement our list by one
    return removedNode; // and return the value of the removed node
  }

  // ** My Attempt **
  // remove(index) {
  //   if (index < 0 || index > this.length) return undefined;
  //   if (index === this.length -1) return pop(index); // ** dont forget to reference the list with 'this'
  //   if (index === 0) return shift(index); // ** dont forget to reference the list with 'this'

  //   let removedNode = new Node(index -1); // ** creating a whole new Node was not necessary
  //   let nextNode = index +1; // ** this wasn't needed, overthinking it again
  //   if (removedNode === this.length -1) {
  //     get(index, value); // ** dont forget to reference the list with 'this'
  //     removedNode.next = nextNode;
  //     nextNode.next = nextNode;
  //     this.length --;
  //   }
  //  return removedNode;
  // }
}

// ----------------------
// **The Reverse() Method**
// ----------------------
// Reversing the linked list **IN PLACE**.
// No arguments needed

class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList9 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // ** Corrected Code **
  reverse() {
    let newHeadNode = this.head; // this is how you swap the head and the tail
    this.head = this.tail;
    this.tail = newHeadNode; 
    let nextNode; // this is just for storage
    let previousHeadNode = null; // we need to make sure that the end of our list, 
    // the tail.next IS null

    for (let i = 0; i < this.length; i++ ) {
      nextNode = newHeadNode.next; // storing the next node so we dont lose it
      newHeadNode.next = previousHeadNode; // the current node's .next is now the previous head node
      previousHeadNode = newHeadNode; // previous becomes what the current node used to be
      newHeadNode = nextNode; // current node now equals the next node
    }
    return this; // return the new revered list
  }
  print() { // This whole method is solely for testing so we can see the order of the list
    let arr = []; // as things change - it is helpful, but not necessary
    let currentHeadNode = this.head;
    while(currentHeadNode) {
      arr.push(currentHeadNode.value);
      currentHeadNode = currentHeadNode.next;
    }
    console.log(arr); // displays the list as an array
  }
  // ** My Attempt **
  // reverse() {
  //   let newHeadNode = this.head;
  //   let previousHeadNode = this.tail;
  //   let nextNode = this.next;
  //   for (i = 0; i < this.length; i++) {
  //     newHeadNode[i] = previousHeadNode;
  //     previousHeadNode.next = newHeadNode;
  //     nextNode = newHeadNode.next;
  //   }
  //   return this;
  // }
}

