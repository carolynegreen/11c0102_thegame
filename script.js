"use strict";
const player = document.querySelector("#player1");
const computer = document.querySelector("#player2");
let userChoice;
let computerChoice;
let result;

console.log("start game");

//gets users choice
function generatePlayerChoice() {
  document.querySelector(".rock").addEventListener("click", showHands()){
    userChoice = "rock";
  };
  document.querySelector(".paper").addEventListener("click", showHands());
  document.querySelector(".scissors").addEventListener("click", showHands());
  console.log(userChoice);
  generateComputerChoice();
  getResults();
}

//get computers choice//
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
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
