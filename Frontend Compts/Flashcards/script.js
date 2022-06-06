"use strict";

const askBtn = document.querySelector(".ask-btn");
const form = document.querySelector(".form");
const inputQuestEl = document.querySelector(".form-btn--text");
const inputAnswerEl = document.querySelector(".form-textarea");
const results = document.querySelector(".results");

let cardsArr = [];

askBtn.addEventListener("click", () => {
  form.classList.toggle("form-activate");

  inputQuestEl.focus();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const question = inputQuestEl.value;
  const answer = inputAnswerEl.value;

  const card = new Card(question, answer);
  card.renderCard();

  cardsArr.push(card);
  inputQuestEl.value = inputAnswerEl.value = "";
  inputQuestEl.focus();
});

class Card {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }

  renderCard() {
    const html = `<div class="result-box">
    <p class="result-q">${this.question}</p>
    <div>
      <span class="result-toggle">Show/Hide Answer</span>
      <p class="result-answer">${this.answer}</p>
    </div>
    <div class="result-btns">
      <button class="edit">edit</button>
      <button class="delete">delete</button>
    </div>
  </div>`;

    results.insertAdjacentHTML("beforeend", html);
    const answerBtn = document.querySelector(".result-answer");
    this.showAnswer(answerBtn);
  }

  showAnswer(btn) {
    xbtn.addEventListener("click", () => {
      console.log("clicked");
    });
  }
}
