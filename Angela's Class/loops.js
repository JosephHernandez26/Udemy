//////////
//LOOPS//
/////////

// while loops will run infinitely until it reaches a 'false'
// it will crash the page with an 'infinite loop'

//notes://
// a while loop is checking for a STATE
// basically it will continue to run while a program is in a specified state

/// fizzbuzz with a while loop ///

function fizzbuzz() {

  while(count <= 26) { // <-- while loop will run 26 times
  
    if (count % 3 === 0 && count % 5 === 0) {
    output.push('fizzbuzz');
  }
    else if (count % 3 === 0) {
    output.push('fizz');
  }
    else if (count % 5 === 0) {
    output.push('buzz');
  } 
    else {
    output.push(count)
  }
  count++; // <-- make sure these are in the main function block
}
  console.log(output);
}
//output:
// 26 entries that match the if's

//code challenge //

// write a function using a while loop that prints out
// the lyrics to 99 bottles of beer on the wall

/// FOR LOOPS ///

//NOTES://
// the for loop will iterate

// How does the thing work?
for (i = 0//<- this is defining the starting point for the loop
// so we are starting at index 0
for (i = 0; i < 2//<- this is defining the end point
// so we are ending when i is less than two
for (i = 0; i < 2; i++)//<- what is the change?
// in this case we are adding one
// Example //
for (i = 0; i < 2; i++) {
  //do something in here 
}

// fizzbuzz with a for loop //

function fizzbuzz() {

  for (count = 0; count < 26; count++) { // <-- the for loop consolidates
  
    if (count % 3 === 0 && count % 5 === 0) {
    output.push('fizzbuzz');
  }
    else if (count % 3 === 0) {
    output.push('fizz');
  }
    else if (count % 5 === 0) {
    output.push('buzz');
  } 
    else {
    output.push(count)
  }
}
  console.log(output);
}

// code challenge //
// replicate the fibonacci sequence
// create a function (fibonacciGen(n))

function fibonacciGen(n) {
  let output = [];
  
  if (output === 0) {
    output = [0];
  }
  else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];

    for (let i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}
output = fibonacciGen(13);
console.log(output);

