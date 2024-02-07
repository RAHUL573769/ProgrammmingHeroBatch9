import { useEffect } from "react";
import { useState } from "react";

const Watch = () => {
  // const watch = [
  //   { id: 12, name: "SmartWatch X1", price: 250 },
  //   { id: 13, name: "TechTime Pro", price: 300 },
  //   { id: 14, name: "ConnectWear 5000", price: 200 },
  //   { id: 15, name: "EcoSmart Watch", price: 180 },
  //   { id: 16, name: "QuantumWrist Elite", price: 350 }
  // ];

  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  return (
    <div>
      <h1>
        Watches
        {watches.length}
      </h1>
    </div>
  );
};

export default Watch;
