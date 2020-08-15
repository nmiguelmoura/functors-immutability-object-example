const Something = require("../Functors/Something");
const BaseObject = require("./BaseObject");
const deepFreeze = require("../utils/deepFreeze");
const {
  isObject,
  isString,
  isAllDigits,
  isFromPortugal,
} = require("../utils/validators");

const PhoneNumber = function (value) {
  this.value = Something.of(value)
    .validate(isObject)
    .validate((val) => isString(val.numb))
    .validate((val) => isAllDigits(val.numb))
    .validate((val) => isFromPortugal(val.ind));

  return deepFreeze(this);
};

PhoneNumber.prototype = { ...BaseObject.prototype, ...PhoneNumber.prototype };

PhoneNumber.prototype.fullSentence = function () {
  return this.value
    .map((val) => `${val.ind}${val.numb}`)
    .map((val) => `The complete phone number is ${val}`).value;
};

PhoneNumber.prototype.equals = function (other) {
  return (
    this.value.map((val) => `${val.ind}${val.numb}`).value ===
    other.value.map((val) => `${val.ind}${val.numb}`).value
  );
};

PhoneNumber.of = function (value) {
  return new PhoneNumber(value);
};

module.exports = PhoneNumber;
