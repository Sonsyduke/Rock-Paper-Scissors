// Understanding the problem
// This is a simple rock, paper, scissors game
// So the rules are:
// Rock beats scissors
// scissors beats paper
// paper beats rock

// Plan
// Create a function that will randomly return rock, paper, or scissors (Computer choice)
// Create a function that will play a single round.
// It must take two parameters (playerSelection and computerSelection)
// The function for playerSelection should be case-insensitive
// return the result and not console.log them

// Divide and conquer
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector(".result");
const rulesBtn = document.querySelector(".rules-btn");
const rules = document.querySelector(".rules");
const closeBtn = document.querySelector("#close-btn");
const computerScore = document.querySelector("#computerNumber");
const playerScore = document.querySelector("#playerNumber");
const buttonSection = document.querySelector(".buttons-section");

rockBtn.addEventListener("click", function () {
  if (computerScore.textContent === "5" || playerScore.textContent === "5") {
    result.textContent = gameOver();
  } else {
    result.textContent = playRound("rock", computerSelection());
  }
});
paperBtn.addEventListener("click", function () {
  if (computerScore.textContent === "5" || playerScore.textContent === "5") {
    result.textContent = gameOver();
  } else {
    result.textContent = playRound("paper", computerSelection());
  }
});
scissorsBtn.addEventListener("click", function () {
  if (computerScore.textContent === "5" || playerScore.textContent === "5") {
    result.textContent = gameOver();
  } else {
    result.textContent = playRound("scissors", computerSelection());
  }
});

// (1 === Rock, 2 === Paper, 3 === Scissors)
function computerSelection() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else if (computerChoice === 3) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let winnerStr = `You win! ${playerSelection} beats ${computerSelection}`;
  let loserStr = `You lose! ${computerSelection} beats ${playerSelection}`;
  let drawStr = `It's a draw`;
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return drawStr;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore.textContent++;
    return winnerStr;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore.textContent++;
    return loserStr;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore.textContent++;
    return winnerStr;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore.textContent++;
    return loserStr;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore.textContent++;
    return winnerStr;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore.textContent++;
    return loserStr;
  }
}

function gameOver() {
  buttonSection.classList.add("gameOver");
  if (computerScore.textContent === "5") {
    return `The computer won by ${computerScore.textContent} to ${playerScore.textContent}`;
  } else {
    return `You won by ${playerScore.textContent} to ${computerScore.textContent}`;
  }
}

rulesBtn.addEventListener("click", function () {
  rules.classList.toggle("display");
});

closeBtn.addEventListener("click", function () {
  rules.classList.toggle("display");
});
