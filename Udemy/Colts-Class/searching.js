'use strict';

//-----------------
// **** Linear Search ****
//-----------------

//const rides = ['4Runner', 'Tacoma', 'Limited', 'TRD PRO'];
// array linear search
function arraySearch(arr, value) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i
    }
  }
  return -1;
}
arraySearch([1, 3, 5, 7, 9], 5);
//OUTPUT: 2
// O(n) - it is linear 

// Binary Search
// divide and conquer the array

function binarySearch(arr, element) { // first declare the function w/ params = array, and element
  let start = 0;// set the start
  let end = 6; // set end
  let mid = Math.floor((start + end) / 2); // set mid by finding the average between start & end. Math.floor for whole #s
  //console.log(start, mid, end);// for verification
  // 0, 3, 6
  while (arr[mid] !== element) {
    if (element < arr[mid] && start <= end) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  console.log(start, mid, end);// for verification again
}
binarySearch([2, 5, 89, 3, 7, 6, 4], 7)
// [2, 5, 89, 3, 7, 6, 4]
//  S        M         E
// iteration 2
// [2, 5, 89, 3, 7, 6, 4]
//            S     M  E
//DRY Version
function binarySearch(arr, element) { // first declare the function w/ params = array, and element
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== element && start <= end) {
    if (element < arr[middle]) end = middle -1;
    else start = middle +1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === element ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 30);


