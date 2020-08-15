const PhoneNumber = require("./PhoneNumber");

const myPhoneNumber = PhoneNumber.of({
  numb: "123456789",
  ind: "+351",
});

if (!myPhoneNumber.isValid()) {
  // throw new Error(message);
  console.log(`WILL THROW: ${myPhoneNumber.getErrorMessage()}`);
}

// ********** GET VALUE ****************
// // SCENARIO 1 - get the stored value;
// console.log(myPhoneNumber.getValue());

// ********** USE PROTOTYPE ****************
// // SCENARIO 2 - call prototype function
// console.log(myPhoneNumber.fullSentence());

// ********** USE COMPOSITION ****************
// // SCENARIO 3 - map once
// const { value: completePhone } = myPhoneNumber.value.map(
//   (val) => `${val.ind}${val.numb}`
// );
// console.log(completePhone);

// // SCENARIO 4 - chain map
// const { value: fullSentence } = myPhoneNumber.value
//   .map((val) => `${val.ind}${val.numb}`)
//   .map((val) => `The complete phone number is ${val}`);
// console.log(fullSentence);

// // SCENARIO 5 - somewhere you get a null value
// const anotherFullSentence = myPhoneNumber.value
//   .map((val) => `${val.ind}${val.numb}`)
//   .map(() => null)
//   .map((val) => `The complete phone number is ${val}`);
// console.log(anotherFullSentence);

// ********** IMMUTABILITY ****************
// // SCENARIO 6 - its immutable
// console.log(myPhoneNumber.value);
// myPhoneNumber.value.value.numb = "123";
// console.log(myPhoneNumber.value);
// myPhoneNumber.value.value = "123";
// console.log(myPhoneNumber.value);
// myPhoneNumber.value = "123";
// console.log(myPhoneNumber.value);
// myPhoneNumber.test = "123";
// console.log(myPhoneNumber.value);

// SCENARIO 7 - getValue also returns immutable
// const value = myPhoneNumber.getValue();
// console.log(value);
// value.numb = "123";
// value.ind = "456";
// value.test = "hello";
// console.log(value);

// ********** COMPARE OBJECTS ****************
// SCENARIO 8 - objects with same value
// const secondPhoneNumber = PhoneNumber.of({
//   numb: "123456789",
//   ind: "+351",
// });
// console.log(myPhoneNumber.equals(secondPhoneNumber));

// SCENARIO 9 - objects with same value
// const thirdPhoneNumber = PhoneNumber.of({
//   numb: "111111111",
//   ind: "+351",
// });
// console.log(myPhoneNumber.equals(thirdPhoneNumber));
