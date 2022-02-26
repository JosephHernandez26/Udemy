# Notes - Colt Steele's Class

## Data Structures

## Trees

![Structure](./../../UMLs/TreeStructure.png)

- Data Structures that consist of Nodes in a Parent/Child relationship.
- Trees are non-linear.
  - There are many paths you can take.
- Nodes do not point to siblings.
- Trees only have one root.

#### **ROOT**

- The top of the tree, there is only one root.

#### **CHILD**

- A Node directly connected to another Node when moving away from the Root.

#### **PARENT**

- The converse notion of a child

#### **SIBLINGS**

- A group of Nodes with the same parent.

#### **LEAF**

- Is a Node with no children.

#### **EDGE**

- The connection between one Node and another.

### The Tree - A Visual

![The Tree](./../../UMLs/tree.png)

### Types of Trees

#### **HTML DOM (Document Object Model)**

![HTML](./../../UMLs/HTML.png)

#### **Network Routing**

![Network](./../../UMLs/network.png)

#### **Artificial Inteligence (AI)**

![AI](./../../UMLs/AI.png)

#### **Abstract Syntax Tree**

![Abstract Syntax Tree](./../../UMLs/abstract.png)

#### **Folders in Operating Systems**

![folders](./../../UMLs/folders.png)

#### **JSON**

## Binary Search Trees (BST)

- Optimized for searching.
  - Each Node can have at most **TWO** children.
  - Sorted in a *specific* way, kept in an order.
  - Used to store data that can be compared, that is sortable.
- Every Node that is *less* than the Parent Node, is **always** located to the **left**.
- Every Node that is *greater* than the Parent Node, is **always** located to the **right**.

![BST](./../../UMLs/BST.png)

#### Creating the BST class

![BST Class](./../../UMLs/BST-Class.png)

#### Creating the Tree

![create the tree](./../../UMLs/tree.png)

### The Insert() Method

![inserting](./../../UMLs/insert.png)

#### Code Example

![insert method](./../../UMLs/insert-method.png)

### Searching a BST (or Find, same same)

![The Search](./../../UMLs/searching-BST.png)

#### Code Example

![search](./../../UMLs/search-code.png)

### BST BIG-O

![BIG-O](./../../UMLs/big-o.png)

#### **Insertion** - **O(log n)**

#### **Searching** - **O(log n)**

![BST BigO](./../../UMLs/BST-bigO.png)

#### **NOTE** The above is **NOT** Guaranteed!

- In the unlikely, though possible, event of a ONE-SIDED search tree and you had to traverse and the tree was 1000 Nodes long (or larger even). Your time complexity would increase with the size of the tree, making the **BIG-O** = **O(n)** which is far from ideal.

![no guarantee](../../UMLs/BST-NoGuarantee.png)

- Ideally, we would want to reassign the root to be one of the larger values and restructure the BST.
- On **Average** the BIG-O is going to be O(log n) for BST's though.

## Traversing the Trees

### Traversal Methods

### Breadth-First-Search (BFS)

- Searching the breadth of the tree, one layer at a time.
  - Working across the tree.
  - starting at the **root**
  - traverse down to **root.left**,
  - then from **root.left** to **root.right**,
  - then down from **root.left** to **root.left.left**,
  - then across to **root.left.right**,
  - then across to **root.right.left**,
  - then across to **root.right.right**...and so on.

![breadth-first](../../UMLs/breadth-first.png)

### BFS - Iteratively

1. First step: Create a queue (this can be an array) and a Variable to store the values of Nodes visited (like a sort of to-do list).
2. Place the Root Node in the queue you created.
3. Loop for as long as there is anything in the queue.
   1. Dequeue (*if using an array - this means shifting*) Node from the queue and push the value of the Node into the variable that you created for Node storage (*the list we are returning at the end*).
   2. If there is a Left property on the Dequeued Node - add it to the queue.
   3. If there is a Right property on the Dequeued Node - add it to the queue.

### BFS Step-By-Step Visual

![BFS](./../../UMLs/BFS.png)

### BFS Code Example

![BFS Code](./../../UMLs/BFS-Code.png)

### Depth First Search (DFS)

- Searching the tree by going down, to the end of the tree.
  - traverse down to the end vertically and then coming back up.
- There are three main ways of utilizing the DFS method:

#### 1. DFS - Pre-Order

1. Create a method called that takes in no arguments `postOrder()`,
2. Create a variable (`nodeData`) to store the **visited** node values (`node.value`)
3. Create a variable (`current`) to store the root value as that is where we will start, ex: `let current = this.root;`,
4. Create a helper function for traversing the BST that takes in a Node: `traverse(node)`,
5. If there is a Node to the left: `if (node.left)`:
     1. **Visit** each Node using the helper function (`traverse()`) to traverse the left side of the BST `traverse(node.left)` and push each Node's value into the `nodeData` variable: `nodeData.push(node.value)`,
     2. Then traverse the BST completing the left side first,
     3. Continue **visiting** all the Nodes and storing their values, until the left side is complete,
6. Then use the helper function to traverse the right side of the BST,
7. Repeat the same operations (i - iii) for the right side of the BST until complete,
8. Invoke the helper function passing the variable `current` in `traverse(current)`,
9. Return the `nodeData` containing the Node values.

![PreOrder](./../../UMLs/PreOrder.png)

#### DFS - Pre-Order Step By Step Visual

![preOrder](./../../UMLs/DFS-preOrder.png)

#### DFS - Pre-Order Code Example

![preOrder-code](./../../UMLs/preOrder-code.png)

#### 2. DFS - Post-Order

- *This is basically the same as PreOrder, with a little order of operations tweak of the code*.

1. Create a method called that takes in no arguments `postOrder()`,
2. Create a variable (`nodeData`) to store the **visited** node values (`node.value`)
3. Create a variable (`current`) to store the root value as that is where we will start, ex: `let current = this.root;`,
4. Create a helper function for traversing the BST that takes in a Node: `traverse(node)`,
5. If there is a Node to the left: `if (node.left)`:
     1. **explore** each Node using the helper function (`traverse()`) to traverse the left side of the BST `traverse(node.left)`,
     2. Then traverse the BST completing the left side first, exploring both the left and right sides of each Node found,
     3. When there is no `node.left` or `node.right` to explore on that Node,
     4. Push the Node's value into the `nodeData` variable: `nodeData.push(node.value)`,
     5. Then return to the Root.
6. Then use the helper function to traverse the right side of the BST,
7. Repeat the same operations (i - iv) for the right side of the BST until complete,
8. Invoke the helper function passing the variable `current` in `traverse(current)`,
9. Return the `nodeData` containing the Node values.

![PostOrder](./../../UMLs/PostOrder.png)

#### DFS - Post-Order Step By Step Visual

![postOrder](./../../UMLs/post-order.png)

#### DFS - Post-Order Code Example

![postOrder-code](./../../UMLs/PostOrder-Code.png)

#### 3. DFS - In-Order

![InOrder](./../../UMLs/inOrder.png)

1. Create a method called that takes in no arguments `InOrder()`,
2. Create a variable (`nodeData`) to store the **visited** node values (`node.value`)
3. Create a variable (`current`) to store the root value as that is where we will start, ex: `let current = this.root;`,
4. Create a helper function for traversing the BST that takes in a Node: `traverse(node)`,
5. If there is a Node to the left: `if (node.left)`:
     1. **explore** each Node using the helper function (`traverse()`) to traverse the left side of the BST `traverse(node.left)`,
     2. Then traverse the BST completing the left side first, exploring both the left and right sides of each Node found,
     3. When there is no `node.left` or `node.right` to explore on that Node,
     4. Push the Node's value into the `nodeData` variable: `nodeData.push(node.value)`,
     5. Then return (up) to the the last Node visited, and push that Node's value.
     6. Traverse to the right of the Node, when there is no `node.left` or `node.right` to explore on that Node,
     7. Push the Node's value and return to the Root,
     8. Push the Root value.
6. Then use the helper function to traverse the right side of the BST,
7. Repeat the same operations (i - vi) for the right (`traverse(node.right)`) side of the BST until complete,
8. Invoke the helper function passing the variable `current` in `traverse(current)`,
9. Return the `nodeData` containing the Node values.

#### DFS - In-Order Step By Step Visual

![InOrder](./../../UMLs/DFS-InOrder.png)

#### DFS - In-Order Code Example (The Verbose Way)

![InOrder-code](./../../UMLs/InOrder-Code2.png)

#### DFS - In-Order Code Example (The Straight Forward Way)

![InOrder-code](./../../UMLs/InOrder-Code1.png)

### BFS vs DFS BIG-O...So Which is better to use?

- Short answer, it depends.
- With regard to time complexity they are the same, we are visit every Node once.
- Space complexity however, it depends on the structure of the tree itself.
- **Remember**, we have a variable where we are storing all this data.
  - more data = more space.

#### BFS BIG-O

![BFS Big-O](./../../UMLs/BFS-BigO.png)

- **Time Complexity** is **O(1)** it is constant.
- **Space Complexity** is **O(n)** as the tree (width) grows, so does the space required to store the data.

#### DFS BIG-O

![DFS Big-O](./../../UMLs/DFS-BigO.png)

- **Time Complexity** is **O(1)** it is constant.
- **Space Complexity** is **O(n)** as the tree (width) grows, so does the space required to store the data.
