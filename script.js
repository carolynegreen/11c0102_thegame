"use strict";
const player = document.getElementById("player1");
const computer = document.getElementById("player2");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let winner;

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start game");

  getPlayerChoice();
}

function getPlayerChoice() {
  //console.log("get players choice");
  document.querySelector(".rock").addEventListener("click", chooseRock);
  document.querySelector(".paper").addEventListener("click", choosePaper);
  document.querySelector(".scissors").addEventListener("click", chooseScissors);
}

function chooseRock() {
  userChoice = "rock";
  generateComputerChoice();
}

function choosePaper() {
  userChoice = "paper";
  generateComputerChoice();
}

function chooseScissors() {
  userChoice = "scissors";
  generateComputerChoice();
}

//get computer choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player1").classList.add("shake");
  document
    .querySelector("#player1")
    .addEventListener("animationend", showAnimations);

  if (randomNumber === 0) {
    computerChoice = "rock";
  }
  if (randomNumber === 1) {
    computerChoice = "paper";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  console.log(`the computer chose ${computerChoice}`);
}

//show the animation
function showAnimations() {
  //console.log("show animation");

  if (userChoice === "rock") {
    console.log("the player chose rock");
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("rock");
  }
  if (computerChoice === "rock") {
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("rock");
  }
  if (userChoice === "paper") {
    console.log("the player chose paper");
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("paper");
  }
  if (computerChoice === "paper") {
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("paper");
  }
  if (userChoice === "scissors") {
    console.log("the player chose scissors");
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("scissors");
  }
  if (computerChoice === "scissors") {
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("scissors");
  }
  getResults();
}

function getResults() {
  if (computerChoice === userChoice) {
    winner = "none";
  }
  if (userChoice === "rock" && computerChoice === "scissors") {
    winner = "player";
  }
  if (userChoice === "rock" && computerChoice === "paper") {
    winner = "computer";
  }
  if (userChoice === "paper" && computerChoice === "rock") {
    winner = "player";
  }
  if (userChoice === "paper" && computerChoice === "scissors") {
    winner = "computer";
  }
  if (userChoice === "scissors" && computerChoice === "paper") {
    winner = "player";
  }
  if (userChoice === "scissors" && computerChoice === "rock") {
    winner = "computer";
  }

  if (winner === "player") {
    setTimeout(showWin, 500);
  }
  if (winner === "none") {
    setTimeout(showDraw, 500);
  }
  if (winner === "computer") {
    setTimeout(showLose, 500);
  }
}

function showWin() {
  console.log("You Win");
  document.querySelector("#win").classList.remove("hidden");
  setTimeout(clear, 1500);
}

function showDraw() {
  console.log("It's a tie");
  document.querySelector("#draw").classList.remove("hidden");
  setTimeout(clear, 1500);
}

function showLose() {
  console.log("You lose");
  document.querySelector("#lose").classList.remove("hidden");
  setTimeout(clear, 1500);
}

function clear() {
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");

  document
    .querySelector("#player2")
    .classList.remove("paper", "scissors", "rock");
  document
    .querySelector("#player1")
    .classList.remove("paper", "scissors", "rock");
}
