'use strict';

const joeyArr = [
  'Joey',
  'Momoa',
  2022 - 1982,
  'engineer',
  ['Hannah', 'Ken', 'Tracy']
];
//-----------------------------------------------//
// ***** OBJECTS **** //
//-----------------------------------------------//
// object literal syntax
// the order of the properties does not matter
const joey = {
  firstName: 'Joey', // key : value, pairs
  lastName: 'Momoa', // <-- properties
  age: 2022 - 1982,
  job: 'Engineer',
  homies: ['Hannah', 'Ken', 'Tracy']
};

// How to pull properties from the object
console.log(joey.firstName)
// output: Joey

//**bracket notation**
console.log(joey['lastName']);

const nameKey = 'Name';
console.log(joey['first' + nameKey])

// creating an object with a prompt

const interestedIn = prompt('Hey, what do you want to know about Joey? Chose between firstName, LastName, age, job, and homies...annnd GO!');

if (joey[interestedIn]) {
  console.log(joey[interestedIn]);
} else {
  console.log('Look...stick to the choices there sparky!')
};

// How to add new props to the obj

joey.location = 'Seattle';
joey.facebook = '@joey'

// exercise //
// joey has three friends and his best friend is named Hannah

const bestFriend = joey.homies[0];
console.log(joey.firstName + ' has ' + joey.homies.length + ' friends and his best friend is named ' + `${bestFriend}` + '!');
//temperate literal
console.log(`${joey.firstName} has ${joey.homies.length} friends and his BEST FRIEND is named ${bestFriend}!`);

//-----------------------------------------------//
// ***** OBJECT METHODS **** //
//-----------------------------------------------//

const joeys = { // joeys is the object 
  firstName: 'Joey', // key : value, pairs
  lastName: 'Momoa', // <-- properties
  age: 1982,
  job: 'Engineer',
  homies: ['Hannah', 'Ken', 'Tracy'],
  //hasDriversLicense: true,

  hasDriersLicense: true,
// you can add a function method to an object
// functions are just values

// function ex: 1
  // calcJoeyAge: function(age) {
  //   return 2022 - age;
  // }

  // function ex: 2
  calcJoeyAge: function () {
    console.log(this); // <--- *this* points directly to the variable calling the calcAge method // which is joeys
    return 2030 - this.age // <--- this.age/ think of this as pulling the value using the key of age from the object joeys
  }
};

console.log(joey.calcJoeyAge()); // this will output the exact same as function ex: 1
//console.log(joeys.calcJoeyAge(1982));

//-----------------------------------------------//
// ***** CODE CHALLENGE **** //
//-----------------------------------------------//

// return the following using two methods on an object
// "Joey is a 52 year old engineer and he has a drivers license."
// also include "does NOT have a Drivers License" if the hasDriversLicense value is falsy

const josepi = {
  firstName: 'Joey',
  lastName: 'Momoa',
  born: 1982,
  job: 'engineer',
  hasDriversLicense: true,
  license: function() {
    if (this.hasDriversLicense === true) {
      return 'Drivers License'
    } else {
      return 'Does NOT have a drivers License!'
    }
  },//<-- do NOT forget to add your commas --You are still in an object
    joeysAge: function() {
      return 2034 - this.born;
    }
}

console.log(`${josepi.firstName} is a ${josepi.joeysAge()} year old ${josepi.job} and he does have a ${josepi.license()}.`)

//-----------------------------------------------//
// ***** CODE CHALLENGE **** //
//-----------------------------------------------//

// - for each, create an object with props: full name mass height
// - create a  calcBMI method
// - log the higher BMI "John's BMI (28.3) is higher than Marks (23.9)!"
// - TEST DAY: Mark weights 78 kg and is 4.69m tall
// john is 92 kg 1.95m tall

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  bmi: function() {
    return this.mass / (this.height * this.height);
  }
}

console.log(`${john.firstName} BMI ${john.bmi()} is higher than Marks 23.9!`);

// function that maps over an array and returns the same number squared
// no negatives 

const arr = [1 , 3 , 12 , 8]

function numbersSquared () {
    arr.map(arr[i])

}

