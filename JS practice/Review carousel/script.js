//Assigning variables to items we are manipulating
const cards = document.querySelectorAll(".card");
const btns = document.querySelectorAll("span");
const cardTitles = document.querySelectorAll(".card__title");
const cardTexts = document.querySelectorAll(".card__text");
const imgs = document.querySelectorAll(".img");

//Loop to un-select all card from all btns and effects
btns.forEach((button) => {
  button.addEventListener("click", () => {
    cards.forEach((card) => {
      card.classList.remove("active");
    });
    btns.forEach((btn) => {
      btn.classList.remove("span-active");
    });
  });
});

//Loop to SELECT each card, title, text, img according to [i] in the array
for (let i = 0; i < btns.length; i++) {
  //when clicking the btn
  btns[i].addEventListener("click", () => {
    //card will be display: block
    cards[i].classList.add("active");
    //title and text will receive values in the corresponding classList.add("X")
    cardTitles[i].classList.add("transity");
    cardTexts[i].classList.add("transity-text");
    //btns and img will obtain their animation effect
    btns[i].classList.add("span-active");
    imgs[i].classList.add("img-anmt");
  });
}

//Loop to make the title, text, img BLANK separately
cardTitles.forEach((title) => {
  title.classList.add("opacity");
  cardTexts.forEach((text) => {
    text.classList.add("opacity");
  });
  imgs.forEach((img) => {
    img.classList.add("img-opacity");
  });
});
