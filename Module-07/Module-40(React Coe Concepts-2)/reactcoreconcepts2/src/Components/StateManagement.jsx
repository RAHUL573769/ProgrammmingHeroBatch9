import { useState } from "react";

const StateManagement = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  };
  const handleCounterDecrease = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>StateManagement in React-js</h1>
      <button onClick={handleCounter}>Click To Add</button>
      <button onClick={handleCounterDecrease}>Click to Decrease</button>

      <h3>Counter App {counter}</h3>
    </div>
  );
};

export default StateManagement;
