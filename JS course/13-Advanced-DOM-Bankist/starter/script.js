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

header.prepend(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//Styling an element
message.style.backgroundColor = '#343413';
message.style.width = '120%';

console.log(getComputedStyle(message).color);

//changing css variable color property
document.documentElement.style.setProperty('--color-primary', 'orangered');

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
