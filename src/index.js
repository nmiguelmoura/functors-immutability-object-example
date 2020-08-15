const PhoneNumber = require("./PhoneNumber");
const { Nothing } = require("./Functors");

const myPhoneNumber = PhoneNumber({
  numb: "123456789",
  ind: "+351",
});

if (myPhoneNumber instanceof Nothing) {
  // throw new Error(correctPhoneFormat.value.message);
  console.log(`WILL THROW: ${myPhoneNumber.value.message}`);
}

// // SCENARIO 1 - map once
// const { value: completePhone } = myPhoneNumber.map(
//   (val) => `${val.ind}${val.numb}`
// );
// console.log(completePhone);

// // SCENARIO 2 - chain maps
// const { value: fullSentence } = myPhoneNumber
//   .map((val) => `${val.ind}${val.numb}`)
//   .map((val) => `The complete phone number is ${val}`);
// console.log(fullSentence);

// // SCENARIO 3 - somewhere you get a null value
// const { value: anotherFullSentence } = myPhoneNumber
//   .map((val) => `${val.ind}${val.numb}`)
//   .map(() => null)
//   .map((val) => `The complete phone number is ${val}`);
// console.log(anotherFullSentence);

// // SCENARIO 4 - its immutable
// console.log(myPhoneNumber.value);
// myPhoneNumber.value.numb = "123";
// console.log(myPhoneNumber.value);
// myPhoneNumber.value = "123";
// console.log(myPhoneNumber.value);

// // SCENARIO 5 - results of map also immutable
// const completePhoneObject = myPhoneNumber.map(
//   (val) => `${val.ind}${val.numb}`
// );
// console.log(completePhoneObject);
// completePhoneObject.value = "123";
// console.log(completePhoneObject);
