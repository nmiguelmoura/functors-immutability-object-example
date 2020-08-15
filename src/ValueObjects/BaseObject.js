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

BaseObject.prototype.map = function (fn) {
  return this.value.map(fn);
};

module.exports = BaseObject;
