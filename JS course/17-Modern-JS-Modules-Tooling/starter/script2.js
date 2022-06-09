export const shoppingCart = 10;
const cart = [];

export { cart };

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} was added to the cart`);
  console.log(cart);
};

const toolPrice = 237;
const totalQuantity = 23;

export { toolPrice, totalQuantity as qt };

// Default Export
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} was added to the cart`);
  // console.log(cart);
}
