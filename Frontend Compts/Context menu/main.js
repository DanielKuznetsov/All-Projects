"use strict";

let modal = document.querySelector(".link-box__wrapper--modal");

modal.addEventListener("mouseover", function () {
  document.querySelector(".link-box--side").style.display = "flex";
  document.querySelector(".link-box--side").style.transform = "translateX(0)";
});

modal.addEventListener("mouseout", function () {
  document.querySelector(".link-box--side").style.display = "none";
});
