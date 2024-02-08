import { useState } from "react";

const StateForm = () => {
  const [emailState, setEmail] = useState(null);
  const [nameState, setNameState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const name = e.target.name.value;
    const email = e.target.email.value;
    setEmail(email);

    console.log(emailState);
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const name = e.target.name.value;

    setNameState(name);

    console.log(nameState);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input onChange={handleInputChange} type="text" name="name" id="" />

        <br />
        <input type="email" name="email" id="" />

        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default StateForm;
