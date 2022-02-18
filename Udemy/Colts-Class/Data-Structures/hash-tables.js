'use strict';

//---------------------
// *** HASH TABLES ***
//---------------------

// ** Hash Functions **
// used to convert keys ("cyan") and turn it into a valid index or number
// - Takes in data of an arbitrary size as input
// -- Converts the data to a fixed size as output
// --- it is a *fixed* size. ALWAYS

//---What Makes a Good Hash Function?--
// 1. It's fast (constant time / O(n))
// 2. Distributes things uniformly - no clusters
//   -- specific indices
// 3. *Always Deterministic*
//   -- same input yields same output

// **Simple Hash Functions**
/*
** some sample outputs **
'a'.charCodeAt(0)
--> 97
'hi'.charCodeAt(0)
--> 104
'hi'.charCodeAt(1)
--> 105
** using '- 96' gives the alphabetic ranking **
'a'.charCodeAt(0) - 96
--> 1
'd'.charCodeAt(0) - 96
--> 4
'z'.charCodeAt(0) - 96
--> 26
*/

// ** Simple Hash Example **
// some caveats:
// this one only takes strings
// not constant time
// not random enough 
function  hash(key, arrayLength) {
  let total = 0; // set a 'total' variable
  for (let char of key) { // loop through the characters in the key
    // map 'a' to 1, 'b' to 2, 'c' to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLength;
  }
  return total;
}

/* output:
hash('pink', 10); 
0
hash('orangered', 10) 
7
hash('cyan', 10) 
3
*/

// ** Improved Hash Function **

function hash(key, arrayLength) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLength;
  }
  return total;
}

//------Slight Improvement-----------------
function hash(key, arrayLength) {
  let total = 0;
  let SOME_PRIME_NUMBER = 31; // adds prime number - reduces collisions DRASTICALLY
  for (let i = 0; i < Math.min(key.length, 100); i++) { // limits key to 100 characters
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + SOME_PRIME_NUMBER + value) % arrayLength;
  }
  return total;  
}

//------Handling Collisions---------------
// Collisions are inevitable 
// 1. Separate Chaining
//  - ability to store multiple nested arrays
// 2. Linear Probing 
//  - one thing per position

// ** A Hash Table Class **

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME_NUMBER = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total + PRIME_NUMBER + value) % this.keyMap.length;
    }
    return total;
  }
}

// ** Hash Methods **
// Set
//  - accepts a key and a value
//  - hashes the key
//  - stores key-value pair in hash table via separate chaining (in a nested structure)
// Get
//  - accepts a key
//  - hashes the key
//  - retrieves the key-value pair (value) in the hash table
// If no value at all - return undefined 

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME_NUMBER = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total + PRIME_NUMBER + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    // return index <-- use this to test the code

    // this adds a check
    if (!this.keymap[index]) {
    // checking to see if nothing is there (!this)
    this.keyMap[index] = []; // <--- this is setting the empty array (if nothing is there)
    }
    // this will push the key-value pair into the parent array
    this.keyMap[index].push([key, value]);
    
    // what it looks like //
    // [, , , , , , , ] <---we have an empty table
    // if there is nothing there we add an array
    // [, , ,[[key, value]] , , , , ] <---if there is nothing there
    // if there IS something there, we nest our array
    // [, , ,[[key, value], [key, value]] , , , , ] <---if there is something there
  }
  get(key) {
    let index = this._hash(key); // hash the key
    if (this.keyMap[index]) { // check the index - if empty, return undefined 
      for (let i = 0; i < this.keyMap[index].length; i++) { // loop over the keyMap
        if (this.keyMap[index][i][0] === key) { // is the key matching my key?
          return this.keyMap[index][i][1]; // return the value I am looking for
        }
      }
    }
    return undefined; // <--returns if there is nothing in the keyMap
  }
}

// let ht = new HashTable(); <--- ran with line 140 for testing
// ht.set('hello world', 'goodbye!!')
// output:
// 11

// ** Hash Table Adding Keys/Values **
// ----- Methods --------
// KEYS
//  - loops through the hash table array and returns an array of keys in the table
//  
// VALUES
//  - Same as keys but with values

// --But what about duplicate values?--


class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME_NUMBER = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total + PRIME_NUMBER + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keymap[index]) {
    this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key); 
    if (this.keyMap[index]) { 
      for (let i = 0; i < this.keyMap[index].length; i++) { 
        if (this.keyMap[index][i][0] === key) { 
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  // ** Implements Keys **
  keys(){
    let keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArray.includes(this.keyMap[i][j][0])) { // set to 0, thats where the keys live
            keysArray.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArray;
  }
  // ** Implements Values **
  // Do this first because this is where we worry about duplicate data
  values() {
    let valuesArray = []; // <-- sets the empty array for values storage
    for (let i = 0; i < this.keyMap.length; i++) { // loops over the entire keyMap
      if (this.keyMap[i]) { // this is checking to see if anything is there
        console.log(this.keyMap[i]); // run this to get a peek at the hash table contents
        for (let j = 0; j < this.keyMap[i].length; j++) { // this.keyMap[i] refers to each subArray at that index
          
          // ** before we push lets check for duplicate values **
          if (!valuesArray.includes(this.keyMap[i][j][1])) { //if it does NOT include the value (!)
          // push the value
          valuesArray.push(this.keyMap[i][j][1]); //keyMap[i][j] will show everything
          // using [1] isolates the value to return
          }
        }
      }
    }
    return valuesArray;
  }
}
