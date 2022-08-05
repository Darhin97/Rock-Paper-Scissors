// const chance = ["rock", "paper", "scissors"];
const chance = ["✊", "🤚", "✌️"];

let playerScore = 0;
let computerScore = 0;
let response = "";

let playerSignEl = document.getElementById("player-sign");
let computerSignEl = document.getElementById("computer-sign");
let rockEl = document.getElementById("sign-rock");
let paperEl = document.getElementById("sign-paper");
let scissorsEl = document.getElementById("sign-scissors");
let winnerStatusEl = document.getElementById("winner-status");
let winnerMessageEl = document.getElementById("winner-message");
let playerScoreEl = document.getElementById("player-score");
let computerScoreEl = document.getElementById("computer-score");
let modalEl = document.getElementById("modal");
let overlayEl = document.getElementById("overlay");
let modalResponseEl = document.getElementById("modal-response");
let playAgainbtnEl = document.getElementById("modal-btn");

// events
rockEl.addEventListener("click", function () {
  playerPick("✊");
});
paperEl.addEventListener("click", function () {
  playerPick("🤚");
});
scissorsEl.addEventListener("click", function () {
  playerPick("✌️");
});
playAgainbtnEl.addEventListener("click", resetGame);

// functions
function computerPick() {
  let cpHand = Math.floor(Math.random() * 3);

  //  set computer pick
  computerSignEl.textContent = chance[cpHand];

  return chance[cpHand];
}

function playerPick(hand) {
  // set player pick
  playerSignEl.textContent = hand;
  isGameOver(playerScore, computerScore);
  let cpHand = computerPick();
  playRound(hand, cpHand);
  responses(hand, cpHand);
}

// game logic
function playRound(player, computer) {
  if (chance.indexOf(player) === chance.indexOf(computer)) {
    winnerStatusEl.textContent = "Its a Tie";
  } else if (chance.indexOf(computer) > chance.indexOf(player)) {
    if (chance.indexOf(player) === 0 && chance.indexOf(computer) === 2) {
      winnerStatusEl.textContent = "You won 🥳";
      playerScore += 1;
      playerScoreEl.textContent = playerScore;
    } else {
      winnerStatusEl.textContent = "You lost ❌";
      console.log("computer won");
      computerScore += 1;
      computerScoreEl.textContent = computerScore;
    }
  } else if (chance.indexOf(player) > chance.indexOf(computer)) {
    if (chance.indexOf(computer) === 0 && chance.indexOf(player) === 2) {
      winnerStatusEl.textContent = "You lost ❌";
      console.log("computer won");
      computerScore += 1;
      computerScoreEl.textContent = computerScore;
    } else {
      winnerStatusEl.textContent = "You won 🥳";
      console.log("player won");
      playerScore += 1;
      playerScoreEl.textContent = playerScore;
    }
  }
}

function isGameOver(playerScore, computerScore) {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      modalResponseEl.textContent = "you won 🥳";
      playerScoreEl.textContent = "5";
      toggler();
    } else if (computerScore === 5) {
      modalResponseEl.textContent = "you lost ❌";
      computerScoreEl.textContent = "5";
      toggler();
    }
  }
}

function toggler() {
  overlayEl.classList.toggle("hidden");
  modalEl.classList.toggle("hidden");
}

function resetGame() {
  toggler();

  //reseting scores
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  computerScore = 0;
  playerScore = 0;

  playerSignEl.textContent = "❔";
  computerSignEl.textContent = "❔";

  winnerStatusEl.textContent = "choose your weapon";
  winnerMessageEl.textContent = "first to reach 5 points wins the game";
}

function responses(playerHand, computerHand) {
  if (
    (playerHand === "✊" && computerHand === "✌️") ||
    (computerHand === "✊" && playerHand === "✌️")
  ) {
    response = "Rock beats Scissors";
    winnerMessageEl.textContent = response;
    return;
  }
  if (
    (playerHand === "🤚" && computerHand === "✊") ||
    (computerHand === "🤚" && playerHand === "✊")
  ) {
    response = "paper beats rock";
    winnerMessageEl.textContent = response;
    return;
  }
  if (
    (playerHand === "✌️" && computerHand === "🤚") ||
    (computerHand === "✌️" && playerHand === "🤚")
  ) {
    response = "scissors beats paper";
    winnerMessageEl.textContent = response;
    return;
  }
  if (playerHand === computerHand) {
    response = `${playerHand} ties with ${computerHand}`;
    winnerMessageEl.textContent = response;
    return;
  }
}
