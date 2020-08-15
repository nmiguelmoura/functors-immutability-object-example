const { Some } = require("./Functors");
const deepFreeze = require("./deepFreeze");
const { isString, isAllDigits, isFromPortugal } = require("./validators");

const PhoneNumber = function (value) {
  this.value = Some.of(value)
    .validate((val) => isString(val.numb))
    .validate((val) => isAllDigits(val.numb))
    .validate((val) => isFromPortugal(val.ind));
};

PhoneNumber.of = function (value) {
  return deepFreeze(new PhoneNumber(value));
};

PhoneNumber.prototype.fullSentence = function () {
  return this.value
    .map((val) => `${val.ind}${val.numb}`)
    .map((val) => `The complete phone number is ${val}`);
};

module.exports = PhoneNumber;
