"use strict";

const nav = document.querySelector(".nav");
const contentTabs = document.querySelectorAll(".content__wrapper");
const navBtns = document.querySelectorAll(".nav__btn");

nav.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav__item");

  if (!clicked) return;

  navBtns.forEach((btn) => btn.classList.remove("nav__btn--active"));
  document
    .querySelector(`.nav__btn--${clicked.dataset.tab}`)
    .classList.add("nav__btn--active");

  contentTabs.forEach((c) => c.classList.remove("content__wrapper--active"));
  document
    .querySelector(`.content__wrapper--${clicked.dataset.tab}`)
    .classList.add("content__wrapper--active");
});
