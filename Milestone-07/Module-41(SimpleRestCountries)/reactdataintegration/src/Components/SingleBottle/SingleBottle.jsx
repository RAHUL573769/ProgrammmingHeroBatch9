/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import "./SinglBotle.css";
const SingleBottle = ({ singleBottle, handlePurchase, cart }) => {
  const { name, seller, price, img } = singleBottle;
  //   console.log(singleBottle);
  return (
    <div className="bottle">
      <h2>Bottle:{name}</h2>

      <img src={img} alt="" />
      <p>Price :${price}</p>
      <button onClick={() => handlePurchase(singleBottle)}>Purchase</button>
    </div>
  );
};

export default SingleBottle;
