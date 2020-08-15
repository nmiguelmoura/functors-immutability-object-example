const Something = require("../Functors/Something");
const Nothing = require("../Functors/Nothing");
const BaseObject = require("./BaseObject");
const deepFreeze = require("../utils/deepFreeze");
const { isObject } = require("../utils/validators");
const FirstName = require("./FirstName");
const PhoneNumber = require("./PhoneNumber");

const Person = function (value) {
  this.value = Something.of(value).validate(isObject);

  const firstName = FirstName.of(value.firstName);
  if (!firstName.isValid()) {
    this.value = Nothing.of(
      `First name invalid: ${firstName.getErrorMessage()}`
    );
    return deepFreeze(this);
  }

  const phoneNumber = PhoneNumber.of(value.phoneNumber);
  if (!phoneNumber.isValid()) {
    this.value = Nothing.of(
      `Phone number invalid: ${phoneNumber.getErrorMessage()}`
    );
    return deepFreeze(this);
  }

  this.value = Something.of({
    firstName,
    phoneNumber,
  });
  return deepFreeze(this);
};

Person.prototype = { ...BaseObject.prototype, ...Person.prototype };

Person.prototype.fullSentence = function () {
  const { firstName, phoneNumber } = this.getValue();

  const formattedName = firstName.value
    .map((val) => val.toUpperCase())
    .map((val) => val.split(""))
    .map((val) => val.join(".")).value;

  return `My name is ${formattedName} and my phone number is ${phoneNumber.fullNumber()}`;
};

Person.prototype.equals = function (other) {
  const {
    firstName: thisFirstName,
    phoneNumber: thisPhoneNumber,
  } = this.getValue();
  const {
    firstName: otherFirstName,
    phoneNumber: otherPhoneNumber,
  } = other.getValue();
  return (
    thisFirstName.equals(otherFirstName) &&
    thisPhoneNumber.equals(otherPhoneNumber)
  );
};

Person.prototype.serialize = function () {
  const { firstName, phoneNumber } = this.getValue();

  return {
    firstName: firstName.getValue(),
    phoneNumber: phoneNumber.getValue(),
  };
};

Person.of = function (value) {
  return new Person(value);
};

module.exports = Person;
