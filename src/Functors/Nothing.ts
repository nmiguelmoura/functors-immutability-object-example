export const Nothing = function (value) {
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