import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Hero from "../Components/Hero/Hero";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>
      }
    ]
  }
]);
