"use strict";
const player = document.getElementById("player1");
const computer = document.getElementById("player2");
const results = document.getElementById("texts");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;

//get user choice
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    console.log(possibleChoice);
    generateComputerChoice();
    getResults();
  })
);

//get computer choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  if (randomNumber === 0) {
    computerChoice = "rock";
  }
  if (randomNumber === 1) {
    computerChoice = "paper";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  console.log(computerChoice);
}

function getResults() {
  if (computerChoice === userChoice) {
  }
}
