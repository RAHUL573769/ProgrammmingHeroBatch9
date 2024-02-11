import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav";
import LeftSideNav from "../Shared/LeftSideNav";
import Header from "../Header/Header";
Outlet;
const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <RightSideNav></RightSideNav>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
