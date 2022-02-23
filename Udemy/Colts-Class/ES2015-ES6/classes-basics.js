'use strict';
//--------------------------------------------------
// **Defining the Class**
// - this is simply a pattern for our data
//--------------------------------------------------

//++++++++++++++++++++++++++++++++
// **  class DataStructure() {
// **    constructor() {
      //what default properties should the class have?
//   }
// **   someInstanceMethod() {
        // What should each object created from the class be able to do?
//   }
// }
//++++++++++++++++++++++++++++++++

//++++++++++++++++++++ **PLEASE NOTE** ++++++++++++++++++++++++++++++++++++++
// ** The keyword 'this' inside all of the instance methods and constructors,
// ** refers to the object created from the class (aka 'an instance').
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName; // inside a constructor the 'this' refers to
    this.lastName = lastName;   // the individual instance of the class
    this.educationLevel = year;
  }
}

// Instantiation of students
let firstStudent = new Student ('Joey', 'Hernandez'); // firstStudent is an individual instance of a class
let secondStudent = new Student ('Hannah', 'Lux');

//--------------------------------------------------
// ** Instance Methods **
// These provide functionality that pertains to a single instance of a class 
// The below example is a single instance of a Student
//--------------------------------------------------


class Student {
  constructor(firstName, lastName, nickName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
    this.absences = 0; // adding absences and setting it to 0
  }
  fullName() { // this is an instance method
    return `Your Full Name is listed as ${this.firstName} ${this.lastName} and you are known as ${this.nickName}`;
  }
  // An instance method for absences
  // the method will reference the 'this' instance in the constructor
  markAbsent() {
    this.absences += 1; // this increments the absences which was initially set to zero
    if (this.absences >= 3) { // this is a conditional if statement that checks the absences counted
      return `${this.firstName} unfortunately you have missed too many classes, and are hereby expelled.`
    }
    return `${this.firstName} ${this.lastName} has ${this.absences} absences on their record.`
  }
}

let newStudent = new Student ('Hannah','Lux', 'Pixie');
// Running the method: 
newStudent.fullName()
// Output: "Your Full Name is listed as Hannah Lux and you are known as Pixie"
newStudent.markAbsent();
// output:
//'Hannah Lux has 1 absence(s) on their record.'
newStudent.markAbsent();
// output:
//'Hannah Lux has 2 absence(s) on their record.'
newStudent.markAbsent();
// output:
//'Hannah unfortunately you have missed too many classes, and are hereby expelled.'

//--------------------------------------------------
// ** An Instance Method That Takes An Argument **
//--------------------------------------------------

class Student {
  constructor(firstName, lastName, nickName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
    this.absences = 0;
    this.grades = []; //Adds a new empty array for grades
  }
  fullName() { 
    return `Your Full Name is listed as ${this.firstName} ${this.lastName} and you are known as ${this.nickName}`;
  }
  
  markAbsent() {
    this.absences += 1; 
    if (this.absences >= 3) { 
      return `${this.firstName} unfortunately you have missed too many classes, and are hereby expelled.`
    }
    return `${this.firstName} ${this.lastName} has ${this.absences} absence(s) on their record.`
  }

  addGrades(grade) {
    this.grades.push(grade); // pushes the new grade passed in, into the empty array 'grades'.
    return this.grades; // returns the new, now populated array.
  }

  // take the above method and create one that 
  calculateGPA() {
    let gradePointAverage = this.grades.reduce(function(a , b){return a+b})
    return gradePointAverage / this.grades.length;
  }
}

newStudent.grades(91);
// Output:
// [91]
newStudent.grades(87);
// Output:
// [91, 87]
// running the new method:
newStudent.calculateGPA();
// Output:
// 89
