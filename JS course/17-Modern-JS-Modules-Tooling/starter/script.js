// import { addToCart } from './script2.js';
// import { cart } from './script2.js';

// addToCart('bread', 2);
// console.log(cart);

// import { toolPrice as price, qt } from './script2.js';
// console.log(price, qt);

// Importing Everything
// import * as ShoppingCart from './script2.js';

// ShoppingCart.addToCart('cheese', 2);
// ShoppingCart.addToCart('bread', 5);

// Importing Default Value = always returnes a "RETURN" value and
// we can change the name of the variable or function we are expoering
import add, { toolPrice as price, qt, toolPrice, cart } from './script2.js';
add('pizza', 3);
add('bread', 5);
add('apples', 7);
console.log(cart);
