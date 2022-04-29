const links = document.querySelectorAll(".link");
const dropdown = document.querySelector(".dropdown");
const container = document.querySelector(".container");
const navLogo = document.querySelector(".nav__logo");
const nav = document.querySelector(".nav");

const removeDropDown = function (el) {
  el.addEventListener("mouseout", function () {
    dropdown.classList.remove("dropdown__animation");
    dropdown.classList.add("ani");
    container.classList.remove("container__after");
  });
};

const getDropDown = function (el) {
  el.addEventListener("mouseover", function (e) {
    e.preventDefault();

    dropdown.classList.add("dropdown__animation");
    container.classList.add("container__after");

    if (dropdown.classList.contains("dropdown__animation")) {
      const dropBlock = document.querySelector(".dropdown__animation");

      removeDropDown(dropBlock);
    }
  });
};

links.forEach((link) => {
  getDropDown(link);
});

if (dropdown.classList.contains("dropdown__animation")) {
  getDropDown(nav);
}
