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

rockBtn.addEventListener("click", function () {
  playRound("rock", computerSelection());
});
paperBtn.addEventListener("click", function () {
  playRound("paper", computerSelection());
});
scissorsBtn.addEventListener("click", function () {
  playRound("scissors", computerSelection());
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

// Create a playerSelection function
// function playerSelection() {
//   let playerChoice = prompt("Pick between Rock, Paper, Scissors");
//   playerChoice = playerChoice.toLowerCase();

//   while (
//     !(
//       playerChoice == "rock" ||
//       playerChoice == "paper" ||
//       playerChoice == "scissors"
//     )
//   ) {
//     playerChoice = prompt(
//       "Invalid selection. Pick between rock, paper, scissors"
//     );
//     playerChoice = playerChoice.toLowerCase();
//   }
//   return playerChoice;
// }

function playRound(playerSelection, computerSelection) {
  let winnerStr = `You win! ${playerSelection} beats ${computerSelection}`;
  let loserStr = `You lose! ${computerSelection} beats ${playerSelection}`;
  let drawStr = `It's a draw`;
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    console.log(drawStr);
    return drawStr;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(winnerStr);
    return winnerStr;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(loserStr);
    return loserStr;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(winnerStr);
    return winnerStr;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(loserStr);
    return loserStr;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(winnerStr);
    return winnerStr;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(loserStr);
    return loserStr;
  }
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     console.log(playRound(playerSelection(), computerSelection()));
//   }
// }
// game();

// console.log(playRound(playerSelection(), computerSelection()));
