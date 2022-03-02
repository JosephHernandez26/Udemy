'use strict';
// called second and sent to FIFO in the stack (2)
function takeShower() { 
  return 'showering';
}

function getDressed() { // called third but...it needs to do something first
  let outfit = wearClothes(); // clothes need to be warn to be dressed - wearclothes() is called 4th
  return `All dressed ${outfit}`; // once wearClothes is complete 
}

function wearClothes() { // this must return a value before getDressed can complete
  let clothes = ['Shirt & Jeans', 'Hoodie & Jeans', 'Shorts & T-shirt'];
  return clothes[Math.random(Math.floor()*clothes.length)]; // chooses a random article of clothing
}

function eatFoods(){ // same thing here, eatFoods is called but it needs
  let meal = cookFoods() // cookFoods to complete before it can finish
  return `eating ${meal}`;
}

function cookFoods() { //cookFoods goes ahead of eatFoods, when complete its value is put into 
  let food = ['eggs', 'bacon', 'pancakes']; // eatFoods return
  return food[Math.random(Math.floor()*food.length)]; // chooses a random food item from the array
}

function startDay() {
  takeShower(); // (2)
  getDressed(); 
  eatFoods();
  console.log('Ready for this day BIATCH!')
}

startDay(); // Called first -> goes to the bottom of the stack (1)

// functions are added first to the top, then removed from the top

/// **Recursive functions** ///

// Base case -> where recursion stops
// Recursive call -> Different input

function countDown(num) {
  if (num <= 0) { // is num less than or equal to 0
    console.log('all done!'); // no
    return;
  }
  console.log(num); // so it prints the number
  num--; // and begins to subtract one from the beginning number
  countDown(num); // and places the subtracted number into the arg
}
 countDown(6);
//line by line break down//
// print 6
// countDown(5);
// print 5
// countDown(4);
// print 4..etc.etc.
// until it reaches 0 (the base case)
// prints 'all done' then uses the 'return' (line 46) to break out of the recursion

function sumRange(num) {
  if (num === 1) return 1; // <-- base case 
  return num + sumRange(num - 1); // <-- recursive call/diff input
}
// if we didnt return to 1 we would forever call sumRange()

sumRange(3);

/* The Walk-thru
3 + sumRange(2) //--step one
  2 + sumRange(1) //--step two 
    return 1 //--step three
   sumRange(1) is simplified to just 1 //--step four
   2 + 1 (the simplified sumRange) //--step five
   3 + 3 (the simplified sumRange from step one and two) //--step six
  return 6
*/

// writing FACTORIAL iteratively //
function factorial(number) { // number = begins with 4
  let total = 1; // total equals 1
  for (let i = number; i > 1; i--) { // i = 4, 4 is greater than 1; so we continue
    total *= i; // total is 1 * 4 which equals 4 
  } // we will keep going until we reach 1
  return total;
}
// 4 * 3 * 2 * 1 = 24

// writing FACTORIAL recursively //
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1)
}

// Stack Overflow //
// These problems will result in 'maximum stack reached' or a 'stack overflow'

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num)//<--- it will just get stuck forever multiplying by 1
}

// helper method recursion //
// This is nothing more than a pattern

function outer (input) {

  let outerScopedVariable = [];

  function helperFunction(helperInput) {
    // modify the OuterScopedVariable
    helper(helperInput--)
  }
  helper(input)

  return outerScopedVariable;
}

//
// ----- Collect all the odd values in an array -----
//

function collectOddValues(arr) {

  let result = [] //<--defined outside the scope

  function helper(helperInput) { //<-- recursive helper function
  if (helperInput.length === 0) {
    return;
  }

  if (helperInput[0] % 2 !== 0) {
    result.push(helperInput[0])
  }

  helper(helperInput.slice(1))
}

helper(arr);

return result;

}

// ------ PURE RECURSION -----

function collectOddValues(arr) {
  let newArray = []; // sets empty array

  if (arr.length === 0) { // verifies the array is NOT empty it is [1, 2, 3, 4, 5]
    return newArray; // if it IS it returns the newArray
  }
  if (arr[0] % 2 !== 0) { // it takes the value at position 0 and checks if its even and not 0
    newArray.push(arr[0]); // if it is odd, it pushes it into the newArray
  }
  newArray = newArray.concat(collectOddValues(arr.slice(1))); // now it takes [1, 2, 3, 4, 5] and slices at position 1
  return newArray; // and returns the value 
}

collectOddValues([1, 2, 3, 4, 5]);
// output step by step//
// step 1: [1].concat(collectOddValues([2, 3, 4, 5])) <-- new input [2, 3, 4, 5]
// step 2: [].concat(collectOddValues([3, 4, 5])) <-- new input [3, 4, 5]
// step 3: [3].concat(collectOddValues([4, 5])) <-- new input [4, 5]
// step 4: [].concat(collectOddValue([5]))<-- new input [5]
// step 5: [5].concat(collectOddValues([]))
// step 6: newArray's input is equal to zero so the collected values array is concatinated
// step 7: [5].concat([])
// step 8: [3].concat([5])
// step 9: [1].concat([3, 5])
// step 10: [1, 3, 5]

const challenge = (root,timesIveTraversedAnEdge, targetValue) => {

  if(!root){// base case: when the recursion stops
      return;
  }
//recursive case - where the recursion happens

//main part of the code
  if(!root.left && !root.right) {
      console.log(root.value,timesIveTraversedAnEdge);
  }
}
// recursion
// this line below is adding to the stack 
  challenge(root.left, timesIveTraversedAnEdge + 1); // stack frame 
  challenge(root.right, timesIveTraversedAnEdge + 1); // stack frame 
// if this line is reached something is removed from the stack 
//
// next step: 
// challenge(someRandomTree, 0);

//--------
// Vinicio's code challenges
//--------


const challenge = (root,timesIveTraversedAnEdge, targetValue) => {

  if(!root){// base case: when the recursion stops
      return;
  }
  // recursive case - where the recursion happens

  // main part of the code
  if(!root.left && !root.right) {
      console.log(root.value,timesIveTraversedAnEdge);
  }

  // recursion
  challenge(root.left, timesIveTraversedAnEdge + 1); // stack frame - push in stack
  challenge(root.right, timesIveTraversedAnEdge + 1); // stack frame - push in stack
  // if you reach this line. this is removing something from the stack
}
// next step: do this problem for everything that's not a leaf

challenge(someRandomTree, 0);

