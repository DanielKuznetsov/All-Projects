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

const hideSidebarBtn = document.querySelector(".hide-sidebar__btn");
hideSidebarBtn.addEventListener("click", () => {
  document.querySelector(".navigation").style.display = "none";
  document.querySelector(".see-nav-btn").style.display = "block";
});

document.querySelector(".see-nav-btn").addEventListener("click", () => {
  document.querySelector(".navigation").style.display = "block";
  document.querySelector(".see-nav-btn").style.display = "none";
});
