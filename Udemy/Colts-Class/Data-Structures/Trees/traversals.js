// KNOW THESE KNOW THESE KNOW THESE
// Linked List traversal 
const traverse = (head) => {
  let current = head;
  while(current) {
      console.log(current.value);
      current = current.next;
  }
};

// Binary tree traversal
const traverseBinaryTree = (root) => {
  if(!root) {
      return;
  }
  console.log(root.value);
  traverseBinaryTree(root.left);
  traverseBinaryTree(root.right);
};

//BST traversal
const binarySearchTree = (root, value) => {
  if(!root) {
      return;
  }
  if(root.value === value) {
      return root;
  }
  if(value < root.value) {
      return binarySearchTree(root.left, value);
  }
  if(value > root.value) {
      return binarySearchTree(root.right, value);
  }
}
