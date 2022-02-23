'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
console.log(matilda);

const jack = new Person('Jack', 1975);
console.log(jack);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(Person.prototype);

console.log(jonas.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

console.log(jonas.__proto__);

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

console.log(jonas.__proto__);
//Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);


// All the arrays get access to the array - methods. Each array does not contain
// all of these methods, but instead each array will inherit these methods from its
// prototype. 
const arr = [3, 6, 9, 4, 5]; // new Array == []
console.log(arr);
console.log(arr.__proto__);
// the prototype property of the constructor Array is the prototype of all the objects that are created
// by that constructor. 
console.log(arr.__proto__ === Array.prototype);

// The prototype itself is an Object
console.log(arr.__proto__.__proto__); // Object.prototype

// The filter method lives in the prototype property of the Array constructor.
// So the prototypal inheritance is a mechanism for reusing code. 
// So all of the built-in-methods have to exist only once somewhere in the JavaScript 
// engine and then all the arrays in our code get access to the functions through
// the prototype chain prototypal inheritance.q

// -- Array.prototype.filter();


Array.prototype.unique = function() {
    return [...new Set(this)];
}

const arr2 = [3, 4, 3, 4, 6, 9, 4, 5];
console.log(arr2.unique());

console.log(arr2);

