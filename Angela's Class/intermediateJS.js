// pseudo random number generator
let n = Math.random(); // creates random number
n = n * 6; // multiply rando by 6
n = Math.floor(n); // use Math.floor to create a non-decimal number
console.log(n); // prints the number 

/// code challenge //
// create a love calculator
// 2 prompts that ask for the lovers names
// creates a random number that is a percentage
// return the percentage as an alert

let loverName1 = prompt('what is your name?');
let loverName2 = prompt('what is your love\'s name?');
let love = Math.random();
love = Math.floor(love) + 1;
alert(loverName1 + ' you ' + ' and ' + lovername2 + ' are ' + love + '%' in love!');

/// Conditional Statements ///

// if 
// else 
// known as 'control flow'
///
if(track === 'clear'){ // inside the parens are conditions
  goStraight(); // if true - execute 
} else { // if not true...move on
  turnRight(); // execute if not true
}
///

let loverName1 = prompt('what is your name?');
let loverName2 = prompt('what is your love\'s name?');
let loveScore = Math.random();
loveScore = Math.floor(loveScore) + 1; // 1 - 100
// inserting conditionals 
if (loveScore > 80) { // if truthy this code block will be executed
  alert('your love score is ' + loveScore + '%' + ' you are madly in love!');
} else { // if the first was falsy, this code will execute
  alert('your love score is ' + loveScore + '%' + ' you got some work to do!')
}

////// Comparators //////

// === --is equal to 'hard equal', is equal including matching in data type
// == --is equal, but data types dont matter
// = --is loosely equal 
// !== --is NOT equal to
// > --greater than
// > --less than
// >= --greater than or equal to
// <== --less than or equal to
// && --if one condition AND another are true
// || --if one condition OR another is true
// ! --means NOT
// % --means modulo and it calculates the difference 
// % --also if a vaiable is % 2 and == 0 it is even, if it == 1 it is odd

/// using comparators ///

let loverName1 = prompt('what is your name?');
let loverName2 = prompt('what is your love\'s name?');
let loveScore = Math.random();
loveScore = Math.floor(loveScore) + 1; // 1 - 100
// inserting conditionals 
if (loveScore > 80) { // if truthy this code block will be executed
  alert('your love score is ' + loveScore + '%' + ' you are madly in love!');

if (loveScore > 30 && loveScore <= 70) { // if greater than 30 AND less than but equal to 70
  alert('your love score is ' + loveScore + '%' + ' keep going...you two will make it') // return this
}

if (loveScore <= 30 || = 0) { // if less than or equal to 30 or equal to zero
  alert('your love score is ' + loveScore + '%' + ' this may not be a good fit') // return this
}

// create a function that takes in three numbers and returns the largest number

// need to assign rando number s
function biggestNum (5, 5, 2) { //create a function that takes in three numbers
  // 5 = Math.random()*10; // assign a random value to the variables
  // 5 = Math.random()*10;
  // 2 = Math.random()*10;
 if (a > b && a > c) { // if a is greater than b AND greater than c
   console.log(‘a is the winner with ’ + Math.floor(a)); // return a
 }
 if (b > a && b > c) { // if b is greater than a AND b is greater than c
   console.log(‘b is the winner with ’ + Math.floor(b)); // return b
 } else {
   console.log(‘c is the winner with ’ + Math.floor(c)); // and if none of the above is true return c
 }
}
biggestNum();

/// Leap year challenge ///
/// first try ///
// if (year % 4 === 0) {
//   return "Leap Year."
//   if (year % 100 === 0) {
//       return "Not leap year."
//       if (year % 400 === 0) {
//           return "Leap year."
//       } else {
//           return "Not leap year."
//       }
//   } else {
//       return "Leap year."
//   }
// } else {
//   return "Not leap year."
// }

if (year % 4 === 0) {
  if (year % 100 === 0) {
      if (year % 400 === 0) {
          return "Leap year.";
      } else {
          return "Not leap year.";
      }
  } else {
      return "Leap year.";
  }
  return "Leap year.";
} else {
  return "Not leap year.";
}

/**************Don't change the code below****************/

//// Vinicio's code challenges ////

///write a function that tells me if a number is even or odd

// need to make a function that takes in n as a param
function isEven(n) {
  // n is defined
  n = Math.floor(Math.random() * 10);
  // if n is divisible by 2 
  if (n % 2 === 0) {
    // is even
    console.log(n + ' is even!'); 
  } else {
    // is not even
    console.log(n + ' is definitely NOT even!') 
  }
}

isEven();
//// as an arrow function ////

isEven = (n) => {
  n = Math.floor(Math.random() * 10);
    if (n % 2 == 0) {
    console.log(n + ' is definitely even!');
} else {
    console.log(n + ' is definitely NOT even!');
  }
}

isEven();

///write a function that prints all the even numbers in an array



///write a function that return an array filled with random numbers

///(extra credit) write a function that traverses a linked list

//write a function that uses a loop to produce the following output:
//1
//2
//3

