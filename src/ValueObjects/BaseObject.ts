import { Something } from "../Functors/Something";

export const BaseObject = function () {};

BaseObject.prototype.isValid = function (): boolean {
  return this.value instanceof Something;
};

BaseObject.prototype.getValue = function (): unknown {
  return this.isValid() ? this.value.value : null;
}

BaseObject.prototype.getErrorMessage = function (): string {
  return this.isValid() ? "" : this.value.value.message;
};

BaseObject.prototype.map = function (fn) {
  return this.value.map(fn);
};
