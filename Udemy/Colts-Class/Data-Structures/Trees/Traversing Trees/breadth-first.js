'use strict';

//+++++++++++++++++++++++++++++++++++++++++
// ******* Breadth First Search ***********
//+++++++++++++++++++++++++++++++++++++++++

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

// ** Colt's Code **
BFS() {
  let nodeData = [];
  let queue = [];
  let newNode = this.root;
  queue.push(newNode);
  while (queue.length) {
    newNode = queue.shift();
    nodeData.push(newNode);
    if (newNode.left) queue.push(newNode.left);
    if (newNode.right) queue.push(newNode.right);
  }
  return nodeData;
}
// ** My Attempt **
// breadthFirst(value) {
//   if (!this.root) return null;
//   let queue = [];
//   let nodesVisited = [];
//   let newNode = new Node(value);
//   newNode = this.root;
//   queue.enqueue(newNode);
//   while (queue != 0) {
//     if (this.left === true) {
//       queue.enqueue(this.left.value);
//       if (this.right === true && this.queue === 1) {
//         queue.enqueue(this.right.value);
//         queue.dequeue(this.left.value);
//         nodesVisited.push(this.left.value);
//         if (this.left === true && this.queue === 1) {
//           queue.enqueue(this.left.value);
//           queue.dequeue(this.right.value);
//           nodesVisited.push(this.right.value)
//         } else if (this.left === false) {
//           return this.root
//         }
//       }
//     }
//   }
//   return nodesVisited;
//   }
}