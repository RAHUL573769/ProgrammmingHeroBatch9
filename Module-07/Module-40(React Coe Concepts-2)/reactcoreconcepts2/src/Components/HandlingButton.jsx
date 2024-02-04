/* eslint-disable no-unused-vars */
import React from "react";

const HandlingButton = () => {
  function handleClick() {
    console.log("Hi");
  }

  const handleClick1 = () => {
    console.log("Hi");
  };
  const handleClick1WithParams = (id) => {
    console.log(id);
  };
  return (
    <div>
      <h1>Handling Buttons</h1>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={() => handleClick}>Click Here Again</button>
      <button onClick={() => handleClick1WithParams(2)}>
        Click Here Again With Params
      </button>
    </div>
  );
};

export default HandlingButton;
