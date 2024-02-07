const products = [
  { name: "Laptop", price: 3200, brand: "Hp" },

  { name: "Phone", price: 8200, brand: "Oppo" },
  { name: "Watch", price: 7200, brand: "Oppo" },
  { name: "Sunglass", price: 6200, brand: "Lyka" },
  { name: "Ipad", price: 5200, brand: "Apple 1 " },
  { name: "Iphone", price: 4200, brand: "Apple 2" },
  { name: "Camera", price: 2200, brand: "Cannon" },
  { name: "Laptop", price: 1200, brand: "Oppo" }
];

const brands = products.map((product) =>
  console.log("Using Map", product.brand)
);
//containing
const oppoName = products.filter((product) => product.brand === "Oppo");
const oppoName1 = products.find((product) => product.brand === "Oppo");
console.log("Oppno Name", oppoName);

products.forEach((product) => console.log("Using ForEach", product));
