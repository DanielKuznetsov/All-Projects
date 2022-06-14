const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let currActive = 1;

next.addEventListener("click", () => {
  currActive++;

  if (currActive > circles.length) {
    currActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currActive--;

  if (currActive < 1) {
    currActive = 1;
  }

  update();
});

const update = () => {
  circles.forEach((circle, index) => {
    index < currActive
      ? circle.classList.add("active")
      : circle.classList.remove("active");
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (currActive === 1) {
    prev.disabled = true;
  } else if (currActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = next.disabled = false;
  }
};
