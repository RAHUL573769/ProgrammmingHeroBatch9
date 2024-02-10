import GithubLogin from "../Login/GithubLogin";
import Login from "../Login/Login";

const Home = () => {
  return (
    <div>
      <Login></Login>
      <GithubLogin></GithubLogin>
    </div>
  );
};

export default Home;
