//1.Array Destructuring
const numbers = [12, 435];
const [x, ...y] = [12, 64634, 4353, 784];

console.log(y);

const { name } = {
  name: "Shakib Khan",
  age: 32
};

console.log(name);

const employee = {
  name: "Mezbah",
  designattion: "Developer",
  specificaion: {
    height: 13,
    weight: 67
  }
};

const { specificaion } = employee;
console.log(specificaion.weight);
