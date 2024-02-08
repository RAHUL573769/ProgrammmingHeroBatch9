import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */

// import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
const SingleUser = ({ post }) => {
  console.log(post);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/users/${post.id}`);
  };
  const userStyle = {
    border: "2px solid yellow",
    padding: "10px",
    margin: "10px"
  };
  return (
    <div style={userStyle}>
      <h2 className="text-2xl">Title:{post.title}</h2>
      <h2>Border:{post.body}</h2>

      <button className="btn btn-info" onClick={handleNavigate}>
        Button Using Use Navigate
      </button>
      {/* <button className="btn btn-info">
        <Link to={`/users/${post.id}`}>Show details</Link>
      </button> */}
    </div>
  );
};

export default SingleUser;
