const boxSlider = document.querySelector(".box");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const slideIndexLength = document.querySelectorAll(".card").length;

let currentSlideIndex = 0;

btnNext.addEventListener("click", () => slider("next"));
btnPrev.addEventListener("click", () => slider("prev"));

const slider = function (direction) {
  if (direction === "next") {
    currentSlideIndex++;
    if (currentSlideIndex > slideIndexLength - 1) {
      currentSlideIndex = 0;
    }
  } else if (direction === "prev") {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = slideIndexLength - 1;
    }
  }

  //If a container has children above its' width
  //and height, we can move children
  boxSlider.style.transform = `translateY(-${currentSlideIndex * 100}%)`;
};
