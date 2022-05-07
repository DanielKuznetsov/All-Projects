'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Page navigation

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

const allSections = document.querySelectorAll('.section');
console.log(allSections);

const buttons = document.getElementsByTagName('button');
console.log(buttons);

//Adding an element
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We use coockies for improved functionality and analytics. 
<button class="btn btn--close-cookie">Got it!</button>`;
const header = document.querySelector('.header');

// header.prepend(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

//Styling an element
message.style.backgroundColor = '#343413';
message.style.width = '120%';

console.log(getComputedStyle(message).color);

//changing css variable color property
// document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);

logo.setAttribute('country', 'USA');
console.log(logo.src);
logo.getAttribute('src');

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attributes
console.log(logo.dataset.versionNumber);
logo.setAttribute('data-version-beta', '2.0');
console.log(logo.dataset.versionBeta);

//Smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(
    `Current scroll (X/Y): ${window.pageXOffset}, ${window.pageYOffset}`
  );

  // console.log(
  //   'height/width of the viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  // section1.scrollIntoView({
  //   behavior: 'smooth',
  // });
});

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');

  h1.removeEventListener('mouseenter', alertH1);
};

// h1.addEventListener('mouseenter', alertH1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgba(${randomInt(0, 255)},${randomInt(0, 255)}, ${randomInt(
    0,
    255
  )}, ${randomInt(0, 255)} )`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);

  //Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

// DOM traversing

// Going downwards:
// console.log(h1.querySelectorAll('.highlight')); // children
// console.log(h1.children);
// h1.firstElementChild.style.color = 'orangered';
// h1.lastElementChild.style.color = 'white';

// Going upwards:
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)'; // closest parent element

// Going sideways: siblings - only can access previous and the direct one
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //Guard clause
  if (!clicked) return;
  //it works like this: if clicked is null or undefined then
  //the code that is below this "Guard clause" will stop working

  //Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //Activate content area
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu fade animation
const nav = document.querySelector('.nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//Passing an argument into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });
