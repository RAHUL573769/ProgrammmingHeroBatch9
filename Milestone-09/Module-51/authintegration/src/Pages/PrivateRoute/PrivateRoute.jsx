/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

/* eslint-disable react/prop-types */
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-ball loading-xs"></span>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
