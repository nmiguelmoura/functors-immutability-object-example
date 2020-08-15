const Something = require("../Functors/Something");
const BaseObject = require("./BaseObject");
const deepFreeze = require("../utils/deepFreeze");
const { isString } = require("../utils/validators");

const FirstName = function (value) {
  this.value = Something.of(value).validate(isString);

  return deepFreeze(this);
};

FirstName.prototype = { ...BaseObject.prototype, ...FirstName.prototype };

FirstName.prototype.fullSentence = function () {
  return this.value
    .map((val) => `${val.ind}${val.numb}`)
    .map((val) => `The first name is ${val}`).value;
};

FirstName.prototype.equals = function (other) {
  return this.value.value === other.value.value;
};

FirstName.of = function (value) {
  return new FirstName(value);
};

module.exports = FirstName;
