const success = document.querySelector(".success");
const warning = document.querySelector(".warning");
const agree = document.querySelector(".agree");

document.body.insertAdjacentHTML(
  "afterbegin",
  `<div class="toast-container"></div>
  
<style>
  .toast-container {
    position: fixed;
    top: 3rem;
    right: 3rem;
    display: grid;
    justify-items: end;
    gap: 1.5rem;
  }

  .toast {
    font-size: 1.6rem;
    font-weight: bold;
    padding: 1rem 1.5rem;
    animation: toastIt 3000ms cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;
  }

  @keyframes toastIt {
    0%,
    100% {
      transform: translateY(-150%);
      opacity: 0;
    }
    10%,
    90% {
      transform: translateY(0);
      opacity: 1;
    }
  }

</style>`
);

const toastContainer = document.querySelector(".toast-container");

const displayToast = function ({
  message,
  color = "#fffffe",
  bgColor = "#00214d",
  length = "3000ms",
}) {
  const html = `<p class="toast" style="background-color: ${bgColor}; color: ${color}; animation-duration: ${length}">${message}</p>`;
  document
    .querySelector(".toast-container")
    .insertAdjacentHTML("beforeend", html);

  const toast = toastContainer.lastElementChild;
  toast.addEventListener("animationend", () => toast.remove());
};

success.addEventListener("click", (e) => {
  displayToast({
    message: "👊 You got this, kid! 👊",
    color: "hsl(171 100% 13.1%)",
    bgColor: "hsl(171 100% 46.1%)",
    length: "5000ms",
  });
});

warning.addEventListener("click", (e) => {
  displayToast({
    message: "⚠️ Ya sure about that? ⚠️",
    color: "hsl(350 100% 13.5%)",
    bgColor: "hsl(350 100% 66.5%)",
  });
});

agree.addEventListener("click", (e) => {
  displayToast({
    message: "✍️ Write this down… ✍️",
    color: "hsl(51 97.8% 12.1%)",
    bgColor: "hsl(51 97.8% 65.1%)",
    length: "8000ms",
  });
});
