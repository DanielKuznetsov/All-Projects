const header = document.querySelector("#header");
const headerImg = document.querySelector(".header-img");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const profileImg = document.querySelector("#profile_img");
const name = document.querySelector("#name");
const date = document.querySelector("#date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 1500);

function getData() {
  headerImg.innerHTML = `<img src="./nat-1-large.jpg" alt="Static image" />`;
  title.innerHTML = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
  aliquam.`;
  profileImg.innerHTML = `<img
  src="https://randomuser.me/api/portraits/men/45.jpg"
  alt=""/>`;
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 08, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
