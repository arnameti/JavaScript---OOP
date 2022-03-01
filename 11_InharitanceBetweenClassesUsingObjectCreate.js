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
// jay-Object. The PersonProto - Object is in turn the Prototype of StudentProto.
// And so therefore, PersonProto is a parent prototype of jay, which means that it's in its
// prototype chain.

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and i study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();




