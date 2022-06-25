const logoEl = document.querySelector(".logo");
const navigationBody = document.querySelector(".navigation__body");
const navbarEl = document.querySelector(".navbar");
const app = document.querySelector(".app");

const fixAppHeight = (elOffset, element) => {
  elHeight = elOffset.offsetHeight;
  element.style.height = `calc(100% - ${elHeight / 10}rem)`;
};

fixAppHeight(logoEl, navigationBody);
fixAppHeight(navbarEl, app);
