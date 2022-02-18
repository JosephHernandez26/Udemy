'use strict';
//*****************/
//** MERGE SORT **//
//****************/
// splits up larger arrays and splits it up
//        [8, 3, 5, 4, 7, 6, 1, 2]
//-----split 1---------------------------
//       [8, 3, 5, 4]  [7, 6, 1, 2]
//-----split 2---------------------------
//      [8, 3] [5, 4]  [7, 6] [1, 2]
//-----split 3---------------------------
//     [8] [3] [5] [4] [7] [6] [1] [2]
//---------------------------------------
//**** Now they merge back and sort *****
//---------------------------------------
//-Merge & Sort 1------------------------
//     [8] [3] [5] [4] [7] [6] [1] [2]
//--Merge 1------------------------------ 
//     [8, 3]  [5, 4]   [7, 6]  [1, 2]
//----Sort 1-----------------------------
//      [3, 8]  [4, 5] [6, 7]  [1, 2]
//------Merge 2-------------------------- 
//       [3, 8] [4, 5] [6, 7] [1, 2]
//--------Sort 2-------------------------
//         [3, 4, 5, 8][1, 2, 6, 7]
//----------Merge 3----------------------
//         [3, 4, 5, 8, 1, 2, 6, 7]
//------------Merge 3--------------------
//         [1, 2, 3, 4, 5, 6, 7, 8]
//---------------------------------------

//**** PSEUDO CODE ****
// create an empty array 'results' (take a look at the smallest values)
// while there are still values we haven't looked at
//--if the value in arr1 is smaller than the value in arr2
//----push the value in arr1 into results
//------continue to the next value in arr1
//--if the value in arr1 is larger than the value in arr2
//----push the value in arr2 into results
//------continue to the nxt value in arr1

//** First Attempt **
function mergeSort(arr1, arr2) {
  let results = [];
  for (i = 0; i < arr1.length; i++) {
    let value1 = arr1[i];
    for (j = 0; j < arr2.length; j++) {
      let value2 = arr2[j];
      if (value1 < value2 ) {
        results.push(value1);
        i + 1;
      } else if (value1 > value2) {
        results.push(value2);
        j + 1;
      }
    }
  }
  return results;
}
mergeSort([1, 10, 50],[2, 14, 99, 100]);

//** Colt's Example **
//**Merging two arrays **
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
// the while loop only applies while data exists in both arr1 and arr2
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++; // increment i in the array
    } else {
      results.push(arr2[j]); // arr[j] is smaller push arr2[j]
      j++; // increment j, i remains in place
    } // this logic will merge as far as it can
    // output: [1, 2, 10, 14, 50]
  } // this logic will work to push the remaining data into the results array
  while (i < arr1.length) {
    results.push(arr1[i]); // pushes the remaining arr1 values
    i++; // goes to the end of arr1
  }
  while (j < arr2.length) {
    results.push(arr2[j]); // pushes the remaining arr2 values
    j++; //goes to the end of arr2
  }
  return results;
}
merge([1, 10, 50],[2, 14, 99, 100]);

//-------------
//** Adding Sort Logic **
//-------------
//
// break up the array into halves until one value remains or empty
// once you have smaller sorted arrays
//--merge those arrays with other sorted arrays until full length is reached
//---once the array has been merged back together
//----return the merged and sorted array
//
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
// the while loop only applies while data exists in both arr1 and arr2
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++; // increment i in the array
    } else {
      results.push(arr2[j]); // arr[j] is smaller push arr2[j]
      j++; // increment j, i remains in place
    } // this logic will merge as far as it can
    // output: [1, 2, 10, 14, 50]
  } // this logic will work to push the remaining data into the results array
  while (i < arr1.length) {
    results.push(arr1[i]); // pushes the remaining arr1 values
    i++; // goes to the end of arr1
  }
  while (j < arr2.length) {
    results.push(arr2[j]); // pushes the remaining arr2 values
    j++; //goes to the end of arr2
  }
  return results;
}
//-------------
//** MergeSort using Recursion **
//-------------
// use arr.slice to remove a specified grouping from the array
// -arr.slice(where to end, where to start)
// if no end, it will collect everything from start point on
function  mergeSort(arr) {
  if (arr.length <= 1) return arr; // if only one value or less, return arr
  let middleOfArray = Math.floor(arr.length / 2); // splits the array in half
  let leftSideOfArray = mergeSort(arr.slice(0, middleOfArray)); // sorts and slices left half
  let rightSideOfArray = mergeSort(arr.slice(middleOfArray)); // sorts and slices right half
  return merge(leftSideOfArray, rightSideOfArray);
}
mergeSort([10,24,76,73,70,1,9,66,6]);