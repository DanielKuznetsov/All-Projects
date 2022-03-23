const cards = document.querySelectorAll(".card");
const btns = document.querySelectorAll("span");

btns.forEach((button) => {
  button.addEventListener("click", () => {
    //un-select all items
    cards.forEach((card) => {
      card.classList.remove("active");
    });
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });
});

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    cards[i].classList.add("active");
  });
}
