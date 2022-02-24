'use strict';

//+++++++++++++++++++++++++++++++++++++++++
// ******* Binary Search Trees ************
//+++++++++++++++++++++++++++++++++++++++++

// ** Creating the BST Class **

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() { // <-- this could take a value if necessary
    this.root = null;
  }


// ** Creating the Tree **

// let tree = new BinarySearchTree();
// this.root = new Node(13);
// this.right = new Node(26);
// this.left = new Node(6);
// this.root.right = new Node(10);
// this.root.left = new Node(4);

// ** The Insert() Method **

// ** Colt's Code **
insert(value) {
  let newNode = new Node(value);
  if (this.root === null) {
    this.root = newNode;
    return this;
  } else {
    let currentRoot = this.root;
    while (true) {
      if (value < currentRoot.value) {
        if (currentRoot.left === null) {
          currentRoot.left = newNode;
          return this;
        } else {
          currentRoot = currentRoot.left;
        }
      } else if (value > currentRoot.value) {
        if (currentRoot.right === null) {
          currentRoot.right = newNode;
          return this;
        } else {
          currentRoot = currentRoot.right;
        }
      }
    }
  }
}
// ** My Attempt **
// insert(value) {
//   let newNode = new Node(value);
//   if (!this.root) return this.root = newNode;
//   if (this.root.value > newNode.value && !this.root.left) {
//     this.root.left = newNode;
//     return this;
//   } else if (this.root.right.value < newNode.value && !this.root.right) {
//     this.root.right = newNode;
//     return this;
//   }
}

// ** The find() or search() Method **

// ** Colt's Code **
// ** My Attempt **