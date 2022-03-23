const body = document.querySelector("#body");

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);

const row_1 = document.createElement("th");

const heading_1 = document.createElement("td");
heading_1.textContent = "Name";

const heading_2 = document.createElement("td");
heading_2.textContent = "Age";

const heading_3 = document.createElement("td");
heading_3.textContent = "Ocupation";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

const pushData = function (
  name = "Unknown",
  age = undefined,
  occupation = "Unknown"
) {
  const row = document.createElement("th");
  const row_data_1 = document.createElement("td");
  row_data_1.textContent = name;

  const row_data_2 = document.createElement("td");
  row_data_2.textContent = age;

  const row_data_3 = document.createElement("td");
  row_data_3.textContent = occupation;

  row.appendChild(row_data_1);
  row.appendChild(row_data_2);
  row.appendChild(row_data_3);

  tbody.appendChild(row);
};

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  const nameFull = document.querySelector(".name").value;
  const age = Number(document.querySelector("#age").value);
  const occupation = document.querySelector(".occupation").value;

  pushData(nameFull, age, occupation);
});
