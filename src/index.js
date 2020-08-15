const PhoneNumber = require("./PhoneNumber");

const myPhoneNumber = PhoneNumber.of({
  numb: "123456789",
  ind: "+351",
});

if (!myPhoneNumber.isValid()) {
  const message = myPhoneNumber.value.value.message;
  // throw new Error(message);
  console.log(`WILL THROW: ${myPhoneNumber.getErrorMessage()}`);
}

// // SCENARIO 1 - call prototype function
// console.log(myPhoneNumber.fullSentence());

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

// SCENARIO 6 - objects with same value
// const secondPhoneNumber = PhoneNumber.of({
//   numb: "123456789",
//   ind: "+351",
// });
// console.log(myPhoneNumber.equals(secondPhoneNumber));

// SCENARIO 7 - objects with same value
// const thirdPhoneNumber = PhoneNumber.of({
//   numb: "987654321",
//   ind: "+351",
// });
// console.log(myPhoneNumber.equals(thirdPhoneNumber));