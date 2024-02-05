export const getStoredCart = () => {
  const storedCard = localStorage.getItem("cart");
  if (storedCard) {
    return JSON.parse(storedCard);
  }

  return [];
};
export const saveToLs = (cart) => {
  const cartStringified = JSON.stringify(cart);

  localStorage.setItem("cart", cartStringified);
};
export const addToLocal = (id) => {
  const cart = getStoredCart();
  cart.push(id);

  //save to ls
  saveToLs(cart);
};
