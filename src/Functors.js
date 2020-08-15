const axios = require("axios");

const Nothing = function (value) {
  this.value = value;
};

Nothing.of = function (value) {
  return new Nothing(value);
};

Nothing.prototype.map = function (fn) {
  return this;
};

Nothing.prototype.validate = function (fn) {
  return this;
};

const Some = function (value) {
  this.value = value;
};

Some.of = function (value) {
  return new Some(value);
};

Some.prototype.isNothing = function () {
  return this.value === null || this.value === undefined;
};

Some.prototype.map = function (fn) {
  return this.isNothing()
    ? Nothing.of({
        message: `Can't apply the function because value is nothing: ${fn.toString()}`,
      })
    : Some.of(fn(this.value));
};

Some.prototype.validate = function (fn) {
  return !this.isNothing() && fn(this.value)
    ? this
    : Nothing.of({
        message: `The value does not pass validation: ${fn.toString()}`,
      });
};

module.exports = {
  Some,
  Nothing,
};
