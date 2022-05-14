const btns = document.querySelectorAll(".btn");

const displayBtn = function (entries) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", !entry.isIntersecting);
    if (entry.isIntersecting) observer.unobserve(entry.target);
  });
};

const observer = new IntersectionObserver(displayBtn, {
  threshold: 1,
  // rootMargin: "100px",
});

btns.forEach((btn) => observer.observe(btn));

function loadNewCards() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("button");
    card.textContent = "New Card";
    card.classList.add("btn");
    observer.observe(card);
    document.querySelector(".container").append(card);
  }
}

const img = document.querySelector(".img");

const showImg = function (entries) {
  const [entry] = entries;
  entry.target.classList.toggle("img", !entry.isIntersecting);
  if (entry.isIntersecting) imgObserver.unobserve(img);
};

const imgObserver = new IntersectionObserver(showImg, {
  // rootMargin: "100px",
});

imgObserver.observe(img);
