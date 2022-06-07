class Item {
  constructor(content, amount, gain) {
    this.content = content;
    this.amount = amount;
    this.gain = gain;
  }
}

class UI {
  // Display movements
  static displayMovs() {
    const movs = [
      {
        content: "sold car",
        amount: "900",
        gain: "income",
      },
      {
        content: "bought ice-cream",
        amount: "40",
        gain: "expense",
      },
    ];

    movs.forEach((mov) => UI.addItemsToList(mov, mov.gain));
  }

  // Add items to lists
  static addItemsToList(mov, className) {
    const list = document.querySelector(`.list-${className}`);
    const li = document.createElement("li");
    li.classList.add("list-item");

    li.innerHTML = `<p>${mov.content}</p>
    <span class="${mov.gain}-color">$${mov.amount}</span>`;

    list.appendChild(li);
  }

  // Add a movement
  static addMovements() {
    const incomeBtn = document.querySelector(".income");
    const expenseBtn = document.querySelector(".expense");

    incomeBtn.addEventListener("click", () => {
      const description = document.querySelector(".form-description").value;
      const amount = document.querySelector(".form-amount").value;

      if (description === "" || amount === "") {
        UI.showAlert("Please fill in all fields!", "expense-color");
      } else {
        const mov = new Item(description, amount, "income");
        UI.addItemsToList(mov, mov.gain);
        UI.clearFields();
        UI.showAlert("Submitted", "income-color");
        UI.updateMoneyCount(mov);
      }
    });

    expenseBtn.addEventListener("click", () => {
      const description = document.querySelector(".form-description").value;
      const amount = document.querySelector(".form-amount").value;

      if (description === "" || amount === "") {
        // alert("Submit all fields");
        UI.showAlert("Please fill in all fields!", "expense-color");
      } else {
        const mov = new Item(description, amount, "expense");
        UI.addItemsToList(mov, mov.gain);
        UI.clearFields();
        UI.showAlert("Submitted", "expense-color");
        UI.updateMoneyCount(mov);
      }
    });
  }

  // Show alert
  static showAlert(message, className) {
    const div = document.createElement("div");
    div.classList.add(`${className}`, "alert");
    div.appendChild(document.createTextNode(message));

    const formContainer = document.querySelector(".form-input-wrapper");
    const inputDescr = document.querySelector(".form-description");
    formContainer.insertBefore(div, inputDescr);

    // Vanish in 3 seconds
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  // Update money count
  static updateMoneyCount(mov) {
    const totalIncome = document.querySelector(".money-income");
    const totalExpense = document.querySelector(".money-expense");
    const moneyAvailable = document.querySelector(".money-available");

    moneyAvailable.textContent =
      totalIncome.textContent =
      totalExpense.textContent =
        "$0";
    let sumIncome = 0;
    let sumExpense = 0;

    const elsINCOME = [...document.querySelector(".list-income").children];
    elsINCOME.forEach((el) => {
      sumIncome += +el.childNodes[2].textContent.slice(1);
    });

    const elsEXPENSE = [...document.querySelector(".list-expense").children];
    elsEXPENSE.forEach((el) => {
      sumExpense += +el.childNodes[2].textContent.slice(1);
    });

    // Updating in real time money movements
    totalIncome.textContent = `$${sumIncome}`;
    totalExpense.textContent = `$${sumExpense}`;

    let moneyDif = sumIncome - sumExpense;
    if (moneyDif < 0) {
      moneyDif = +String(moneyDif).slice(1);
      moneyAvailable.textContent = `-$${moneyDif}`;
    } else {
      moneyAvailable.textContent = `$${moneyDif}`;
    }
  }

  // Clear fields
  static clearFields() {
    document.querySelector(".form-description").value = "";
    document.querySelector(".form-amount").value = "";
  }
}

// Event: Display Movements
document.addEventListener("DOMContentLoaded", UI.displayMovs);
document.addEventListener("DOMContentLoaded", UI.addMovements);
document.addEventListener("DOMContentLoaded", UI.updateMoneyCount);
