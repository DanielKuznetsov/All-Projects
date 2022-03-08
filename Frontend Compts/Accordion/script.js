const card = document.querySelectorAll(".card");

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function () {
    cardBody = document.querySelectorAll(".card-body");

    cardBody[i].classList.toggle(`card-body--${i}`);
  });
}
