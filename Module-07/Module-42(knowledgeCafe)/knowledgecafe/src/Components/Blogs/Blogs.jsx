/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import SingleBlogs from "./SingleBlogs";

const Blogs = ({ handleBookMark, handleMarkAsRead }) => {
  const [blogs, setBlocks] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlocks(data));
    //
  });
  return (
    <div className="md:w-2/3">
      <h1>Blogs:{blogs.length}</h1>

      {blogs.map((singleblock) => (
        <SingleBlogs
          key={singleblock.id}
          singleblock={singleblock}
          handleBookMark={handleBookMark}
          handleMarkAsRead={handleMarkAsRead}
        ></SingleBlogs>
      ))}
    </div>
  );
};

export default Blogs;
