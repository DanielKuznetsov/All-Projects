const body = document.body;
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const numberRandom = Math.trunc(Math.random() * 16666000).toString(16);
  color.textContent = `#${numberRandom}`;
  body.style.backgroundColor = `#${numberRandom}`;
});
