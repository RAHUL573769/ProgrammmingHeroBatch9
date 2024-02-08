import { useInput } from "../hooks/useInputState";

const HookForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [name, handleChange] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formDta", name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input value={name} type="text" name="name" id="" />

        <br />
        <input type="email" name="email" id="" />

        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
