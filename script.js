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
}

function getResults() {
  //console.log(`and the winner is ${winner}`)
  if (computerChoice === userChoice) {
    winner = "none";
  }
  if (userChoice === "rock" && computerChoice === "scissors") {
    winner = "player";
  }

  if (winner === "player") {
    setTimeout(showWin, 500);
  }
}

function showWin() {
  console.log("You Win");
  document.querySelector("#win").classList.remove("hidden");
  setTimeout(clear, 1500);
}
