let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input');

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

function disableButtons() {
    buttons.forEach(elem => elem.disabled = true)
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = "";
    let score = "";

    if (playerSelection == computerSelection) {
        result = ("It's a tie!")
        score = ("Your score: " + playerScore + " Computer Score: " + computerScore);

    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper')) {

        playerScore += 1;
        result = ("You won this round! " + playerSelection + " beats " + computerSelection)
        score = ("Your score: " + playerScore + " Computer Score: " + computerScore)

        if (playerScore == 5) {
        result = (" You won! congrats big guy");
        disableButtons()
        }
    } else {
        computerScore += 1;
        result = ("You lost this round! " + computerSelection + " beats " + playerSelection);
        score = ("Your score: " + playerScore + " Computer Score: " + computerScore)

        if (computerScore == 5) {
            result = ("You lost to the computer, sorry lil bro");
            disableButtons();
        }
    }

    document.getElementById('result').textContent = result
    document.getElementById('score').textContent = score
    return
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.value);
    });
});
