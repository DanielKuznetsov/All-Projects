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

btn.addEventListener('click', function () {
  getCountryData('usa');
});

// Challenge #1
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat}, ${lng}?geoit=json`)
    .then(res => res.json())
    .then(data => {
      getCountryData(data.country);
    });
};

// whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
