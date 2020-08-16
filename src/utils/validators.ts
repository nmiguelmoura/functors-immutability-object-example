export const isObject = (val: unknown): boolean => typeof val === "object";

export const isString = (val: unknown): boolean => typeof val === "string" && val !== "";

export const isAllDigits = (val: string): boolean => {
  const reg = new RegExp(/^\d+$/);
  return reg.test(val);
};

export const isFromPortugal = (val: string): boolean => {
  return val === '+351';
};