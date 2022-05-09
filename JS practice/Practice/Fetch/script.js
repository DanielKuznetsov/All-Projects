// window.addEventListener("load", function () {
//   fetch("https://handlers.education.launchcode.org/static/planets.json")
//     .then((res) => res.json())
//     .then((data) => {
//       const container = document.querySelector(".container");
//       console.log(data);
//       data.forEach((obj, i) => {
//         const el = document.createElement("p");
//         el.innerHTML = `${i + 1}: ${obj.star}`;
//         container.after(el);
//       });
//     });
// });

const displayData = function (url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

displayData("https://api.github.com/users/defunkt");
