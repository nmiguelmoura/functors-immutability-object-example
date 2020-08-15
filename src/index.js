const PhoneNumber = require("./PhoneNumber");

const myPhoneNumber = PhoneNumber.of({
  numb: "123456789",
  ind: "+351",
});

if (!myPhoneNumber.isValid()) {
  // throw new Error(message);
  console.log(`WILL THROW: ${myPhoneNumber.getErrorMessage()}`);
}

// ********** USE PROTOTYPE ****************
// // SCENARIO 1 - call prototype function
// console.log(myPhoneNumber.fullSentence());

// ********** USE COMPOSITION ****************
// // SCENARIO 2 - map once
// const { value: completePhone } = myPhoneNumber.value.map(
//   (val) => `${val.ind}${val.numb}`
// );
// console.log(completePhone);

// // SCENARIO 3 - chain maps
// const { value: fullSentence } = myPhoneNumber.value
//   .map((val) => `${val.ind}${val.numb}`)
//   .map((val) => `The complete phone number is ${val}`);
// console.log(fullSentence);

// // SCENARIO 4 - somewhere you get a null value
// const { value: anotherFullSentence } = myPhoneNumber.value
//   .map((val) => `${val.ind}${val.numb}`)
//   .map(() => null)
//   .map((val) => `The complete phone number is ${val}`);
// console.log(anotherFullSentence);

// ********** IMMUTABILITY ****************
// // SCENARIO 5 - its immutable
// console.log(myPhoneNumber.value);
// myPhoneNumber.value.value.numb = "123";
// console.log(myPhoneNumber.value);
// myPhoneNumber.value.value = "123";
// console.log(myPhoneNumber.value);
// myPhoneNumber.value = "123";
// console.log(myPhoneNumber.value);
// myPhoneNumber.test = "123";
// console.log(myPhoneNumber.value);

// ********** COMPARE OBJECTS ****************
// SCENARIO 6 - objects with same value
// const secondPhoneNumber = PhoneNumber.of({
//   numb: "123456789",
//   ind: "+351",
// });
// console.log(myPhoneNumber.equals(secondPhoneNumber));

// SCENARIO 7 - objects with same value
// const thirdPhoneNumber = PhoneNumber.of({
//   numb: "111111111",
//   ind: "+351",
// });
// console.log(myPhoneNumber.equals(thirdPhoneNumber));
