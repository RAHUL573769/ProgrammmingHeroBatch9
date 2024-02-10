/* eslint-disable no-unused-vars */
import { sendPasswordResetEmail } from "firebase/auth";
import { useRef } from "react";
import { auth } from "../../Firebase/Firebase.iit";

const Login = () => {
  const emailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.email.value;

    const password = e.target.password.value;
    console.log(name, password);
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    console.log("eMAIL rEF", email);

    if (!email) {
      console.log("Send Reset Email", email);
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent!");
        //
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ..
      });
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="mx-auto">
        <form onSubmit={handleSubmit} action="">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              name="email"
              ref={emailRef}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="submit"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>{" "}
        </form>
        <button onClick={handleForgetPassword}>Forget Password</button>
      </div>
    </div>
  );
};

export default Login;
