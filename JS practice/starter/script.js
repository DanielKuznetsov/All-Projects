const createBtn = document.querySelector(".btn");

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

document.querySelector("#body").appendChild(table);

//first row
const row_1 = document.createElement("tr");

const heading_1 = document.createElement("th");
heading_1.textContent = "Name";

const heading_2 = document.createElement("th");
heading_2.textContent = "Age";

const heading_3 = document.createElement("th");
heading_3.textContent = "Ocupation";

const heading_4 = document.createElement("th");
heading_4.textContent = "City";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
thead.appendChild(row_1);

//second row
const row_2 = document.createElement("tr");

const row_2_data_1 = document.createElement("td");
row_2_data_1.textContent = "Daniel";
const row_2_data_2 = document.createElement("td");
row_2_data_2.textContent = "24";
const row_2_data_3 = document.createElement("td");
row_2_data_3.textContent = "Student";
const row_2_data_4 = document.createElement("td");
row_2_data_4.textContent = "Seal Beach";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);

thead.appendChild(row_2);
