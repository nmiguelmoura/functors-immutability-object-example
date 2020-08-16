import { Something } from "../Functors/Something";
import { Nothing } from "../Functors/Nothing";
import { BaseObject } from "./BaseObject";
import { deepFreeze } from "../utils/deepFreeze";
import FirstName from "./FirstName";
import PhoneNumber from "./PhoneNumber";

const Person = function (value): void {
  const firstName = FirstName.of(value.firstName);
  if (!firstName.isValid()) {
    this.value = Nothing.of({
      message: `First name invalid: ${firstName.getErrorMessage()}`,
    });
    return;
  }

  const phoneNumber = PhoneNumber.of(value.phoneNumber);
  if (!phoneNumber.isValid()) {
    this.value = Nothing.of({
      message: `Phone number invalid: ${phoneNumber.getErrorMessage()}`,
    });
    return;
  }

  this.value = Something.of({
    firstName,
    phoneNumber,
  });
};

Person.prototype = { ...BaseObject.prototype, ...Person.prototype };

Person.prototype.getIdentity = function (): string {
  const { firstName, phoneNumber } = this.getValue();

  const formattedName = firstName
    .map((val) => val.toUpperCase())
    .map((val) => val.split(""))
    .map((val) => val.join(".")).value;

  return `My name is ${formattedName} and my phone number is ${phoneNumber.getFullNumber()}`;
};

Person.prototype.equals = function (other): boolean {
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

export default {
  of: (value) => deepFreeze(new Person(value))
};
