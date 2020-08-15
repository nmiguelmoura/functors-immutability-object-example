const { Some } = require("./Functors");
const BaseObject = require("./BaseObject");
const deepFreeze = require("./deepFreeze");
const { isString, isAllDigits, isFromPortugal } = require("./validators");

const PhoneNumber = function (value) {
  this.value = Some.of(value)
    .validate((val) => isString(val.numb))
    .validate((val) => isAllDigits(val.numb))
    .validate((val) => isFromPortugal(val.ind));
  
  return deepFreeze(this);
};

PhoneNumber.prototype = { ...BaseObject.prototype, ...PhoneNumber.prototype };

PhoneNumber.prototype.fullSentence = function () {
  return this.value
    .map((val) => `${val.ind}${val.numb}`)
    .map((val) => `The complete phone number is ${val}`);
};

PhoneNumber.of = function (value) {
  return new PhoneNumber(value);
};

module.exports = PhoneNumber;
