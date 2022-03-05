const span = document.querySelector("span");
const light = document.querySelector(".switch1");
const container = document.querySelector(".container");

light.addEventListener("click", function () {
  span.style.color = "#191919";
  container.style.backgroundColor = "#fff";
});
