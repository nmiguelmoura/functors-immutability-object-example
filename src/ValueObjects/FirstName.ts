import { Something } from "../Functors/Something";
import { BaseObject } from "./BaseObject";
import { deepFreeze } from "../utils/deepFreeze";
import { isString } from "../utils/validators";

const FirstName = function (value): void {
  this.value = Something.of(value).validate(isString);
};

FirstName.prototype = { ...BaseObject.prototype, ...FirstName.prototype };

FirstName.prototype.getSentence = function (): string {
  return this.map((val) => `${val.ind}${val.numb}`).map(
    (val) => `The first name is ${val}`
  ).value;
};

FirstName.prototype.equals = function (other): boolean {
  return this.getValue() === other.getValue();
};

export default {
  of: (value) => deepFreeze(new FirstName(value))
};
