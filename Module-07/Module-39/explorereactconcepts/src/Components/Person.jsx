const Person = () => {
  const person = {
    name: "Rahul",
    age: 23
  };
  return (
    <div>
      <h1>I am a Person</h1>
      <h4>
        My Name is {person.name} Age is {person.age}
      </h4>
    </div>
  );
};

export default Person;
