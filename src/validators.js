const isObject = (val) => typeof val === "object";

const isString = (val) => typeof val === "string";

const isAllDigits = (val) => {
  const reg = new RegExp(/^\d+$/);
  return reg.test(val);
};

const isFromPortugal = (val) => {
  return val === '+351';
};

module.exports = {
  isObject,
  isString,
  isAllDigits,
  isFromPortugal
};