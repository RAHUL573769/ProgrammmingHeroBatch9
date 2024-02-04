import { useEffect } from "react";
import { useState } from "react";
import SingleBottle from "../SingleBottle/SingleBottle";
import "./Bottles.css";
const Botles = () => {
  const [bottles, setBottles] = useState([]);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottes.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handlePurchase = (bottle) => {
    // console.log(bottle);
    // console.log("Received");

    const newCart = [...cart, bottle];
    setCart(newCart);
    // console.log(cart);
  };
  return (
    <div>
      <h1>Total Bottles:{bottles.length}</h1>
      <h3>Cart{cart.length}</h3>
      <div className="bottle-container">
        {bottles.map((singleBottle) => (
          <SingleBottle
            cart={cart}
            singleBottle={singleBottle}
            handlePurchase={handlePurchase}
            key={singleBottle.id}
          >
            {" "}
          </SingleBottle>
        ))}
      </div>
    </div>
  );
};

export default Botles;
