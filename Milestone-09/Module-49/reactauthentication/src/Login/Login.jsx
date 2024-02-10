import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../FirebaseInit/FirebaseInit";
import { useState } from "react";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
        const user = result.user.displayName;

        const image = result.user.photoURL;
        setImage(image);
        setUser(user);
      })
      .catch((error) => console.log(error));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out Successfully Done");
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };
  return (
    <div>
      <button onClick={handleSignIn}>Google Sign In</button>
      {user && <h1>User Name:{user}</h1>}

      <img src={image} alt="" />

      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Login;
