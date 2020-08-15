const { Some, Nothing } = require("./Functors");

const BaseObject = function () {};

BaseObject.prototype.isValid = function () {
  return this.value instanceof Some;
};

BaseObject.prototype.getValue = function () {
  return this.isValid() ? this.value.value : null;
}

BaseObject.prototype.getErrorMessage = function () {
  return this.isValid() ? "" : this.value.value.message;
};

module.exports = BaseObject;
