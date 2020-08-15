const Something = require("../Functors/Something");

const BaseObject = function () {};

BaseObject.prototype.isValid = function () {
  return this.value instanceof Something;
};

BaseObject.prototype.getValue = function () {
  return this.isValid() ? this.value.value : null;
}

BaseObject.prototype.getErrorMessage = function () {
  return this.isValid() ? "" : this.value.value.message;
};

module.exports = BaseObject;
