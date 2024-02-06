/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const SingleBookmark = ({ singleBookmark }) => {
  console.log(singleBookmark);

  const { title } = singleBookmark;
  return (
    <div className="bg-slate-500 p-4 m-4 rounded-xl">
      <h3 className="text-2xl">{title}</h3>
    </div>
  );
};

export default SingleBookmark;
