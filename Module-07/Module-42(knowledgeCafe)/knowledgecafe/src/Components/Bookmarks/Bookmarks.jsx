/* eslint-disable no-unused-vars */
import SingleBookmark from "./SingleBookmark";

/* eslint-disable react/prop-types */
const Bookmarks = ({ bookmark, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <h1>Bookmarks:{bookmark.length}</h1>
      <h1>Reading Time :{readingTime}</h1>
      {bookmark.map((singleBookmark) => (
        <SingleBookmark
          key={singleBookmark.id}
          singleBookmark={singleBookmark}
          readingTime={readingTime}
        ></SingleBookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
