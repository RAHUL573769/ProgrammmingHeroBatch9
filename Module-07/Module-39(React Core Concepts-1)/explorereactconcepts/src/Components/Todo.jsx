/* eslint-disable react/prop-types */

const isDone = false;
const Todo = ({ taskProps }) => {
  console.log(taskProps);
  return (
    <div>
      <h1>{taskProps.text}</h1>

      {/* conditional  rendering 3 */}

      <h1>{isDone ? "Finished" : "Left"}</h1>

      {/* conditional  rendering 4 */}
      <h1>Task is {(isDone && "Finished") || "Left"}</h1>
    </div>
  );
};

export default Todo;
