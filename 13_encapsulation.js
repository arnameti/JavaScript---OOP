'use strict';

// 1) Public fields
// 2) Private Fields
// 3) Public methods
// 4) Private methods

class Account {
  // 1) Public fields
  locale = navigator.language;

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // 3) Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);




// 1) Public fields (fields are on the instances)
// These are two properties that are going to be on all the objects, that
// we create with this class. We do not pass any of the values here in.
// So this array and the locale will always be set for all the instances.
//  So these public fields are going to be present on all the instances, that we are
// creating though the class. So they are not on the prototype.

// 2) Private fields (fields are on the instances)
