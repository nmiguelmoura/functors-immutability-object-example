import { Something } from "../Functors/Something";
import { BaseObject } from "./BaseObject";
import { deepFreeze } from "../utils/deepFreeze";
import {
  isObject,
  isString,
  isAllDigits,
  isFromPortugal,
} from "../utils/validators";

const PhoneNumber = function (value): void {
  this.value = Something.of(value)
    .validate(isObject)
    .validate((val) => isString(val.numb))
    .validate((val) => isAllDigits(val.numb))
    .validate((val) => isFromPortugal(val.ind));
};

PhoneNumber.prototype = { ...BaseObject.prototype, ...PhoneNumber.prototype };

PhoneNumber.prototype.getFullNumber = function (): string {
  return this.map((val) => `${val.ind}${val.numb}`).value;
};

PhoneNumber.prototype.getSentence = function (): string {
  return this.map((val) => `${val.ind}${val.numb}`).map(
    (val) => `My complete phone number is ${val}`
  ).value;
};

PhoneNumber.prototype.equals = function (other): boolean {
  return (
    this.map((val) => `${val.ind}${val.numb}`).value ===
    other.map((val) => `${val.ind}${val.numb}`).value
  );
};

export default {
  of: (value) => deepFreeze(new PhoneNumber(value))
};
