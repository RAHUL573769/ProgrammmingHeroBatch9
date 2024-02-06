import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmark, setBookMark] = useState([]);

  const [readingTime, setReadingTime] = useState(0);
  const handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    console.log(newReadingTime);
  };
  const handleBookMark = (blog) => {
    const newBookmark = [...bookmark, blog];
    setBookMark(newBookmark);
    // console.log(bookmark);
  };
  return (
    <div>
      <Header></Header>
      <div className="md:flex max-w-7xl  mx-auto">
        <Blogs
          handleBookMark={handleBookMark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmark={bookmark}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
