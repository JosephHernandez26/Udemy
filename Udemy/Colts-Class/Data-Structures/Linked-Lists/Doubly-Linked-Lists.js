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

// ----------------------
// **The Shift() Method**
// ----------------------
// Removes a Node from the **BEGINNING** of the linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList3 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
// ** Corrected Code **
shift() {
  if (this.length === 0) return undefined;
  let oldHead = this.head;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } 
  this.head = oldHead.next;
  this.head.previous = null;
  oldHead.next = null;
  this.length --;
  return oldHead; 
}

// ** My Attempt **
// shift() {
//   let deadHead = this.head; // ** declare this AFTER the edge case
//   if (this.length === 0) return undefined;
//   let deadHead = this.head // ** declare here 
//   if (this.length === 1) {
//     this.head = null;
//     this.tail = null;
//   } else { // ** else is not necessary
//   deadHead.next = this.head;
//   this.head.previous = null;
//   deadHead.next = null;
//   }
//   this.length --;
//   return deadHead;
// }

}

// ----------------------
// **The UN-Shift() Method**
// ----------------------
// inserts a new head at the beginning of the linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
    this.previous = prev;
  }
}

class DoublyLinkedList4 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
// ** Corrected Code **
  unShift(value) {
    let newNode = new Node (value);
    if (!head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length ++;
    return this;
  }
// ** My Attempt **
// unShift(value) {
//   let newNode = new Node (value);
//   if (this.length === 0) {
//     newNode = this.head; // ** not sure if the order matters this.head = newNode;
//     this.tail = newNode; // ** this.tail = NewNode; (this is correct)
//   } else {
//     newNode = this.head.prev;
//     newNode.next = this.head;
//     this.head = newNode;
//   }
//   this.length ++;
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
// **BUT**
// there is a significant improvement we can make using a Doubly Linked List
// that can't be used with a Singly Linked List
// We can work from the END using .prev and work **backwards**.

class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
    this.previous = prev;
  }
}

class DoublyLinkedList5 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
// ** Corrected Code **
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2){
      console.log('WE ARE AT THE START')
      let listCount = 0;
      let currentNode = this.head;
      while (listCount != index) {
        currentNode = currentNode.next;
        listCount ++;
      }
      return currentNode;
    } else {
      console.log('WE ARE AT THE END')
      let listCount = this.length - 1;
      let currentNode = this.tail;
      while (listCount != index) {
        currentNode = currentNode.prev;
        listCount --;
      }
      return currentNode;
    }
  }
  // ** My Attempt **
  // get(index) {
  //   if (index < 0 || index >= this.length) return null;
  //   if (index <= this.length / 2) {
  //     for (i = 0; i < this.length / 2; i++) {
  //       return index[i];
  //     } 
  //   } else {
  //     if (index > this.length / 2) {
  //       for (j = this.length - 1; j < this.length / 2; j--) {
  //         return index[j];
  //       }
  //     }
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
    this.value = value;
    this.next = next;
    this.previous = prev;
  }
}

class DoublyLinkedList6 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
// ** Corrected Code **
  set(index, value) {
    let setNode = this.get(index);
    if (setNode != null) {
      setNode.value = value;
      return true;
    }
    return false;
  }
  // ** My Attempt **
  // set(index, value) {
  //   let setNode = get(index); // ** remember the .this!
  // if (setNode != null) {
  //   setNode = value; // ** remember to reference the setNode's value.
  //   return true;
  // }    
  // return false;
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
  // ** Refactored Corrected Code **
  // insert (index value) {
  //   if (index < 0 || index > this.length) return false;
  //   if (index === 0) return !!this.unshift(value);
  //   if (index === this.length) return !!this.push(value);

  //   let newNode = new Node(value);
  //   let beforeNode = this.get(index - 1);
  //   let afterNode = beforeNode.next;

  //   beforeNode.next = newNode, newNode.prev = beforeNode;
  //   newNode.next = afterNode, afterNode.prev = newNode;
  //   this.length ++;
  //   return true;
  // }
  // **Corrected Code**
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    let newNode = new Node (value);
    let beforeNode = this.get(index -1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length ++;
    return true;
    }
  // ** My Attempt **
  // insert(index, value) {
  //   if (index < 0 || index > this.length) return false;
        // ** declare the variables together AFTER the edge cases (line 402)
  //   let newNode = new Node (index, value) // ** we are just passing the value here
  //   let currentNode = newNode.index - 1; // ** so close put this.get(index -1)
  //   let nextNode = newNode.index + 1; // ** almost make this, currentNode.next
  //   if (index === 0) return this.unShift(currentNode);
  //   if (index === this.length) { // ** didn't need to open brackets here
  //     this.push(newNode);
  //     this.get(currentNode);
  //     currentNode.next = newNode;
  //     newNode.prev = currentNode;
  //     newNode.next = nextNode;
  //     nextNode.prev = newNode;
  //   } // ** brackets not needed
  //   this.length ++;
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
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    let removedNode = this.get(index);
    removedNode.prev.next = removedNode.next; // ** this is just another way to do it
    removedNode.next.prev = removedNode.prev; // ** the way I did it works as well
    removedNode.next = null;
    removedNode.prev = null;
    this.length --;
    return removedNode;
  }
    // ** My Attempt **
// remove(index, value) {
//   if (index < 0 || index >= this.length ) return undefined;
//   if (index === 0) return this.shift(value); // ** no need to pass anything here
//   if (index === this.length - 1) return this.pop(value); // **no need to pass the value 

//   let foundNode = new Node (value); // **only need index here, node already exists
// ** this is how this variable should be declared:
// **let foundNode = this.get(index);
//   let previousNode = foundNode.prev;
//   let nextNode = foundNode.next;

//   this.get(this.foundNode); // ** declared in the variable foundNode
//   nextNode.prev = previousNode;
//   previousNode.next = nextNode;
//   foundNode.next = null;
//   foundNode.prev = null;
//   this.length --;
//   return foundNode;
// }
}