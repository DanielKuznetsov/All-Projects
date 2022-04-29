const links = document.querySelectorAll(".link");
const dropdown = document.querySelector(".dropdown");
const container = document.querySelector(".container");
const navLogo = document.querySelector(".nav__logo");
const nav = document.querySelector(".nav");
const linkLists = document.querySelectorAll(".dropdown__list");
const navImgs = document.querySelectorAll(".nav__img");

links.forEach((link, i) => {
  link.addEventListener("mouseover", function () {
    dropdown.classList.add("dropdown__animation");
    container.classList.add("container__after");

    linkLists.forEach((list) => {
      list.style.display = "none";
    });

    navImgs.forEach((list) => {
      list.style.display = "none";
    });

    linkLists[i].style.display = "flex";
    navImgs[i].style.display = "flex";

    const dropBlock = document.querySelector(".dropdown__animation");
    dropBlock.onmouseleave = () => {
      dropdown.classList.remove("dropdown__animation");
      dropdown.classList.add("ani");
      container.classList.remove("container__after");
    };
  });
});
