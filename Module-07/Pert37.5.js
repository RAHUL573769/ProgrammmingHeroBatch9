const student = [
  {
    name: "Shakib Khan",
    age: 32
  }
];

const studentJson = JSON.stringify(student);
const studentObj = JSON.parse(studentJson);
console.log("Parse", studentObj);

fetch();
