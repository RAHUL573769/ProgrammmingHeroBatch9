import { useEffect } from "react";
import { useState } from "react";
import SingleBottle from "../SingleBottle/SingleBottle";
import "./Bottles.css";
import {
  addToLocal,
  getStoredCart
} from "../../utils/Localstorage/localstorage";
const Botles = () => {
  const [bottles, setBottles] = useState([]);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottes.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  //load fro local storage
  useEffect(() => {
    console.log(bottles.length);

    if (bottles.length > 0) {
      const storedCat = getStoredCart();

      for (const id of storedCat) {
        console.log(id);
        const savedCart = [];
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
        console.log(savedCart);
      }

      console.log(storedCat);
    }
  }, [bottles]);

  const handlePurchase = (bottle) => {
    // console.log(bottle);
    // console.log("Received");

    const newCart = [...cart, bottle];
    setCart(newCart);

    addToLocal(bottle.id);
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
