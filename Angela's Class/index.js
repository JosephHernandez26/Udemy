// FUN WITH STRINGS

// need to be able to prompt the user to give their name
var userName = prompt("what's your name?");
// need to isolate the first letter and cap
var properFirst = userName.slice(0, 1);
// capitalize first letter
var firstToUpper = properFirst.toUpperCase();
// isolate rest of the username 
var restOfName = userName.slice(1, userName.length);
// rest of name is lowercase
restOfName = restOfName.toLowerCase();
// join the full name
var fullUserName = firstToUpper + restOfName;
// return with an alert of the capitalized name
alert("Hiya " + fullUserName + " " + "how are ya?");

//Dog name - fun with maths

// using a prompt ask for the age of the users dog
let dogAge = prompt("how old is your doggo?");
// then use the formula to calculate the human age of the dog humanAge = (dogAge - 2) x 4 + 21
let ownerResponse = ((dogAge-2) * 4) + 21; // parens express the explicit order of operations 
// returns the response through an alert
alert("Your dog is " + ownerResponse + " in human years!");

// INCREMENT AND DECREMENT EXPRESSIONS 
let x = 5;
x = x + 1; // instead write x++ <- the increment expression (does not add a value); x-- <-- the decrement expression (does not subtract a value)
// these only ever change the value by one 
// to increase by more: use += or -=
// modulo = % provides the REMAINDER of the equation, ex: 12 % 8 = 4
// can use the modulo for determining even or odd 
// ex: 45 % 2 = 1 ~ odd // if the modulo is zero it will be an even number, if it is a non-zero, it will be odd.
// ex: 24 % 2 = 0 ~ even
let x = 5;
let y = 6;
x += y;
console.log(x);

// FUNCTIONS

// 











