const secretNumber = Math.trunc(Math.random() * 20) + 1;
const totalAttempts = [];

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //shows amount of total attempts
  document.querySelector(".attempts-total").textContent =
    totalAttempts.push(guess);

  //shows amounts of previous guesses
  document.querySelector(".previous-scores").textContent = totalAttempts;

  // document.querySelector(".guess-result").textContent = secretNumber;
  console.log(secretNumber);

  if (secretNumber === guess) {
    document.querySelector(".main").style.backgroundColor = "green";
    document.querySelector(".guess-result").textContent = secretNumber;
  } else if (guess > secretNumber) {
    document.querySelector(".guess-result").textContent =
      "Guessing number is higher";
  } else if (guess < secretNumber) {
    document.querySelector(".guess-result").textContent =
      "Guessing number is lower";
  }
});
