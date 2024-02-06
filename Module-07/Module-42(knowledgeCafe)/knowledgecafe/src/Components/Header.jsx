import "./Header.css";
import profileImage from "../../../knowledge-cafe-main/images/profile.png";
const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-6xl">Knowledge Cafe</h1>
        <img src={profileImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
