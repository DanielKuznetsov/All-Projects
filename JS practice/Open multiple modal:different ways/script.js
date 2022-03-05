const btnOpenModal = document.querySelectorAll("[data-target]");
const modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");

// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// for (let i = 0; i < btnOpenModal.length; i++) {
//   btnOpenModal[i].addEventListener("click", openModal);
// }

// overlay.addEventListener("click", closeModal);
// btnCloseModal.addEventListener("click", closeModal);

btnOpenModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener("click", function () {
    for (let y = 0; y < modal.length; y++) {
      modal[y].classList.add("hidden");
      overlay.classList.add("hidden");
    }
  });
}

overlay.addEventListener("click", function () {
  for (i = 0; i < modal.length; i++) {
    modal[i].classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
