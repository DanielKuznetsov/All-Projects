const slideRight = document.querySelector(".right-side");
const slideLeft = document.querySelector(".left-side");
const downButton = document.querySelector(".button-down");
const upButton = document.querySelector(".button-up");
//That is how to select all div elements in a certian container
const slidesLenght = slideRight.querySelectorAll("div").length;

console.log(slidesLenght);

//Setting default values
let activeSlideIndex = 0;
slideLeft.style.top = `-${(slidesLenght - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  // const sliderHeight = sliderContainer.clientHeight;- if using
  //this - PX instead of VH and sliderHeight instead of 100
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLenght - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLenght - 1;
    }
  }
  //Setting transform: translateY(); value
  slideRight.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * 100}vh)`;
};
