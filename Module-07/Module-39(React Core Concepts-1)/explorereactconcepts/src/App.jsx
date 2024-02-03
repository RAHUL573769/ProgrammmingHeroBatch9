import Person from "./Components/Person";
import Student from "./Components/Student";
import Todo from "./Components/Todo";
import { actors, student } from "./Components/props";
import Actor from "./Components/Actor";

function App() {
  const taskProps = {
    text: "Ami Ghumabo"
  };
  return (
    <>
      <Person></Person>

      <Student student={student}></Student>

      <Student student={student}></Student>

      <Todo taskProps={taskProps}></Todo>
      <Actor actors={actors}></Actor>
    </>
  );
}

export default App;
