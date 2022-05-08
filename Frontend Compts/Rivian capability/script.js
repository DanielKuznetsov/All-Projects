"use strict";

const nav = document.querySelector(".nav");
const contentTabs = document.querySelectorAll(".content__wrapper");
const navBtns = document.querySelectorAll(".nav__btn");
const navItems = document.querySelectorAll(".nav__item");

const removeClass = function (items, clName) {
  items.forEach((item) => item.classList.remove(clName));
};

const addClass = function (selectedClass, addedClass) {
  document.querySelector(selectedClass).classList.add(addedClass);
};

nav.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav__item");

  if (!clicked) return;

  removeClass(navBtns, "nav__btn--active");
  removeClass(navItems, "nav__item--active");
  removeClass(contentTabs, "content__wrapper--active");

  addClass(
    `.content__wrapper--${clicked.dataset.tab}`,
    "content__wrapper--active"
  );
  addClass(`.nav__btn--${clicked.dataset.tab}`, "nav__btn--active");
  addClass(`.nav__item--${clicked.dataset.tab}`, "nav__item--active");
});
