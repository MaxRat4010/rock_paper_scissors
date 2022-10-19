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


function game() {
    let playerScore = 0
    let computerScore = 0

    for (let i=0; i<100; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?", '').toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        
        if (result === playerWinsRound) {
            playerScore++
            console.log("Your score: "+ playerScore);
        } else if (result === computerWinsRound) {
            computerScore++
            console.log("Computer score: " + computerScore);
        }
        
        if (playerScore == 5) {
            console.log("You won the whole game!");
        } else if (computerScore == 5) {
            console.log("You lost to the computer, you suck!")
        }

        if (playerScore == 5 || computerScore == 5) {
            break;
        }
    }
}
game();
