function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}
getComputerChoice();