// import { addToCart } from './script2.js';
// import { cart } from './script2.js';

// addToCart('bread', 2);
// console.log(cart);

// import { toolPrice as price, qt } from './script2.js';
// console.log(price, qt);

// ---- Importing Everything
// import * as ShoppingCart from './script2.js';

// ShoppingCart.addToCart('cheese', 2);
// ShoppingCart.addToCart('bread', 5);

// ---- Importing Default Value = always returnes a "RETURN" value and
// ---- we can change the name of the variable or function we are expoering
import add, { toolPrice as price, qt, toolPrice, cart } from './script2.js';
add('pizza', 3);
add('bread', 5);
add('apples', 7);
// console.log(cart);

// ---- Top Level "Await" - works without async in modules since 2022
// ---- Using top level await will stop execution of the rest of the code
// ---- that's underneath the await keyword - use with caution
// console.log('Start fetching...');

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// console.log('Something');

const getLastPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  // console.log(data);

  // will always return a promise because data did not fetched yet
  return { title: data.at(-1).title, text: data.at(-1).body };
};

// Not Clean
const lastPost = getLastPost();
lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
