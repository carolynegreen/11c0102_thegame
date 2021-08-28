window.addEventListener("load", start);
function start() {
  console.log("start game");
  getChoice();
}

//get players choice//
function getChoice() {
  document.querySelector(".rock").addEventListener("click", showRock);
  document.querySelector(".paper").addEventListener("click", showPaper);
  document.querySelector(".scissors").addEventListener("click", showScissors);
}

//rock//
function showRock() {
  console.log("rock");
  document.querySelector("#player1").classList.remove(".player.rock");
  document.querySelector("#player1").classList.add(".player.rock");
}
//paper//
function showPaper() {
  console.log("paper");
  document.querySelector("#player1").classList.remove(".player.rock");
  document.querySelector("#player1").classList.add(".player.paper");
}
//scissors//
function showScissors() {
  console.log("scissors");
  document.querySelector("#player1").classList.remove(".player.rock");
  document.querySelector("#player1").classList.add(".player.scissors");
}

//get computers choice//

function gameWin() {
  console.log("you win");
  document.querySelector("#win").classList.remove("hidden");
}
function gameLose() {
  console.log("you lose");
  document.querySelector("#lose").classList.remove("hidden");
}
function gameDraw() {
  console.log("its a draw");
  document.querySelector("#draw").classList.remove("hidden");
}
