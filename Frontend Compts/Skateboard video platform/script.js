const videoCards = document.querySelectorAll(".videos__card");
const videos = document.querySelectorAll("video");

const delay = 1.5;

const arr = Array.from({ length: videoCards.length }, () => 0).map((mov, i) => {
  return mov + (i / 2 + delay) / 10;
});

for (let i = 0; i < videoCards.length; i++) {
  videoCards[i].addEventListener("mouseover", function () {
    videos[i].play();
  });

  videoCards[i].addEventListener("mouseout", function () {
    videos[i].pause();
  });

  videoCards[i].style.animationDelay = `${arr[i]}s`;
}

// const arr = Array.from(
//   { length: videoCards.length },
//   (cur, i) => i + (i / 2 + 1.5) / 10
// );
