/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const SinglePriceOptins = ({ option }) => {
  console.log(option);

  // eslint-disable-next-line react/prop-types
  const { name, prices } = option;
  return (
    <div className="bg-blue-300 rounded-md ">
      <h2>
        <span className="text-7xl">{prices.regular}</span>
      </h2>

      <h4>{name}</h4>
    </div>
  );
};

export default SinglePriceOptins;
