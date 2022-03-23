const cards = document.querySelectorAll(".card");
const btns = document.querySelectorAll("span");
const cardTitles = document.querySelectorAll(".card__title");
const cardTexts = document.querySelectorAll(".card__text");
const imgs = document.querySelectorAll(".img");

btns.forEach((button) => {
  button.addEventListener("click", () => {
    //un-select all items
    cards.forEach((card) => {
      card.classList.remove("active");
    });
    btns.forEach((btn) => {
      btn.classList.remove("span-active");
    });
  });
});

//Selecting btns with a corresponding [i] of card, title, text
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    cards[i].classList.add("active");
    cardTitles[i].classList.add("transity");
    cardTexts[i].classList.add("transity-text");
    btns[i].classList.add("span-active");
    imgs[i].classList.add("img-anmt");
  });
}

//
cardTitles.forEach((title) => {
  title.classList.add("opacity");
  cardTexts.forEach((text) => {
    text.classList.add("opacity");
  });
  imgs.forEach((img) => {
    img.classList.add("img-opacity");
  });
});
