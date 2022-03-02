"use strict";

let detailsAside = document.querySelector(".details__aside");

document
  .querySelector(".details__summary")
  .addEventListener("click", function () {
    // document.querySelector(".details__aside").style.transform = "scale(1)";
    // document.querySelector(".details__aside").style.opacity = "1";
    detailsAside.classList.toggle("active");
  });
