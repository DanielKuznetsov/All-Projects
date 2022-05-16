const movPart = document.querySelector(".switch__box--after");
const btns = document.querySelectorAll(".btn");
const root = document.querySelector(":root");

btns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    movPart.style.transform = `translateX(${100 * i}%)`;

    root.classList.remove("black-theme");
    root.classList.remove("dark-theme");

    const styles = [, "dark-theme", "black-theme"];

    root.classList.add(`${styles[i]}`);
  });
});
