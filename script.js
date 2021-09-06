"use strict";
const player = document.querySelector("#player1");
const computer = document.querySelector("#player2");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

//window.addEventListener("DOMContentLoaded", start);
//console.log("start game");

//gets users choice
possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    console.log(userChoice);
    generateComputerChoice();
    getResults();
  })
);

//get computers choice//
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  console.log(randomNumber);
  console.log(computerChoice);

  if (randomNumber === 0) {
    computerChoice = "rock";
  }
  if (randomNumber === 1) {
    computerChoice = "paper";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
}

function getResults() {
  if (computerChoice === userChoice) {
    result = "its a draw";
  }
  if (computerChoice === "rock" && userChoice == "paper") {
    result = "you win";
  }
  if (computerChoice === "rock" && userChoice == "scissors") {
    result = "you lose";
  }
  if (computerChoice === "paper" && userChoice == "scissors") {
    result = "you win";
  }
  if (computerChoice === "paper" && userChoice == "rock") {
    result = "you lose";
  }
  if (computerChoice === "scissors" && userChoice == "rock") {
    result = "you win";
  }
  if (computerChoice === "scissors" && userChoice == "paper") {
    result = "you lose";
  }
  console.log(result);
}
