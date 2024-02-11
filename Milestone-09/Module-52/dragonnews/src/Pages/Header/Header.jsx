import moment from "moment";
import BreakingNews from "../HomePage/BreakingNews";

const Header = () => {
  return (
    <div>
      <p className="text-center">Journalism without Fear</p>

      <p className="text-xl text-center">
        Date {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </p>
      <BreakingNews></BreakingNews>
    </div>
  );
};

export default Header;
