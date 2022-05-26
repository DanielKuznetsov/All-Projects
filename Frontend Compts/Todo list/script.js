const form = document.querySelector(".todo__form");
const inputValue = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");

const renderTasks = (event) => {
  event.preventDefault();

  const todo = inputValue.value;

  if (todo) {
    //   const li = `<li class="todo__item">
    //   <a class="todo__link" href="#">${todo}</a>
    //   <div class="todo__item--remove"></div>
    // </li>`;

    const li = `<li class="todo__item">
    <a class="todo__link" href="#">${todo}</a>
    <div class="todo__item--remove"></div>
  </li>`;

    todoList.insertAdjacentHTML("beforeend", li);

    inputValue.value = "";

    const elRemove = document.querySelectorAll(".todo__item--remove");

    elRemove.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.currentTarget.parentElement.remove();
      });
    });
  }
};

form.addEventListener("submit", renderTasks);
