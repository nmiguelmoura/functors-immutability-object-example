const isString = (val) => typeof val === "string";

const isAllDigits = (val) => {
  const reg = new RegExp(/^\d+$/);
  return reg.test(val);
};

const isFromPortugal = (val) => {
  return val === '+351';
};

module.exports = {
  isString,
  isAllDigits,
  isFromPortugal
};