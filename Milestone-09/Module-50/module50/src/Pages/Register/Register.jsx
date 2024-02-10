import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.iit";
import { useState } from "react";

/* eslint-disable no-unused-vars */
const Register = () => {
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checked = e.target.checked;
    console.log(checked);
    if (password.length < 6) {
      setError("Password Must Be at-lest 6 characters long");
      return;
    }
    // } else if (
    //   '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[!@#$%^&*()-=_+{};:"<>?/|.,`~]).{8,}$'.test(
    //     password
    //   )
    // ) {
    //   setError("Password Structure fialed");
    //   return;
    // }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed up

        console.log(result);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setError(errorMessage);
        // ..
      });

    // console.log(name, email, password);
  };
  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="mx-auto">
          <form onSubmit={handleRegister} action="">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                name="email"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Do=not Show Password" : "Show Password"}
              </span>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Accept Our Terms and Conditions</label>
              </div>
              <input
                type="submit"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              {error && <p className="text-red-700">{error}</p>}
            </label>{" "}
          </form>
        </div>
      </div>
      );
    </div>
  );
};

export default Register;
