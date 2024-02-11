/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/FirebaseInit";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sIGNOUT hNADLED");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const navItems = (
    <>
      {" "}
      <li>
        <Link to="/login">Login </Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/orders">Orders</Link>
      </li>
      {user && (
        <li>
          <Link to="/orders">Profile</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? <>{user.email}</> : <></>}

          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
