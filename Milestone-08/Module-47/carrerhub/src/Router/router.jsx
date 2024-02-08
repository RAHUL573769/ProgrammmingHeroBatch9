import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";

import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import SingleJobs from "../Components/SingleJobDetails/SingleJobs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/job/:id",
        //  ,               // loader: () => {
        //         //   fetch("../../public/jobs.json");
        //         // }
        loader: () => fetch("../jobs.json"),
        element: <SingleJobs></SingleJobs>
        // loader: () => {
        //   fetch("../../public/jobs.json");
        // }
      }
    ]
  }
]);
