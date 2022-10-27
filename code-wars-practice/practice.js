// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and Mark like this"

//-----solution------//

if (Array.isArray(names)) {
  return names.length > 3
    ? names.slice(0, 2).join(', ') +
        ' and ' +
        (names.length - 2) +
        ' others like this'
    : names.length === 3
    ? names.slice(0, 2).join(', ') + ' and ' + names[2] + ' like this'
    : names.length === 2
    ? names.join(' and ') + ' like this'
    : names.length === 1
    ? names[0] + ' likes this'
    : 'no one likes this';
} else {
  throw 'params must be in an array1';
}

// creating a regular function
/* function doesThings() {
  doSomething;
  return somethingElse;
}
doesThings();
/*  

creating an arrow function

same as the previous 2 but with arguments

looping over an array with a for loop

looping an array with forEach

traversing a linked list

traversing a binary tree 
  
  */
