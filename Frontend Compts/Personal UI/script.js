const screens = document.querySelectorAll(".screen");
const navItems = document.querySelectorAll(".nav__item");

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", function () {
    screens.forEach((screen) => {
      screen.style.transform = `translateY(-${100 * i}% )`;
    });
  });
});
