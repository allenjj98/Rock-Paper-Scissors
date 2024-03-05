// create getComputerChoice function to randomly return either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
    const options = ["Scissors", "Rock", "Paper"];
    let randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}



// Standardise player input to ensure that its case-insensitive. 
function capitalise() {
    let playerInput = prompt("Input your choice here: ");
    let firstLetter = playerInput[0].toUpperCase();
    let letters = playerInput.slice(1).toLowerCase();
    return firstLetter + letters;
}




// create playRound function that has two parameters(computerSelection and playerSelection). 
function playRound(computerSelection, playerSelection) {
    // compare the values to decide the outcome of the game. 
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        // Return a string that declares the outcome of the game.
        return 1;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return 1;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return 1;
    } else if (playerSelection === computerSelection) {
        return 0;
    }
    return 2;
}

// add event listeners that calls playRound function when clicked.
const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', playRound())


const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', playRound())



const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', playRound())




