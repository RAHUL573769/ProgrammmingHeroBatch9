import Person from "./Components/Person";
import Student from "./Components/Student";
import { student } from "./Components/props";

function App() {
  return (
    <>
      <Person></Person>

      <Student student={student}></Student>

      <Student student={student}></Student>
      <Student student={student}></Student>
    </>
  );
}

export default App;
