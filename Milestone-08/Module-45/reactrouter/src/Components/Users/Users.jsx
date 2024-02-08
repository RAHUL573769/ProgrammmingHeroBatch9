import { useLoaderData } from "react-router-dom";
import SingleUser from "./SingleUser";

const Users = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      Posts Length{posts.length}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          // eslint-disable-next-line react/jsx-key
          <SingleUser key={post.userId} post={post}></SingleUser>
        ))}
      </div>
    </div>
  );
};

export default Users;
