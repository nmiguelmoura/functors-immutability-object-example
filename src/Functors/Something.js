const Nothing = require("./Nothing");

const Something = function (value) {
  this.value = value;
};

Something.of = function (value) {
  return new Something(value);
};

Something.prototype.isNothing = function () {
  return this.value === null || this.value === undefined;
};

Something.prototype.map = function (fn) {
  return this.isNothing()
    ? Nothing.of({
        message: `Can't apply the function because value is nothing: ${fn.toString()}`,
      })
    : Something.of(fn(this.value));
};

Something.prototype.validate = function (fn) {
  return !this.isNothing() && fn(this.value)
    ? this
    : Nothing.of({
        message: `The value does not pass validation: ${fn.toString()}`,
      });
};

module.exports = Something;