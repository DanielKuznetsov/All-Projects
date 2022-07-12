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
  const boardBtnAdd = document.querySelector(".board-btn-hide");
  boards.length > 0 && boardBtnAdd.classList.add("app-empty__none");
}

const addBoardBtn = document.querySelector(".add-board-btn");
const addBoardBtn2 = document.querySelector(".boards__add-btn");

function handleAddBoardClick(btn) {
  btn?.addEventListener("click", () => {
    document.querySelector(".new-column").style.display = "block";
  });
}

handleAddBoardClick(addBoardBtn);
handleAddBoardClick(addBoardBtn2);

function addNewBoard() {
  const columnNameInput = document.querySelector("#column-name");
  const addColumnBtn = document.querySelector(".new-column__btn");
  const outsideDiv = document.querySelector(".new-column");

  //outside click
  clickOutsideDiv(outsideDiv);

  addColumnBtn.addEventListener("click", () => {
    if (!columnNameInput.value) return;

    boards.push(columnNameInput.value);

    const columnsContainer = document.querySelector(".columns");

    const markup = ` 
    <div class="board">
      <div class="board__title">
        <span class="board__color"></span>
        <p class="board__name">
          ${columnNameInput.value} <span class="board__num-tasks">(0)</span>
        </p>
      </div>
    `;

    columnNameInput.value = "";
    hideAddBoardBtnDiv();
    columnsContainer.style.display = "flex";
    // columnsContainer.style.backgroundColor = "yellowgreen";

    columnsContainer.insertAdjacentHTML("beforeend", markup);
  });
}

// Outside click of any div
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
