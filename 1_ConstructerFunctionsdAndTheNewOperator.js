'use strict';

const Person = function (firstName, birthYear) {
    // Instance Properties - And that's because the properties' firstName and birthYear
    // will be available on oll the instances that are created through this constructor function.
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this. Never create a function inside of a constructor function.
    // Thats because imagine we are going to create a hundred of person objects using the constructor 
    // this function. What would happen, that each of these objects would carry around this function
    // calcAge - function. If we had a thousand object, we would create a thousand copies of the
    // of this calcAge - function. That would be terrible for the performance of our code.
    // To solve this problem, we are going to use prototypes and prototype inheritance.
    this.calcAge = function() {
        console.log(2037 - this.birthYear); 
    }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda',2017);
const jack = new Person('Jack', 1975);

console.log(matilda);
console.log(jack);



// 1. New Object {} is created
// 2. function is called and the this-keyword will be set to the newly created object.
      // All this happens only because we are calling the function using the new - Operator.
// 3. This newly created object {} is linked to a prototype.
// 4. The Object that was created in the beginning is the automatically returned from the constructor function.
   // So the function automatically returns that empty object from the beginning.
   // But actually at this point the object the object no longer needs to be empty.