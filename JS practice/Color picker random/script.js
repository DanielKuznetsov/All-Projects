const body = document.body;
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const numberRandom = Math.trunc(Math.random() * 1000000);
  color.textContent = `#${numberRandom}`;
  body.style.backgroundColor = `#${numberRandom}`;
});
