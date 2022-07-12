const logoEl = document.querySelector(".logo");
const navigationBody = document.querySelector(".navigation__body");
const navbarEl = document.querySelector(".navbar");
const app = document.querySelector(".app");

const fixAppHeight = (elOffset, element) => {
  elHeight = elOffset.offsetHeight;
  element.style.height = `calc(100% - ${elHeight / 10}rem)`;
};

fixAppHeight(logoEl, navigationBody);
fixAppHeight(navbarEl, app);

const hideSidebarBtn = document.querySelector(".hide-sidebar__btn");
hideSidebarBtn.addEventListener("click", () => {
  document.querySelector(".navigation").style.display = "none";
  document.querySelector(".see-nav-btn").style.display = "block";
});

document.querySelector(".see-nav-btn").addEventListener("click", () => {
  document.querySelector(".navigation").style.display = "block";
  document.querySelector(".see-nav-btn").style.display = "none";
});

let boards = [];

function hideAddBoardBtnDiv() {
  boards.length > 0 && app.classList.add("app-empty__none");
}

const addBoardBtn = document.querySelector(".add-board-btn");

function handleAddBoardClick() {
  document.querySelector(".add-board-btn").addEventListener("click", () => {
    document.querySelector(".new-column").style.display = "block";
  });
}

function addNewBoard() {
  const columnNameInput = document.querySelector("#column-name");
  const addColumnBtn = document.querySelector(".new-column__btn");
  const outsideDiv = document.querySelector(".new-column");
  clickOutsideDiv(outsideDiv);

  addColumnBtn.addEventListener("click", () => {});
}

function clickOutsideDiv(div) {
  div.addEventListener("click", (e) => {
    if (e.target === div) {
      div.style.display = "none";
    }
  });
}

addNewBoard();
handleAddBoardClick();
hideAddBoardBtnDiv();
