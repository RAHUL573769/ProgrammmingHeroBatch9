/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const SingleBlogs = ({ singleblock, handleBookMark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags
  } = singleblock;
  return (
    <div className="mb-20">
      <img className="w-full" src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex">
          <div>
            <img className="w-14" src={author_img} alt="" />
          </div>
          <div className="ml-6">
            <h3>Author:{author}</h3>
            <p>Posted Date:{posted_date}</p>
          </div>
        </div>

        <div className="">
          <span>{reading_time} Minutes Read</span>

          <button
            className="btn-primary"
            onClick={() => handleBookMark(singleblock)}
          >
            Add Bookmark
          </button>
        </div>
      </div>
      <h1>Title:{title}</h1>

      <p>
        {hashtags.map((hadtag, idx) => (
          <span key={idx}>
            <a href="">{hadtag}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-500 font-bold underline"
      >
        Mark As Read
      </button>
    </div>
  );
};

export default SingleBlogs;
