const { Nothing } = require("./Functors");

const BaseObject = function () {};

BaseObject.prototype.isValid = function () {
  return this.value instanceof Nothing;
};

module.exports = BaseObject;