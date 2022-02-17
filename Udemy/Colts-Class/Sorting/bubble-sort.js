'use strict';

//----------------
// ** SORTING **
//----------------

// sorting an array
// function sort(arr) {
//   return arr
// }
// sort([23,56,41,79,66,5]);

function numberCompare(num1, num2) {
  return num2 - num1;
}
[6,4,5,15,2].sort(numberCompare);
// (5) [15, 6, 5, 4, 2]

// Bubble Sort
// swapping

// old way
function swap(arr, idx1, idx2) {
  let temporaryVariable = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temporaryVariable;
} 
// ES6 way
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// **bubble sort exercise**
// define a function called bubbleSort
// loop over the array w/ variable i (end of the arr towards beginning)
// start inner loop w/ variable j (beginning of arr towards the beginning, i-1)
// if arr[j] is > arr[i], swap the values
// return sorted array

// function bubbleSort(arr) {
//   for (i = arr.length; i < 0; i--) {
//     for (j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[i]);
//       if (arr[j] > arr[i]) {
//         let tempVariable = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tempVariable;
//       }
//     }
//   }
// return arr;
// }
// bubbleSort([26,66,87,4,33,2]);
// **working version**
function bubbleSort(arr) {
  for (i = arr.length; i > 0; i--) { // starting back to front 
    for (j = 0; j < i - 1; j++) { // starting front to back 
      console.log(arr, arr[j], arr[j+1]);
      if (arr[j] > arr[j+1]) { // if j is bigger than j+1... 
        let tempVariable = arr[j]; // j is now the temp variable 
        arr[j] = arr[j + 1]; // now the new j is j+1
        arr[j + 1] = tempVariable; // and j+1 is the new temp
      } // j is now at the end of the array
      // [-5,26,66,87,4,18,33,2,99]
      // next pass = arr[i] = -5, arr[j] = 26 (-5, 26)
      // [-5,26,66,4,18,33,2,87,99]
      // next pass = arr[i] = -5, arr[j] = 26 (-5, 26)
      // [-5,26,4,18,33,2,66,87,99]
      // next pass = arr[i] = -5, arr[j] = 26 (-5, 26)
      // [-5,4,18,26,2,33,66,87,99]
      // next pass = arr[i] = -5, arr[j] = 26 (-5, 4)
      // [-5,4,18,2,26,33,66,87,99]
      // next pass = arr[i] = -5, arr[j] = 26 (-5, 4)
      // [-5,4,2,18,26,33,66,87,99]
      // next pass = arr[i] = -5, arr[j] = 26 (-5, 4)
      // [-5,2,4,18,26,33,66,87,99]
      // next pass = arr[i] = -5, arr[j] = 26 (-5, 2)
      // [-5,2,18,2,26,33,66,87,99] <--- sorted
    }
      console.log('one pass completed!');
  }
return arr;
}
bubbleSort([99,-5,26,66,87,4,18,33,2]);

// **Partially Sorted** // 
function bubbleSort(arr) { // set a new variable called noSwaps
  let noSwaps;
  for (i = arr.length; i > 0; i--) { 
    noSwaps = true; // at the beginning of the pass noSwaps is true
    for (j = 0; j < i - 1; j++) { 
      //console.log(arr, arr[j], arr[j+1]);
      if (arr[j] > arr[j+1]) { 
        let tempVariable = arr[j]; 
        arr[j] = arr[j + 1]; 
        arr[j + 1] = tempVariable;
        noSwaps = false; // at the end there have been swaps so noSwaps is false
        // the sorting continues
      } 
    }
      console.log('one pass completed!');
      if (noSwaps) break; //once sorted break out
  }
return arr;
}
bubbleSort([99,1,2,3,4,5]);

// bubble sort's big O
// is O(n)
// partially sorted 
// is O(1)

