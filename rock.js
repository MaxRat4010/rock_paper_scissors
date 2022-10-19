function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

let playerWinsRound = 'You won this round!';
let computerWinsRound = 'You lost this round!';
let draw = "It's a tie!";

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return draw;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return playerWinsRound;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return playerWinsRound;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return playerWinsRound;
    } else {
        return computerWinsRound;
    }
}

//const playerSelection = prompt("Rock, Paper, or Scissors?", '').toLowerCase();
//const computerSelection = getComputerChoice();
//console.log(playRound(prompt("Rock, Paper, or Scissors?", '').toLowerCase(), getComputerChoice()));

function game() {
    for (let i=0; i<5; i++) {
        console.log(playRound(prompt("Rock, Paper, or Scissors?", '').toLowerCase(), getComputerChoice()));
        
        console.log(i);
    }
}
game();
