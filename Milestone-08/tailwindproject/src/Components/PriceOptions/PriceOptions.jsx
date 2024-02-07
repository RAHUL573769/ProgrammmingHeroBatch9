import SinglePriceOptins from "./SinglePriceOptins";

const PriceOptions = () => {
  const priceOptions = [
    {
      name: "Product A",
      id: "A123",
      prices: {
        regular: 49.99,
        sale: 39.99,
        discountPercentage: 20
      }
    },
    {
      name: "Product B",
      id: "B456",
      prices: {
        regular: 79.99,
        sale: 59.99,
        discountPercentage: 25
      }
    },
    {
      name: "Product C",
      id: "C789",
      prices: {
        regular: 99.99,
        sale: 79.99,
        discountPercentage: 20
      }
    }
  ];
  return (
    <div>
      <h2>
        {priceOptions.map((option) => (
          <SinglePriceOptins
            key={option.id}
            option={option}
          ></SinglePriceOptins>
        ))}{" "}
      </h2>
    </div>
  );
};

export default PriceOptions;
