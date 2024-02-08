import { createBrowserRouter } from "react-router-dom";

import HomePage from "../Components/HomePage/HomePage";
import Navbar from "../Components/Navbar/Navbar";
import About from "./../Components/About/About";
import Users from "../Components/Users/Users";
import UserDetails from "../Components/Users/UserDetails";
import ErrorPage from "../ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/users",
    loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
    element: <Users></Users>
  },

  {
    path: "/users/:id",
    loader: ({ params }) =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
    element: <UserDetails></UserDetails>
  },

  {
    path: "/home",
    element: <HomePage></HomePage>,
    children: [
      {
        path: "about",
        element: <About></About>
      }
    ]
  },
  {
    path: "/about",
    element: <div>This is About Page</div>
  }
]);
