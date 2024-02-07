import { createBrowserRouter } from "react-router-dom";

import HomePage from "../Components/HomePage/HomePage";
import Navbar from "../Components/Navbar/Navbar";
import About from "./../Components/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>
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
