// PRIMATIVE DATS TYPES//

//----NUMBERS----// - decimals and integers
//----STRINGS----// - sequence of chars
//----BOOLEAN----// - true or false

//----UNDEFINED----// - empty value
//----NULL----// - Another empty value
//----SYMBOL--// - unique value that cannot be changed
//----BigInt----// - larger integers than number can hold

// value has a type and a variable does not 

//---- PRECEDENCE OF OPERATORS----//

//----Taking decisions: if/else statements----
const age = 16;//<---variable's age
const isOldEnough = age >= 16; //<--- argument

if (isOldEnough) { //<---if the statement is true, execute
  console.log('Yup, they are old enough to drive.')
  // emoji is command+ctrl+space 😋

} else {
  const yearsLeft = 16 - age;
  console.log(`something something ${yearsLeft}`)
}

// The if else control structure
/*
if() {

} else {


}
*/

// any variable declared inside the code block, will not be accessible outside.
// declared outside is globally accessible
const birthYear = 1982;

let century; // < declared globally
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);



