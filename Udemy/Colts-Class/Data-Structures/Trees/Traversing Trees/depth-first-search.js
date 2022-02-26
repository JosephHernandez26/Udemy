'use strict';

//+++++++++++++++++++++++++++++++++++++++++
// ****** Depth First Search (DFS) *******
//+++++++++++++++++++++++++++++++++++++++++

class Node {
  constructor(value) {
    this.value =  value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

//+++++++++++++++++++++++++++++++++++++++++
// ****** DFS Pre Order Method *******
//+++++++++++++++++++++++++++++++++++++++++
// ** Colt's Code **
  DFSPreOrder() {
    let nodeData = [];
    let current = this.root;
    function traverse(node) {
      nodeData.push(node.value);
      if (node.left)traverse(node.left)
      if (node.right)traverse(node.right);
    }
    traverse(current);
    return nodeData;
  }

// ** My Attempt **
  // DFSPreOrder() {
  //   let nodeList = [];
  //   let current = this.root;
  //   function traverse(node) {
  //     nodeList.push(node);
  //   }
  //   current.left.traverse(nodeList.push(value));
  //   current.right.traverse(nodeList.push(value));
  // }
  //   return nodeList;
  //   traverse(current);

//+++++++++++++++++++++++++++++++++++++++++
// ****** DFS Post Order Method *******
//+++++++++++++++++++++++++++++++++++++++++
// ** Colt's Code **
DFSPostOrder(){
  let nodeList = [];
  function traverse(node) {
    if(node.left)traverse(node.left);
    if(node.right)traverse(node.right);
    nodeList.push(node.value);
  }
  traverse(this.root)
  return nodeList;
}

// ** My Attempt **
// DFSPreOrder() {
//   let nodeList = [];
//   let current = this.root;
//   function traverse(node) {
//     if (node.left)traverse(node.left);
//     if (node.right)traverse(node.right);
//     nodeList.push(node.value, current.value);
//   }
//   traverse(current);
//   return nodeList;
// }
}