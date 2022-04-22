const loginBtn = document.querySelector(".form__submit");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

// Data
const accounts = [
  {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  },
  {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  },
  {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  },
  {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  },
];

const createUsernames = function (accounts) {
  accounts.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((letter) => letter[0])
      .join("");
  });
};

createUsernames(accounts);

let username;
let currentAccount;

loginBtn.addEventListener("click", function () {
  const usernames = accounts.map((acc) => {
    return acc.username;
  });

  username = usernames.find((user) => {
    return user === email.value;
  });

  currentAccount = accounts.find((acc) => acc.username === username);

  if (currentAccount?.pin === +password.value) {
    console.log(`hellow ${currentAccount.owner}`);

    password.value = email.value = "";
  }
});
