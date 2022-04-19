const videoCards = document.querySelectorAll(".videos__card");
const videos = document.querySelectorAll("video");

for (let i = 0; i < videoCards.length; i++) {
  videoCards[i].addEventListener("mouseover", function () {
    videos[i].play();
  });

  videoCards[i].addEventListener("mouseout", function () {
    videos[i].pause();
  });
}

const arr = Array.from({ length: videoCards.length }, () => 0).map((mov, i) => {
  return mov + (i / 2 + 1.5) / 10;
});

// const arr = Array.from(
//   { length: videoCards.length },
//   (cur, i) => i + (i / 2 + 1.5) / 10
// );

for (let y = 0; y < videoCards.length; y++) {
  videoCards[y].style.animationDelay = `${arr[y]}s`;
}
