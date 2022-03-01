'use strict';

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  // Here we are transforming a method to a property
  get speedUS() {
    return this.speed / 1.6;
  }

  // We always need to take exactly one argument
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS); 
ford.accelerate();
console.log(ford.speedUS);
ford.accelerate();
ford.speedUS = 50;
console.log(ford);


