'use strict';

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight * johnHeight;
console.log(markBMI, johnBMI);

// temperate literal //

// set your string as a variable 
const firstname = 'Joey';
const jobby = 'programmer';
const age = 40;

const joey = 'heyo, I am ' + firstname + ' and I am a sexy ' + jobby + ' and I am ' + age + ' !';
// template literal
const joeyIntro = `heyo, I am ${firstname}, and I am a sexy ${jobby} and I am ${age}!`;
// multi-line string

// Code Challenge 2//

// print a statement to the console stating who has the higher BMI.
// Use a template literal to include the BMI values in the output.
// Example: 'Mark's BMI (value) is Higher than John's (value).'

const johnBmi = johnMass / johnHeight * johnHeight;
const markBMI = markMass / markHeight ** 2;
const higherBMI = 'Mark\'s BMI, (' + markBMI + '), ' + ' is higher than John\'s BMI ( ' + johnBMI + ' )!';

if (johnBMI > markBMI) {
  console.log(' your math is off');
} else {
  console.log(`${higherBMI}`);
}

// Conversion and Coercion //

// -- type conversion --
// Number() <-- converts strings into numbers
// if an operation that involves a number, but is invalid, or is a string w/no numbers - NaN (Not a Number) will be returned
// String() <-- converts to a string
// Boolean() <-- converts to a boolean (true, false)

// -- type coercion --
// adding a + will convert the whole thing to a string if a number is present
// adding a - will convert the whole thing to a number
// example:

let n = 1 + '1'; // '11'
n =  n - 1; // 11 - 1 = 10
console.log(n)
//output -> 10

// 2, 3, 4 = 9 + the string '5' so '9' + '5'
2 + 3 + 4 + '5' // the + converts the numbers into a string and combines them
//output -> 95

//numbers 10-4-3-2 = 1 then + makes it all a string so '1' + '5'
'10' - '4' - '3' - 2 + '5'
// output -> '15'

//++++ Truthy and Falsy ++++//

//False values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); // false
console.log(Boolean('Joey')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

// example:
const money = 0; // <-- already falsy so (money) will be false
if (money) { // <-- js will convert to a boolean because 0 = falsy
  console.log('watch your spending');
} else {
  console.log('get a job foo!'); // because 0 is falsy it will return this
}
// Output -> 'get a job foo!'

let height; // <- since ni value is assigned, it is undefined or falsy
if (height) { // <- JS converted this into a boolean
  console.log('height is defined')
} else {
  console.log('UNDEFINED')
}
// Output -> 'UNDEFINED'

// **** EQUALITY OPERATORS ****

const age = 18;
// if the argument is only one condition, you dont need {}
if (age === 18) console.log('you are an adult!')
// === strict equal (consider the default) 
// only returns true when both values are exactly the same
// '18' === 18 <- this would be false
// 18 === 18 <- this would be true

// the loose equality operator
// '18' == 18 <- this would be true 
// 18 == 18 <- this would be true

// ****** BOOLEAN LOGIC ********//

// AND, OR and NOT operators

// (&&) AND - returns true only when both arguments are true
// (||) OR - returns true as long as one argument is true
// (!) NOT - acts on only one argument one will be true and one will be false

const hasLicense = true;
const hasGoodEyes = true;

console.log(hasLicense && hasGoodEyes);
// output -> true

const hasLicense = true;
const hasGoodEyes = false;

console.log(hasLicense && hasGoodEyes);
// output -> false

const hasLicense = true;
const hasGoodEyes = false;

console.log(hasLicense || hasGoodEyes);
// output -> true

const hasLicense = true;
const hasGoodEyes = true;

console.log(!hasLicense);
// output -> false

// combining it all//

const shouldYouDrive = hasLicense && hasLicense;

if (shouldYouDrive) {
  console.log('sure go ahead!')
} else {
  console.log('not a good idea')
}
// adding a third variable //

const shouldYouDrive = hasLicense && hasLicense;
const isSleepy = true;

if (shouldYouDrive && !isSleepy) { // <- not sleepy
  console.log('sure go ahead!') //<- true 
} else {
  console.log('not a good idea')
}

// CODE CHALLENGE //

// calculate avg score for each team
// compare the scores to determine winner
// draws are possible
// Bonus1: require a minimum score of 100 to win
// Bonus2: the minimum applies to the draw scores as well

// test data: dolphins = 96, 108 and 89
// koalas = 88, 91, 110
// Bonus data: dolphins 97, 112, 101
// koalas = 109, 123, 95
// Bonus 2: dolphins = 97, 112, 101
// koalas = 109, 95, 106

// Code challenge //
const dolphinsAvg = (96 + 108 + 89) / 3
const koalasAvg = (88 + 91 + 110) / 3

if (dolphinsAvg > koalasAvg) {
  console.log('Dolphins!');
  if (dolphinsAvg >= koalasAvg || koalasAvg === dolphinsAvg) {
    console.log('its a draw!')
} else {
  console.log('Koalas!');
}
} 
/// BONUS 1 ///
const dolphinsAvg1 = Number((97 + 112 + 101) / 3);
const koalasAvg1 = Number((109 + 123 + 95) / 3);
const minimumScore = 100;

if (dolphinsAvg1 > koalasAvg1 && dolphinsAvg1 > 100 && dolphinsAvg !== koalasAvg) {
  console.log('Dolphins!');
} else if (dolphinsAvg === koalasAvg && dolphinsAvg > 100 && koalasAvg > 100) {
    console.log('its a draw!');
} else {
  console.log('Koalas!')
}


/// BONUS 2 ///
// const dolphinsAvg1 = Number((97 + 112 + 101) / 3);
// const koalasAvg1 = Number((109 + 95 + 106) / 3);
// const minimumScore = 100;

// if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
//   console.log('its a draw!');
// } else if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100 && dolphinsAvg !== koalasAvg) {
//     console.log('Dolphins!');
//   } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100 && koalasAvg !== dolphinsAvg) {
//     console.log('Koalas!');
//   } else {
//     console.log('No one wins!')
//   }

const dolphinsAvg1 = (120 + 112 + 120) / 3;
console.log(dolphinsAvg1);
const koalasAvg1 = (120 + 112 + 120) / 3;
console.log(koalasAvg1);
const minimumScore = 100;
console.log(minimumScore);

if (dolphinsAvg1 === koalasAvg1 && dolphinsAvg1 >= minimumScore && koalasAvg1 >= minimumScore) {
  console.log('its a draw!');
} else if (dolphinsAvg1 > koalasAvg1 && dolphinsAvg1 >= minimumScore && dolphinsAvg1 !== koalasAvg1) {
    console.log('Dolphins!');
  } else if (koalasAvg1 > dolphinsAvg1 && koalasAvg1 >= minimumScore && koalasAvg1 !== dolphinsAvg1) {
    console.log('Koalas!');
  } else {
    console.log('No one wins!');
  }

// SWITCH STATEMENTS //

const day = 'Monday';

switch(day) {
  case 'monday' : // day === monday and if true
    console.log('plan for the works'); // execute this
    console.log('get outta here');
    break;
    case 'tuesday' :
      console.log('prepare the ground')
      break;
      case 'wednesday' :
        case 'thursday' :
          console.log('atma time');
          case 'friday' :
            case 'saturday' :
              case 'sunday' :
                console.log('we gone!');
                break;
                default:
                  console.log('check your spelling')
}

// using if/else and else/if syntax //
if (day === 'monday') {
  console.log('do something')
} else if (day === 'tuesday') {
  console.log('do something else')
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('take a nap')
} else if (day === 'friday' || day === 'saturday' || day === 'sunday') {
  console.log('party time')
} else {
  console.log('check your spelling')
}

// ******* EXPRESSIONS and STATEMENTS ******** //

// expressions produce values
3 + 4 // expression
1994 // gives a number value = expression
true && false && !false // expression
'i am a string' // expression

// statements do not produce values
if (23 > 10) {
// this whole line is a statement
  const str = '23 is bigger!'; // it creates a variable
} // like a full sentence that translates actions

//temperate literals can ONLY have expressions within them NOT statements
//example
//`this ${23 - 45} is a negative number` // allowed
//`this ${if (23 > 10) {const str = '23 is bigger!';}} is not allowed` // error

//// using ? : conditional operators / TERNARY ////

const age = 21;
age >= 21 ? console.log('I can drink') :
console.log('I cannot drink'); 
// simplified with a ternary statement 
const drink = age >= 21 ? 'wine' : 'soda';
console.log(drink);

let drink2; //<-- declare OUTSIDE to use in the statement
if (age >= 21) {
  drink2 = 'whiskey';
} else {
  drink2 = 'more soda';
}
console.log(drink2)

// You can use the expression with the ternary in a template literal
console.log(`I can drink ${age >= 21 ? 'wine' : 'soda'}`);

/// CODE CHALLENGE ///

// calculate the tip depending on bill total (if between 50 - 300 = 20%) if not 20% then 15%
// create a var called 'tip
// no if/else statements
// return the following string:
// 'the bill was 275, the tip was 41.25 and the grand total is 316.25.'
// TEST DATA: bill = 275, 40 and 430

const total = 275;
const tip = total >= 50 && total <= 300 ? total * .20 : total * .15;
const grandTotal = total + tip;
console.log('tip = ' + tip);
console.log(`the bill was ${total}, the tip was ${tip} and the grand total is ${grandTotal}.`);

