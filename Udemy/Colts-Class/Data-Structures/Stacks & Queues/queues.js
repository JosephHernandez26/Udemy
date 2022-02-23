'use strict';

//+++++++++++++++++++++++++++++++++++++++++
// ******* Queues ************
//+++++++++++++++++++++++++++++++++++++++++

// Creating a Class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}

// **Queues Using Arrays**

let queue = [];
// Add to the end
queue.push('first');
queue.push('second');
queue.push('third');
// ['first', 'second', 'third']
// Remove from the beginning
queue.shift()
// ['second', 'third']
// Add to the beginning
queue.unshift('Uno');
// ['Uno', 'second', 'third']
// Remove from the end
queue.pop();
// ['Uno', 'second']


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

//+++++++++++++++++++++
// ** Enqueue Method **
//+++++++++++++++++++++
// ** My Attempt **
enqueue(value) {
  let queuedNode = new Node(value);
  if (!this.first) {
    this.first = queuedNode;
    this.last = queuedNode;
  } else {
    this.last.next = queuedNode;
    this.last = queuedNode;
  }
  return ++this.size; 
}
//+++++++++++++++++++++
// ** Dequeue Method **
//+++++++++++++++++++++
// ** My Attempt **
dequeue() {
  if (!this.first) return null;
  let firstQueued = this.first;
  if (this.first === this.last || this.size === 1) {
    this.last = null;
  }
  this.first.next = this.first;
  this.size --;
  return firstQueued.value;
  }
}
