import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";
import Orders from "../Pages/Orders/Orders";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/Login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        )
      }
    ]
  }
]);
