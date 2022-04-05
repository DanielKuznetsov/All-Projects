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
