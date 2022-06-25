const logoElHeight = document.querySelector(".logo").offsetHeight;
const naviagtionBody = document.querySelector(".navigation__body");

console.log(logoElHeight / 10);

naviagtionBody.style.height = `calc(100% - ${logoElHeight / 10}rem)`;
