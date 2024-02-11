import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Homepage from "../HomePage/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>
      }
    ]
  }
]);
