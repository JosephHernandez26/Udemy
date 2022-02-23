'use strict';

//+++++++++++++++++++++++++++++++++++++++++
// ******* Stacks ************
//+++++++++++++++++++++++++++++++++++++++++

// ** an algorithm example **

visited[start] = true;
while (stack.length) {
  console.log(stack);
  currentVertex = stack.pop();
  result.push(currentVertex);

  this.adjacentList[currentVertex].forEach(neighbor => {
    if (!visited[neighbor]) {
      visited[neighbor] = true;
      stack.push(neighbor);
    }
  });
}
return result;

// ** Stacks Using Arrays **

let stack = [];

stack.push('google'); // first in 
stack.push('youtube');
stack.push('instagram'); // last in

stack.pop() // removes the last thing pushed
// instagram
//stack
//['google', 'youtube']

stack.shift() // another valid way to remove from a stack
// instagram
stack.unshift('amazon'); // pushes a new item into the array
// ['google', 'youtube', 'amazon']

// ** Creating a Stack Class **

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}

// ** Creating a Stack Linked List **

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
  class Stack {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
// Using the Push Method
// ** Colt's Example **
push(value) {
  let newNode = new Node(value);
  if (!this.first) {
    this.first = newNode;
    this.last = newNode;
  } else {
    let tempNode = this.first;
    this.first = newNode;
    this.first.next = tempNode;
  }
  return ++this.size;
  }
  // Using the Pop Method
  // ** Colt's Example **
  pop(value) {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size --;
    return temp.value;
  }
}
// ** My Attempt **
// push(value) {
  //   let newStackNode = new Node(value);
  //   if (stack.length === 0) {
    //     this.first = newStackNode;
    //     this.last = newStackNode;
    //   } else if (stack.length >= 1) {
      //     let currentStackNode = this.newStackNode.value;
      //     currentStackNode = this.first;
      //     currentStackNode.next = newStackNode;
      //     stack.length ++;
      //   }
      //   return this;
      // }
      // ** My Attempt **
      // pop(value) {
        //   if (!this.first) return null;
        //   let tempFirst = this.first;
        //   if (this.size === 1) {
          //     this.first = null;
          //     this.last = null;
          //   } else if (this.size > 1) {
      //     this.first = this.tempNode.next;
      //   }
      //   this.size --; // ** This didnt need to be called outside the scope **
      //   return tempFirst;
      //   }
      // }
