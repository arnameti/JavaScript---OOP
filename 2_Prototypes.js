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

// PROTOTYPES
// Each and every function in JavaScript automatically has a property called prototype
// and that includes of course constructor functions. Every object that's created by
// a certain constructor function, will get access to all the methods and properties that
// we define on the constructors prototype property.

// All the objects that are created through the Person - constructor function, will
// inherit, so they will get access to all the methods and properties that are defined
// on this prototype property.
console.log(Person.prototype);

// Each object created by this constructor function will now get access to all the methods and properties
// of this prototype property.
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// We can use the calcAge() - method on the jonas - object even though it is not really
// on the object itself.
// That solves the problem, when we added the calcAge()-method directly to the each of the objects.
// With this method there exists only one copy of this function, but all of the objects that are created
// created using the Person - constructor function can basically reuse this function on themselves.
// The this-keyword of course, in each of them is always set to the object that is calling
// the method.
// So the jonas-object and the matilda-object are somehow connected to the person. That's why they can have access to this method,
// that is located inside the prototype property of person. This works, because any object always
// has access to the methods and properties from it's prototype. And the prototype of Jonas and Matilda
// is person.prototype. 
jonas.calcAge();
matilda.calcAge();

// This shows the prototype of jonas. The prototype of the jonas-object is essentially
// the prototype property of the constructor function.
console.log(jonas.__proto__);
// The prototype of the jonas-object is essentially the prototype property of the constructor function.
// Person.prototype is actually not the prototype of person, but instead, it is what's
// is going to be used as the prototype of all the objects that are created with the person-constructor=function.
console.log(Person.prototype);

console.log(jonas.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// Maybe it should be called .prototypeOfLinkedObjects

// Where does this __proto__ property on the jonas - object actually come from???
// -- The new-Operator contains the step number 3, which links the empty new object
// to the prototype. The step number 3 creates this proto property. So it creates this proto
// property and it sets it's value to the prototype property of the function that is being called.
// So it sets the proto property on the object to the prototype property of the constructor function.
// And this is how JavaScript knows internally that the Jonas object is connected to 
// Person.prototype
console.log(jonas.__proto__);

// We can also set properties on the prototype, not just methods. 
// Now all the objects have this property species in common. 
// Both of these objects will inherit so now they have access to this property from the prototype.
// When you take a look at this objects this property is not really directly in the object.
// So it's not it's own property. Own properties are only the ones that are declared directly
// on the object itself, so not including the inherited properties. 
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName')); // true
// It is false because this property is not really inside of the Jonas object.
// It simply has access to it, because of its prototype. So because it is in the 
// prototype property of person.
console.log(jonas.hasOwnProperty('species')); // false