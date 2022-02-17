'use strict';
//****** SELECTION SORT ******//
//*PSEUDO CODE
//store the 1st element as the smallest value (seen so far)
//compare this element to the next in the array until a smaller is found
//if a new smaller value is found - designate as new min, cont loop to end
//if the min is NOT the value (index) you began with ,then swap with new min

// **My ATTEMPT** //
/*
function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let min = i;
    if (min < arr[i+1]) {
      let newMin = min;
      arr[i+1] = arr[i];
      arr[i] = min;
    } 
  }
  return arr;
}

selectionSort([9, 6, 33, -2, 5]);
*/

// **Working version**
function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let min = i;
    for (j = i+1; j < arr.length; j++) {
      console.log('++Here is arr[i]: ' + i + ' and here is arr[j]: ' + j);
      if (arr[j] < arr[min]){
        min = j;
      }
    }
    console.log('***Here we go***');
    console.log('here is your array: ' + arr);
    console.log('++++SWAPPING TO: ')
    let temporaryMin = arr[i];
    arr[i] = arr[min];
    arr[min] = temporaryMin;
    console.log('Did you see it? Here is the array: ' + arr);
    console.log('****Done with this one****');
  }
  return arr;
}

selectionSort([9, 6, 33, -2, 5]);

//** With check included **//

function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let min = i;
    for (j = i+1; j < arr.length; j++) {
      console.log(i, j);
      if (arr[j] < arr[min]){
        min = j;
      }
    }
    // adds the check
    if (i !== min) { 
    // if i is NOT equal to the lowest value (min)
    console.log('******');
    console.log(arr);
    console.log(i, min);
    // continue with the swap
    let temporaryMin = arr[i];
    arr[i] = arr[min];
    arr[min] = temporaryMin;
    console.log(arr);
    console.log('******');
    }
  }
  return arr;
}

selectionSort([0, 1, 9, 6, 33, -2, 5]);

/* OUTPUT:
******
(7) [0, 1, 9, 6, 33, -2, 5]
0 5 <-- SWAP -->
(7) [-2, 1, 9, 6, 33, 0, 5]
******
******
(7) [-2, 1, 9, 6, 33, 0, 5]
1 5 <-- SWAP -->
(7) [-2, 0, 9, 6, 33, 1, 5]
******
******
(7) [-2, 0, 9, 6, 33, 1, 5]
2 5 <-- SWAP -->
(7) [-2, 0, 1, 6, 33, 9, 5]
******
******
(7) [-2, 0, 1, 6, 33, 9, 5]
3 6 <-- SWAP -->
(7) [-2, 0, 1, 5, 33, 9, 6]
******
******
(7) [-2, 0, 1, 5, 33, 9, 6]
4 6 <-- SWAP -->
(7) [-2, 0, 1, 5, 6, 9, 33]
******
(7) [-2, 0, 1, 5, 6, 9, 33]
*/

