const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

panel.addEventListener("click", (e) => {
  if (e.target.closest(".rating")) {
    document.querySelector(".rating.active")?.classList.remove("active");
    e.target.closest(".rating").classList.toggle("active");

    selectedRating = e.target.closest(".rating").children[1].textContent;
  }
});

sendBtn.addEventListener("click", () => {
  if (!document.querySelector(".rating.active")) return;
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
      <strong>Thank you!</strong> 
      <br>
      <strong>Feedback: ${selectedRating}!</strong>
      <p>We will use your feedback to improve our customer support</p>
  `;
});
