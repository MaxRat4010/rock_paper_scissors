function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You both picked ${playerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You won! Rock beats Scissors";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You won! Paper beats Rock";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You won! Scissors beats Paper";
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
const playerSelection = prompt("Rock, Paper, or Scissors?", '').toLowerCase();
const computerSelection = getComputerChoice();

