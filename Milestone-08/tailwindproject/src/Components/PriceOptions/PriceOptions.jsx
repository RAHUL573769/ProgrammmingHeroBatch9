import { priceOptions } from "../Constans/canstantvariables";
import SinglePriceOptins from "./SinglePriceOptins";

const PriceOptions = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <SinglePriceOptins
            key={option.id}
            option={option}
          ></SinglePriceOptins>
        ))}{" "}
      </div>
    </div>
  );
};

export default PriceOptions;
