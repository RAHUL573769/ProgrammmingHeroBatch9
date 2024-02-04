import { useEffect, useState } from "react";
import SinglePosts from "./SinglePosts";

const UsesOfUseEfect = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Posts :{posts.length}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "00px 200px 1fr"
        }}
      >
        {" "}
        {posts.map((post) => (
          <SinglePosts key={post.id} post={post}></SinglePosts>
        ))}
      </div>
    </div>
  );
};

export default UsesOfUseEfect;
