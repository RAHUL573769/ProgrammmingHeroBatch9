import SingleBookmark from "./SingleBookmark";

/* eslint-disable react/prop-types */
const Bookmarks = ({ bookmark }) => {
  return (
    <div className="md:w-1/3">
      <h1>Bookmarks:{bookmark.length}</h1>

      {bookmark.map((singleBookmark) => (
        <SingleBookmark
          key={singleBookmark.id}
          singleBookmark={singleBookmark}
        ></SingleBookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
