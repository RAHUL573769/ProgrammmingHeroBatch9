// Template String

const numbers = [12, 13];
const student = {
  name: "Shakib Khan",
  age: 32
};

const about = `My name is ${student.name} age is ${numbers[0]} years old`;
console.log(about);

//Arrow function

const getFiftyFive = () => {
  return 55;
};
console.log(getFiftyFive());

const isEven = (number) => {
  return number % 2 == 0;
};

const number = isEven(12);
console.log(number);

//Rest Operator and Spread Operators

const currentNumbers = [...numbers];
console.log();
