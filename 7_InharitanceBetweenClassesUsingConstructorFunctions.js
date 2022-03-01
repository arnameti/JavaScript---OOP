'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// When we call the Person constructor function as a regular function call, so without using the new-Operator,
// The this-Keyword is set to undefined. We need to manually set the this-Keyword as well.
// We have to call the Person - constructor function and set the this-Keyword inside the function.
// We have to use the call-Method and we will be able to specify the this-Keyword as the first argument in this function. 
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();


console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);


console.log(mike instanceof Student);
console.log(mike instanceof Person);


Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); 