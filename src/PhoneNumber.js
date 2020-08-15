const { Some } = require("./Functors");
const { isString, isAllDigits, isFromPortugal } = require("./validators");

const PhoneNumber = function (value) {
  return Some.of(value)
    .validate((val) => isString(val.numb))
    .validate((val) => isAllDigits(val.numb))
    .validate((val) => isFromPortugal(val.ind));
};

module.exports = PhoneNumber;
