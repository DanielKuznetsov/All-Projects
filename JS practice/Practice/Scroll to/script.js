// const allLinks = document.querySelectorAll("a");

// allLinks.forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();

//     const href = link.getAttribute("href");

//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//   });
// });

// console.log(allLinks[2].getAttribute("href"));

const allLinks = document.querySelectorAll("a");

allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "href" && href.startsWith("#")) {
      const attrEl = document.querySelector(href);
      attrEl.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
