'use strict';

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

// The StudentProto - Object, that we created earlier is now the prototype of the 
// jay-Object. The PersonProto - Object is in turn 
const StudentProto = Object.create(PersonProto);
const jay = Object.create(StudentProto);

