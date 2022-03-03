'use strict';

//+++++++++++++++++++++++++++++++++++++++++
// ******* Binary Heaps ***********
//+++++++++++++++++++++++++++++++++++++++++


//+++++++++++++++++++++++++++++++++++++++++
// ******* Insert and Bubble Up Methods ***********
//+++++++++++++++++++++++++++++++++++++++++


class MaxBinaryHeap { // Define the class
  constructor() {
    this.values = []; // this.values is an empty array
  }
  // ** Cole's Code
  insert(element) { // insert method takes an element
    this.values.push(element); // and pushes it to the end of the values array
    this.bubbleUp(); // then we call our bubble up method
  }
  bubbleUp() { // define the bubble up logic
    let index = this.values.length - 1; // set a variable for the index
    // it will be at the end (length of the array minus 1)
    const element = this.values[index]; // this won't change, so I used Const
    // the variable if the index of the element
    while (index > 0) { // now we loop, while the index is more than zero
      let parentIndex = Math.floor((index -1) / 2); // Identifies the parent's index location
      let parent = this.values[parentIndex]; // this stores the parent's current value
      if (element <= parent) break; // if the inserted element is less than the parent value, STOP
      // if the inserted element's value is GREATER than the parent 
        this.values[parentIndex] = element; // we SWAP by placing the element where the parent was
        this.values[index] = parent; // and the parent where the element was
        index = parentIndex; // then we make the new index, the parent index
        // ** ^eliminates a forever loop^ **
    }
  }
}
// ** My Attempt
// insert(value) {
  // value.push(value)
  // }
  // bubbleUp(index, value) {
    //   let index = values.length - 1;
    //   let parentIndex = Math.floor((index - 1) / 2);
    //   while (parentIndex.value < index.value) {
      //     parentIndex.value = index;
      //     index.value = parentIndex.value
      //   }
      //   return this;
      // }
      let heap = new MaxBinaryHeap(); // instantiating the new heap
      heap.insert(66); // the element we are pushing in
      

//+++++++++++++++++++++++++++++++++++++++++
// ******* Insert and Bubble Up Methods ***********
//+++++++++++++++++++++++++++++++++++++++++

class MaxBinaryHeap2 { // Define the class
  constructor() {
    this.values = []; // this.values is an empty array
  }
  // ** Cole's Code
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let rightChild, leftChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !==null && rightChild>leftChild)
          ){
            swap = rightChildIndex;
        }
        if (swap === null) break;
        this.values[index] = this.values[swap];
        this.values[swap] = element;
        index = swap;
      }
    }
  }
  }
  // ** My Attempt
  // extractMax() {
  //   let current = this.values.root;
  //   let element = this.values.length - 1;
  //   current = element; 
  //   this.values.pop(current);
  //   while (this.values > 0) {
  //     let parentIndex = Math.floor((current[index] * 2) + 1)
  //     if (parentIndex >= current || current + 2) break;
  //     if (parentIndex <= current) {
  //       this.values[current] = parentIndex
  //     } else if (parentIndex <= current +2) {
  //       this.values[current + 2] = parentIndex;
  //     }
  //   }
  //    return current;
  // }
