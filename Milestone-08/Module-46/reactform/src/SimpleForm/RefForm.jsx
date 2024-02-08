import { useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(" ");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input ref={nameRef} type="text" name="name" id="" />

        <br />
        <input type="email" name="email" id="" />

        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
