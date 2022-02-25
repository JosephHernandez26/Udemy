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
//}

// ** The search() (or find()) Method **
// ** Colt's Code **
search(value) {
  if (this.root === null) return false; // no root? return false
  let currentValue = this.root; // set variable for the starting value
  let foundNode = false; // set variable to keep track of if found
  while (currentValue && !foundNode) { // while there is something to loop over AND we haven't found the Node
    if (value < currentValue.value) { // if the value is LESS
      currentValue = currentValue.left; // we traverse LEFT
    } else if (value > currentValue.value) { // if value is GREATER
      currentValue = currentValue.right; // we traverse RIGHT
    } else { // otherwise if we found the Node
      foundNode = true; // then we return true and we are done
    }
  }
  return currentValue; // outside of the loop, we want to return the current
}

// ** My Attempt **
// search(value) {
//   if (!this.root) return null; // ** go with false here **
//   let foundNode = this.value; // ** set this to false, we haven't found it, we need to track if we found it
// **let currentValue = this.root** // we need to store the starting value
//   if (this.root === foundNode.value) { // 
//     return foundNode; // 
//   } else { 
//   (this.root != foundNode.value); // 
//   while (this.root.value > foundNode.value === true) { // 
//     if (this.root.right) { // 
//       foundNode = this.root.right; // 
//     } else if (!this.root.right) { // 
//       return this; // ** want the value, not the whole tree
//     }
//     while (this.root.value < foundNode.value === true) { //
//       if (this.root.left) { // 
//         this.left = foundNode // 
//       } else if (!this.root.left) { // 
//         return this; // ** want to return the value not the whole tree
//       }
//     }
//   }
}