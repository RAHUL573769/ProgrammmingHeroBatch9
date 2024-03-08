/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const handleForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const users = {
      email,
      password
    };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(users)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Inside Post", data);

        const newUsers = [...users, data];
        setUsers(newUsers);
        form.reset();
      });
  };
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });
  return (
    <div>
      <h1>User Management System {users.length}</h1>\
      <form onSubmit={handleForm} action="" method="post">
        <h1>Name</h1>
        <input type="text" name="name" id="" />
        <br />
        <h1>Email</h1>
        <input type="email" name="email" id="" />
        <h1>Password</h1>
        <input type="password" name="password" id="" />
        <br />
        <button>Submit</button>
      </form>
      {users.map((user) => {
        {
          console.log(user);
          <ul>
            <li>Email:{user.email}</li>
          </ul>;
        }
      })}
    </div>
  );
}

export default App;
