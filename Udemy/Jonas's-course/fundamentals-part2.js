'use strict';

let hasDriersLicense = false;
const passedTest = true;

if (passedTest) hasDriersLicense = true;
if (hasDriersLicense) console.log('I can drive');

//-----------------------------------------------//
/// FUNCTIONS ///
//-----------------------------------------------//

// enables you to use a block of code over and over, wherever it is called.

function logger() { // <-- instantiated function
  console.log('my name is Josepi');
}
logger(); // <-- invoking/calling
//OUTPUT:
// 'my name is Josepi'

// params are defined within the function
function fruitProcessor(apples, oranges) { //<-- parameters
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
return juice;
}
const appleJuice = fruitProcessor(5, 0); //<-- these are the arguments
  console.log(appleJuice);
//OUTPUT:
// juice with 5 apples and 0 oranges
const appleOrange = fruitProcessor(6, 4); 
  console.log(appleOrange);
// OUTPUT:
// juice with 6 apples and 4 oranges

//-----------------------------------------------//
// ***** DECLARATIONS vs EXPRESSIONS ***** //
//-----------------------------------------------//

// you CAN call a function declaration BEFORE it is defined
// you CANNOT call a function expression BEFORE it is defined

// DECLARATION //------------------
function calcAge1(birthYear) {
  const age = 2045 - birthYear;
  return age; // <-- the return pulls the value
}

// simplified //
function calcAge01(birthYear01) {
  return 2045 - birthYear01;
}
const age01 = calcAge01(1982);//<-- const age01 stores the extracted value as a variable
console.log(age01);

// EXPRESSION //---------------------
const calcAge2 = function (birthYear01) {//<-- anonymous function
  return 2037 - birthYear01 // it is a expression because it produces a value
} // calcAge2 now holds the expression and the value to be used elsewhere
const age2 = calcAge2(1982); // functions are values and can be stored in variables
console.log(age01, age2);

//-----------------------------------------------//
// ARROW FUNCTIONS //-----------------
//-----------------------------------------------//
// shorter and faster to write
// they do not get a 'this' keyword

const calcAge3 = function (birthYear) {
  return 2071 - birthYear;
}

// As an Arrow Function //
const calcAge3 = birthYear => 2071 - birthYear; // <-- exactly one param and one line no {}
const age3 = calcAge3(1982);
console.log(age3);

// Arrow with more than one line of code //
const yearsUntilRetire = birthYear => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
}

console.log(yearsUntilRetire(1982));

// Arrow with multiple params //
const yearsUntilRetire1 = (birthYear1, firstName) => {
  const age1 = 2022 - birthYear1;
  const retirement = age1 - 65;
  return `${firstName} retires in ${retirement} years!`
}
console.log(yearsUntilRetire1(1982, 'Joey'));
//OUTPUT:
// 'Joey retires in 25 years!'

//-----------------------------------------------//
// ***** CALLING FUNCTIONS WITHIN FUNCTIONS **** //
//-----------------------------------------------//


function cutFruit(fruit) {
  return fruit * 4;
}

function fruitProcessorA(apples, oranges) { 
  const applePieces = cutFruit(apples);
  const orangePieces = cutFruit(oranges);
  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} apple slices and ${orangePieces} orange slices.`;
return juice;
}
console.log(fruitProcessorA(6, 5));
// OUTPUT:
// 'Juice with 24 apple slices and 20 orange slices.'


//-----------------------------------------------//
//****** REVIEW *******
//-----------------------------------------------//

const calcAge11 = function(birthYear2) {
  return 2055 - birthYear2;
}

const yearsUntilRetire11 = function (birthYear2, firstName2) {
  const age11 = calcAge11(birthYear2);
  console.log(age11);
  const retirement11 = 65 - age11;
  console.log(retirement11);

  if (retirement11 > 0) {
    console.log(`${firstName2} retires in ${retirement11} years!`) // must come BEFORE the return
    return retirement11 // return ENDS this portion of the code
  } else {
    console.log(`${firstName2} retired ${retirement11} years ago!`)
    return -1; // return TERMINATES function execution...'the function returns'
  }
}
yearsUntilRetire11(1982, 'Hannah');

//-----------------------------------------------//
// ***** CODE CHALLENGE 1 **** //
//-----------------------------------------------//

// 1. write an arrow function called calcAvg that calculates 3 scores
// 2. use the function to calculate averages for both teams
// 3. write a function called checkWinner that takes in the scores as params
// console log the winner
// 'Koalas WIN (30 to 13)!!'
// 4. use the checkWinner function to determine the winner for both Data sets
// 5. ignore any draws
// TEST DATA: Dolphins = 44 23 71 Koalas = 65 54 49
// TEST DATA: 85 54 41 and 23 34 27

// const calcAvg = scores => {
//   let scores = (a + b + c);
//   let averageScores = scores / 3;
//   return averageScores
// }

// const calcAvg = avgScores => {
//   const score1 = 44;
//   const score2 = 23;
//   const score3 = 71;
//   const avgScores = (score1 + score2 + score3)/3;
//   return avgScores
// }
// 1.
const calcAvg = (a, b, c) => (a + b + c) / 3; //<-- this is a stand alone function that can be used anywhere
// 2.
const dolphinsScore = calcAvg(44, 23, 71);
console.log(dolphinsScore);
const koalasScore = calcAvg(65, 54, 49);
console.log(koalasScore);
// 3.
const checkWinner = function(dolphinsAvg, koalasAvg) {
  if (dolphinsAvg >= 2 * koalasAvg) {
    console.log(`Dolphins WIN (${dolphinsAvg} to ${koalasAvg})!!`)
  } else if (koalasAvg >= 2 * dolphinsAvg) {
    console.log(`Koalas WIN (${koalasAvg} to ${dolphinsAvg})!!`)
  } else {
    console.log('NO ONE WINS!')
  }
}

// const dolphinsWin = dolphinsAvg >= 2 * koalasAvg;
// console.log(dolphinsWin);
// const koalasWin = koalasAvg >= 2 * dolphinsAvg;
// console.log(dolphinsAvg >= 2 * koalasAvg);


//-----------------------------------------------//
// ***** ARRAYS **** //
//-----------------------------------------------//
// an array is NOT a primitive value, and as such it can be changed
// you CANNOT change the whole array in place

const friend1 = 'Hannah';
const friend2 = 'Trace';
const friend3 = 'Matt';

const myFriends = ['Hannah', 'Trace', 'Matt']; // literal array syntax
console.log(myFriends);

const yearsArr = new Array(1982, 2002, 2019); // create a new array using a function
// [] <-- square bracket syntax
console.log(myFriends[0]); // pulls the first element at position 0
// 'Hannah'
console.log(myFriends.length); // returns the exact number of elements in the array
// 3
console.log(myFriends[myFriends.length - 1]); // extracts the last element in the array 
// 'Matt'
myFriends[2] = 'Luke'; // replaces the last element (position 2) with 'Luke'
// arrays can store multiple values, expressions, other arrays...
const joey = ['Joey', 'Hernandez', 2045 - 1982, 'programmer', myFriends];

// ARRAY EXERCISE //
const calcAge01 = function (birthYear) {
  return 2045 - birthYear;
}
const years01 = [1999, 2009, 1985, 2013, 2011, 2008];
const ages = calcAge01(years01[0]);
const ages2 = calcAge01(years01[2]);
const ages3 = calcAge01(years01[years01.length - 1]);
console.log(ages, ages2, ages3);

const allAges = [calcAge01(years01[0]), calcAge01(years01[1]),
calcAge01(years01[years01.length - 1])];
console.log(allAges);
