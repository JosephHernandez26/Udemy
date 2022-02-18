'use strict';

//****** INSERTION SORT ******//


//*PSEUDO CODE
// start by picking the second element in array
// compare second element to one before, swap as necessary
// go to next element
// continue iteration from the left and check if third element
// is positioned correctly.
// repeat until array is sorted

//** First Attempt **
function insertionSort (arr) {
  for (i = 1; i < arr.length; i++) {
    let element = arr[i-1];
    if (arr[i] < element) {
      arr[i] = element;
    } else {
      arr[i+1];
    }
  } 
  return arr;
}

// ** Second Attempt **

// function insertionSort (arr) {
//   let noSwaps;
//   for (i = 1; i < arr.length; i++) {
//     for (j = i-1; j >= 0; j--){  
//     console.log(i, j);
//     noSwaps = true;
//     let currentEl = arr[i];
//     let element = arr[i-1];
//     let compareEl = arr[i+1];
//     console.log(i, element, compareEl, arr);
//     }
//     if (arr[i] < element) {
//       arr[i] = element;
//       element = compareEl;
//     } else {
//       i + 1;
//       console.log(i + 1)
//       noSwaps = false;
//     }
//   } 
//   return arr;
// }

// ** Re-worked and working **

function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    //console.log(i);
    console.log('**this is array and i **')
  let currentEl = arr[i];
    console.log(arr, currentEl);
    for (j = i-1; j >= 0 && arr[j] > currentEl; j--) {
      let nextEl = arr[j];
      console.log('**this is array, i and j **')
      console.log(arr, currentEl, nextEl)
      console.log('**this is j+1 and i**');
      arr[j+1] = nextEl;
      console.log(nextEl, currentEl)
      //console.log(arr);
    }
    arr[j+1] = currentEl;
     console.log('**this is array and j+1 **')
    console.log(arr, currentEl)
  }
  return arr;
}

insertionSort([0,5,9,76,4,66])

/* Console **OUTPUT**

Console
Clear

Uncaught SyntaxError: Invalid or unexpected token 
 at https://cdpn.io/cpe/boomboom/pen.js?key=pen.js-ebd86b3e-5c1c-8747-805a-701be419f4b6:9
Uncaught SyntaxError: Invalid or unexpected token 
 at https://cdpn.io/cpe/boomboom/pen.js?key=pen.js-0f6cd227-1e1a-0c80-cdfc-4dcbaca3617d:9
"**this is array and i **"
--starting with arr[i] which is index 1
[0,5,9,76,4,66] 5

"**this is array and j+1 **"
--0 compares to 5, no swaps
[0,5,9,76,4,66] 5

"**this is array and i **"
-- 9 is now the new i
[0,5,9,76,4,66] 9

"**this is array and j+1 **"
-- 9 compares to 5, no swaps
[0,5,9,76,4,66] 9

"**this is array and i **"
-- 76 is the new i
[0,5,9,76,4,66] 76

"**this is array and j+1 **"
-- 9 compares to 76, no swaps
[0,5,9,76,4,66] 76

"**this is array and i **"
-- 4 is the new i
[0,5,9,76,4,66] 4

"**this is array, i and j **"
-- 4 is less than 76
[0,5,9,76,4,66] 4 76

"**this is j+1 and i**"
-- 76 becomes 4 (inserts and swaps)
76 4

"**this is array, i and j **"
-- 4 compares to 9 and is less
[0,5,9,76,76,66] 4 9

"**this is j+1 and i**"
-- 9 becomes 4 (inserts and swaps)
9 4

"**this is array, i and j **"
-- 4 is less than 5
[0,5,9,9,76,66] 4 5

"**this is j+1 and i**"
-- 4 and 5 swap
5 4

"**this is array and j+1 **"
-- 4 inserted and 5 is in pos 2
[0,4,5,9,76,66] 4

"**this is array and i **"
-- 66 is the new i
[0,4,5,9,76,66] 66

"**this is array, i and j **"
-- 66 is less than 76
[0,4,5,9,76,66] 66 76

"**this is j+1 and i**"
-- 66 swaps with 76
76 66

"**this is array and j+1 **"
-- 66 is inserted
-- array is returned
[0,4,5,9,66,76] 66
*/
