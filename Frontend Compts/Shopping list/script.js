const form = document.querySelector(".shop-form");
const list = document.querySelector(".list");
const formInput = document.querySelector(".shop-form--input");

window.addEventListener("load", () => {
  formInput.value = "";
});

function addGroceryItem(item) {
  const html = `<li class="item">
  <a contenteditable="false" class="item__link" href="#">${item}</a>
  <div class="item__icons-wrapper">
    <span class="item__ic-wr">
      <ion-icon class="icon-w icon-p" name="pencil-outline"></ion-icon>
    </span>
    <span class="item__ic-wr">
      <ion-icon class="icon-w icon-r" name="trash-outline"></ion-icon>
    </span>
  </div>
</li>`;

  list.insertAdjacentHTML("beforeend", html);

  const removeBtns = document.querySelectorAll(".icon-r");
  removeGroceryItem(removeBtns);

  const pens = document.querySelectorAll(".icon-p");
  const links = document.querySelectorAll(".item__link");
  const items = document.querySelectorAll(".item");
  makeTextEditable(pens, links, items);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = formInput.value;
  if (value) {
    addGroceryItem(value);
  }

  formInput.value = "";
  formInput.focus();
});

function removeGroceryItem(btns) {
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const item = e.currentTarget.closest(".item");
      item.remove();
    });
  });
}

function makeTextEditable(pens, links, lis) {
  pens.forEach((pen, i) => {
    pen.addEventListener("click", () => {
      links[i].setAttribute("contenteditable", "true");
      links[i].focus();

      links[i].addEventListener("blur", () => {
        console.log("mouse moved out");

        if (links[i].textContent === "") {
          lis[i].remove();
        }
      });
    });
  });
}
