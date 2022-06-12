import FetchWrapper from "./fetch-wrapper.js";
import { capitalize, calculateCalories } from "./helpers.js";
import AppData from "./app-data.js";
import "./node_modules/chart.js/dist/chart.js";
// import snackbar from "./node_modules/node-snackbar/src/js/snackbar.js";

const appData = new AppData();

const API = new FetchWrapper(
  "https://firestore.googleapis.com/v1/projects/jsdemo-3f387/databases/(default)/documents/dk"
);

const form = document.querySelector("#create-form");
const name = document.querySelector("#create-name");
const carbs = document.querySelector("#create-carbs");
const protein = document.querySelector("#create-protein");
const fat = document.querySelector("#create-fat");
const list = document.querySelector("#food-list");

const renderItems = (name, carbs, protein, fat) => {
  appData.addFood(carbs, protein, fat);

  return list.insertAdjacentHTML(
    "beforeend",
    `<li class="card">
  <div>
    <h3 class="name">${capitalize(name)}</h3>
    <div class="calories">${calculateCalories(
      carbs,
      protein,
      fat
    )} calories</div>
    <ul class="macros">
      <li class="carbs"><div>Carbs</div><div class="value">${carbs}g</div></li>
      <li class="protein"><div>Protein</div><div class="value">${protein}g</div></li>
      <li class="fat"><div>Fat</div><div class="value">${fat}g</div></li>
    </ul>
  </div>
</li>`
  );
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  API.post("/", {
    fields: {
      name: { stringValue: name.value },
      carbs: { integerValue: carbs.value },
      protein: { integerValue: protein.value },
      fat: { integerValue: fat.value },
    },
  }).then((data) => {
    console.log(data);

    if (data.error) {
      console.log("Error.");
      return;
    }

    renderItems(name.value, carbs.value, protein.value, fat.value);
    render();

    name.value = carbs.value = protein.value = fat.value = "";
  });
});

const init = () => {
  API.get("/?pageSize=100").then((data) => {
    const fields = data.documents;

    fields.forEach((field) => {
      const foodItem = {
        name: field.fields.name.stringValue,
        carbs: field.fields.carbs.integerValue,
        protein: field.fields.protein.integerValue,
        fat: field.fields.fat.integerValue,
      };

      renderItems(
        foodItem.name,
        foodItem.carbs,
        foodItem.protein,
        foodItem.fat
      );
    });

    render();
  });
};

let chartInstance = null;
const renderChart = () => {
  chartInstance?.destroy();
  const context = document.querySelector("#app-chart").getContext("2d");

  chartInstance = new Chart(context, {
    type: "bar",
    data: {
      labels: ["Carbs", "Protein", "Fat"],
      datasets: [
        {
          label: "Macronutrients",
          data: [
            appData.getTotalCarbs(),
            appData.getTotalProtein(),
            appData.getTotalFat(),
          ],
          backgroundColor: ["#25AEEE", "#FECD52", "#57D269"],
          borderWidth: 3, // example of other customization
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
};

const totalCaloriesEl = document.querySelector("#total-calories");

const render = () => {
  totalCaloriesEl.textContent = appData.getTotalCalories();
  renderChart();
};

init();
