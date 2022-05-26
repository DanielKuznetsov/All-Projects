'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = '1';
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = '1';
};

// const getCountryAndNeigbour = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     //Render country 1
//     renderCountry(data);

//     //Get neighbour country
//     // const [neighbour] = data.borders;

//     // if (!neighbour) return;

//     // //AJAX call country 2
//     // const request2 = new XMLHttpRequest();
//     // request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     // request2.send();

//     // request2.addEventListener('load', function () {
//     //   const data2 = JSON.parse(this.responseText);

//     //   renderCountry(data2, 'neighbour');
//     // });

//     data.borders.forEach(border => {
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v2/alpha/${border}`);
//       request2.send();

//       request2.addEventListener('load', function () {
//         const data2 = JSON.parse(this.responseText);

//         renderCountry(data2, 'neighbour');
//       });
//     });
//   });
// };

// getCountryAndNeigbour('mexico');

//helper function
// const getJSON = function (
//   url,
//   errorMsg = 'Something went wrong. Try again Later.'
// ) {
//   return fetch(url).then(res => {
//     if (!res.ok) {
//       throw new Error(`${errorMsg} ${res.status}.`);
//     }
//     return res.json();
//   });
// };

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Country is not found: Error ${res.status}.`);
      }
      return res.json();
    })
    .then(data => {
      renderCountry(data[0]);

      const neighbours = data[0].borders;
      if (!neighbours) return;

      // neighbours.forEach(neighbour => {
      //   fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
      //     .then(res => res.json())
      //     .then(data => {
      //       renderCountry(data, 'neighbour');
      //     });
      // });

      return fetch(`https://restcountries.com/v2/alpha/${neighbours[0]}`);
    })
    .then(res => res.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      renderError(`Something went wrong: ${err.message} Try again later!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = '1';
    });
};

// btn.addEventListener('click', function () {
//   getCountryData('usa');
// });

// Challenge #1
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat}, ${lng}?geoit=json`)
//     .then(res => res.json())
//     .then(data => {
//       getCountryData(data.country);
//     });
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// console.log('Test start');
// setTimeout(() => console.log('Test start #1'), 0);

// Promise.resolve('Resolved promise #1').then(res => console.log(res));
// console.log('Test end');

// Promise.resolve('hellow').then(res => console.log(res));

// const lotteryPromise = new Promise((resolve, reject) => {
//   console.log('lottery is happening');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN !');
//     } else {
//       reject(new Error('You lost your money !'));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => console.error(err));

// const wait = function (seconds) {
//   return new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2.5)
//   .then(() => {
//     console.log(`DONE`);
//     return wait(1); //returning another promise
//   })
//   .then(() => {
//     console.log('waited for 1 second');
//   });

// // promises with Geolocation API
// const getPosition = function () {
//   return new Promise((resolve, reject) => {
//     // navigator.geolocation.getCurrentPosition(position => {
//     //   resolve(position), err => reject(err)
//     // });
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => {
//   const { latitude, longitude } = pos.coords;

//   whereAmI(latitude, longitude);
// });

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img'))
 and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the 
 promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by 
  the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, 
otherwise images load too fast.

GOOD LUCK 😀
*/

// const wait = function (seconds) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//     }, seconds * 1000);
//   });
// };

// const imagesWrapper = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise((resolve, reject) => {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', () => {
//       imagesWrapper.appendChild(img);
//       resolve(img);
//     });

//     img.addEventListener('error', () => {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('./img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('./img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('./img/img-3.jpg');
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => {
//     console.error(err);
//   });

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat}, ${lng}?geoit=json`)
//     .then(res => res.json())
//     .then(data => {
//       getCountryData(data.country);
//     });
// };

const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v2/name/${country}`);
  const [data] = await res.json();
  renderCountry(data);
};

whereAmI('usa');
