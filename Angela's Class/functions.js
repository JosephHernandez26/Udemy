/////////////////////////
// FUNCTIONS //
/////////////////////////

// notes:
// the curly braces are the packaging of the series of instructions {}
// function <-- (keyword) getMilk()<--(function name)
// function - keyword that creates the function - think of it as a box
// getMilk - giving the container a name
// { instructions for the function } <-- contains the pieces 

function getMilk() {
  console.log("leave house"); // to change to console.log
  console.log("go right");    // hit ctrl F, type in alert
  console.log("go right");    // click the A->B thing and type console.log
  console.log("go right");    // click on replace all
  console.log("go right");
  console.log("move up");
  console.log("move up");
  console.log("move up");
  console.log("move up"); 
}// does not end with a semi-colon

getMilk();

// alert is what the user sees
// console.log is only what you see (the dev)

// make the robot go to the corner of the screen of a 5 x 5 square

function moveFour() { // to DRY this out  create a new function called 
  move();             // moveFour() which will contain the move() commands
  move();
  move();
  move();
}

/////////////////////////
// code challenge //
/////////////////////////

// send the robot to the far corner using a function

function main() {

  goToCorner();
}
  
  function goToCorner() {
    moveFour();
    turnLeft();
    moveFour();
}

// create a function that moves four spaces
  function moveFour() {
    move();
    move();
    move();
    move();
}

/////////////////////////
// code challenge //
/////////////////////////

// write a function that makes the robot put the beeper down in a specific pattern
// have the robot pt the beeper down diagonally across the board using commands 
// make code DRY


//first create the function
function main(){
  
  putBeeper();
  bigMoveFour();
  putBeeper();
  
}

// create a function for the moves
function bigMove() {
  
  // determine moves 
  putBeeper();
  move();
  turnAround();
  move();
  //pickBeeper();
  turnRight();
  move();
  turnRight();
  move();
  
}

// DRY out the code 
function bigMoveFour() {
  bigMove();
  bigMove();
  bigMove();
  bigMove();
  }


/////////////////////////
// code challenge //
/////////////////////////

// create a function that makes the robot create a chessboard pattern
// robot should drop 'beeper' in a chessboard design

function main(){
  chessBoard();
}

// creates diagonal line
function moveDropDiag() {
  //putBeeper();
  move();
  turnLeft();
  move();
  //putBeeper();
  turnRight();
  move();
  turnLeft();
  //putBeeper();
  //turnRight();
  move();
  turnRight();
  putBeeper();
}

function bigMoveFour() {
moveDropDiag();
moveDropDiag();
}

// makes right side
function moveDropDown() {
  //move();
  turnRight();
  move();
  move();
  putBeeper();
  //turnRight();
  move();
  move();
  putBeeper();
}

// makes bottom
function moveDropBottom() {
  //move();
  turnRight();
  move();
  move();
  putBeeper();
  //turnRight();
  move();
  move();
  //putBeeper();
}

// makes left side
function moveDropUp() {
  //move();
  turnRight();
  move();
  move();
  putBeeper();
  //turnRight();
  move();
  move();
  putBeeper();
}

// makes top
function moveDropTop() {
  turnRight();
  move();
  move();
  putBeeper();
  move();
  move();
  turnRight();
  move();
  turnRight();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();
}

// fills in the middle and returns to start
function fillItIn() {
  turnLeft();
  move();
  move();
  turnLeft();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  turnRight();
  move();
  turnRight();
  move();
  move();
  move();
  move();
  turnAround();
}

// combines all the moves for chessboard in one 
function chessBoard() {
  putBeeper();
  bigMoveFour();
  moveDropDown();
  moveDropBottom();
  moveDropUp();
  moveDropTop();
  fillItIn();
}


/////////////////////////
// FUNCTIONS CONT.
/////////////////////////
// now we will specify input within the function -> function getMilk(input)


function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
// using the money we will round the number of bottles down 
// round down using the Math.floor method divided by the cost of each bottle
  let numberOfBottles = Math.floor(money / 1.5);
  console.log("buy" + numberOfBottles + "bottles of Milk"); // <- buys a desired number of bottles when called by the function
  
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(2);

// creating the buyMilk function
// function getMilk(bottles) {
//   let cost = bottles * 1.5;
// }


/////////////////////////
// FUNCTIONS WITH PARAMS
/////////////////////////
// Life in weeks challenge

function lifeInWeeks(age) {

    //Write your code here.
    // calculates years to take from 90
    let years = 90 - age;
    // calculates days
    let days = years * 365;
    //console.log(days); //testing output
    // calculates weeks
    let weeks = years * 52;
    //console.log(weeks);
    // calculates months
    let months = years * 12;  
    //console.log(months);
    // combines them in all in one message
    console.log("you have " + days + " days, " + weeks + " weeks, and " + months + " months left!" );
  }
  
  lifeInWeeks(40); // parameter is my age

/////////////////////////
// FUNCTIONS WITH PARAMS
/////////////////////////

// write a function that tells me a number is even or odd

function number() {
  let even = Math.random(number % 2);
  if (number = even) {
    console.log(number + ' is even.');
  } else {
    number % 1;
    console.log(number + ' is odd.');
  }
}

number();

/////////////////////////
// FUNCTIONS WITH MODULO
/////////////////////////

//The anatomy of a function
function // <- this is the function keyword 
getMilk // <-- ths function is given a name
(inputUsed) // <-- inside the parens is the input the function will use
return inputUsed % 1.5;// <-- in order to render output, use the keyword return
{} // <-- where all the info is contained
= getMilk(4); // <-- whatever is returned in the function becomes the right hand side of the function call
let change = getMilk(4); // <-- we can use the output and assign it to a variable (change)

/// Math.pow() ///
/// Math.round() ///

//write a function that calculates the bmi, with a rounded number
// formula is weight/height^2
// return the rounded result of the calculation 

/// pseudo code ///
// function bmicalc will use (height and weight) to calc bmi
// we need to set the bmi variable so let bmi =
// on the right side i need to do the calculation weight / height squared 
// right side: = weight / Math.pow(thing to be pow'd, how many pows);
// I will need to return the result but I want to round it
// so: return Math.round(bmi) <-- because I am using the calculated bmi

/// the code ///
function bmiCalc(height, weight) {
  let bmi = weight / Math.pow(height, 2);
  return Math.round(bmi);
}

bmiCalc(65, 225);

