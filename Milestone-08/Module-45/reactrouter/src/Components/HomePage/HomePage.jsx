import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
};

export default HomePage;
