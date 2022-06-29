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
function playerSelection() {
  let playerChoice = prompt("Pick between Rock, Paper, Scissors");
  playerChoice = playerChoice.toLowerCase();

  while (
    !(
      playerChoice == "rock" ||
      playerChoice == "paper" ||
      playerChoice == "scissors"
    )
  ) {
    playerChoice = prompt(
      "Invalid selection. Pick between rock, paper, scissors"
    );
    playerChoice = playerChoice.toLowerCase();
  }
  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return `It's a draw`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection(), computerSelection()));
  }
}
game();

// console.log(playRound(playerSelection(), computerSelection()));

// Create the check option to see if your input are valid
