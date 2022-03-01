'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function(make, speed, charge) {
    Car.call(this, make, speed)
    this.charge = charge;
}

//Link the prototypes. With Object.create a new Object will be created. It will set 
// EV.prototype to the new Object, which has a prototype Car.Prototype
EV.prototype = Object.create(Car.prototype);


EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`);
}

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();


EV.prototype.constructor = EV;
console.dir(EV.prototype.constructor);


console.dir(tesla.__proto__);
console.dir(tesla.__proto__.__proto__);


console.log(tesla instanceof Car);
console.log(tesla instanceof EV);


