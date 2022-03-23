const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  //Displays the load number on the screen
  loadText.textContent = `${load}%`;
  //Will be slowly loosing opacity when the load is
  //increasing till hits 100
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  //Same here, increasing load number, decreasing filter: blue size
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

//This function works in a way where a number goes to (100),
//something else will happen when that number hits 100
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
