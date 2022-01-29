////// ARRAYS ///////

// write an array that prompts the user for their name
// check the array for the user's name
// if in the array, return 'welcome' if not return 'beat it'

// define array
let newArr = ['joey', 'steve', 'emily', 'jimmybob'];
// prompt user and assign response to variable 'username'
let username = prompt('whats ya name?');
// if the username exists 
if (newArr.includes(username)) {
  console.log('welcome to the thunderdome!');
  // if the username does not exist
} else {
  console.log('You are not on the list, beat it!');
}
// for (i = 0; i < newArr.length; i++) {
//   if (newArr.inculdes([i])) {
//     alert('welcome to the thunderdome!');
//   } else {
//     alert('sorry, not on the list')
//   }
// }

/// code challenge ///

// write a program that prints the numbers from 1 - 100. 
// but for the multiples of three print 'fizz' instead of the number
// for the multiples of five print 'buzz'
// for numbers which are multiples of both three and five print 'fizzbuzz'

//// try number one ///
// let output = [];
// //console.log(output);
// let count = 1;

// function fizzbuzz() {
//   count ++;

//   if ((output % 3 === 0) && (output !== 5)){ <-- args can be in one set of parens
//    output.push('fizz');
//   }   
// else if ((output % 5 === 0) && (output !== 3)){
//     output.push('buzz');
//   }
// else if ((output % 3 === 0) && (output % 5 === 0)) { <// pay attention to placement 
//     output.push('fizzbuzz'); // functions run top down 
//   } 
// else if ((output % 3 !== 0) && (output % 5 !== 0)) {
// }
// }
// console.log(output);
// return output;

// let output = [];
// let count = 1;

// function fizzbuzz() 

/// Practice number two --- passed ///
  let output = [];
  let count = 1;
  
  function fizzbuzz() {
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
    console.log(output);
  }


