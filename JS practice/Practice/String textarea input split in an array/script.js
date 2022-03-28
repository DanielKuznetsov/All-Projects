const textarea = document.querySelector("textarea");
const inputs = document.querySelector(".inputs");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    randomSelect();
  }
});

function createTags(input) {
  const tags = input.split(" ");

  inputs.textContent = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.textContent = tag;
    inputs.appendChild(tagEl);
  });
}

function randomSelect() {
  const interval = setInterval(() => {
    const randomTag1 = randomTag();

    highlight(randomTag1);

    setTimeout(() => {
      unHighlight(randomTag1);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    const randomTag2 = randomTag();

    highlight(randomTag2);
  }, 3000);
}

function randomTag() {
  const tagsEl = document.querySelectorAll("span");
  return tagsEl[Math.floor(Math.random() * tagsEl.length)];
}

function highlight(tag) {
  tag.classList.add("tag");
}

function unHighlight(tag) {
  tag.classList.remove("tag");
}
