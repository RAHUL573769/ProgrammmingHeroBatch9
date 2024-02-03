/* eslint-disable no-unused-vars */
function App() {
  function handleClick() {
    console.log("Hi");
  }

  const handleClick1 = () => {
    console.log("Hi");
  };
  return (
    <>
      <h1>React Core Concepts-2</h1>
      <button onClick={handleClick}>Click Here</button>
    </>
  );
}

export default App;
