const links = document.querySelectorAll(".link");
const dropdown = document.querySelector(".dropdown");
const container = document.querySelector(".container");
const navLogo = document.querySelector(".nav__logo");
const nav = document.querySelector(".nav");

const getDropDown = function (el) {
  el.addEventListener("mouseover", function (e) {
    e.preventDefault();

    dropdown.classList.add("dropdown__animation");
    container.classList.add("container__after");

    if (dropdown.classList.contains("dropdown__animation")) {
      const dropBlock = document.querySelector(".dropdown__animation");

      dropBlock.addEventListener("mouseout", function () {
        console.log("mouse hovered");

        dropdown.classList.remove("dropdown__animation");
        dropdown.classList.add("ani");
        container.classList.remove("container__after");
      });
    }
  });
};

links.forEach((link) => {
  getDropDown(link);
  getDropDown(navLogo);
  getDropDown(nav);
});
