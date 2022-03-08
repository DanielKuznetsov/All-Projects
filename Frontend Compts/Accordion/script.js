const card = document.querySelectorAll(".card");

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function () {
    //open modal that corresponds to the card we click on
    cardBody = document.querySelectorAll(".card-body");
    cardBody[i].classList.toggle(`card-body--${i}`);

    //rotating icon of corresponding card
    cardIcon = document.querySelectorAll(".card-icon");
    cardIcon[i].classList.toggle(`moveable`);
  });
}
