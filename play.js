// create getComputerChoice function to randomly return either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
    const options = ["Scissors", "Rock", "Paper"];
    let randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}


const result = document.querySelector('#result');
let playerScore = 0;
let computerScore = 0;



// create playRound function that has two parameters(computerSelection and playerSelection). 
function playRound(computerSelection, playerSelection) {
    // compare the values to decide the outcome of the game. 
    
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore += 1;
        result.textContent = `Your Score: ${playerScore}, Computer Score: ${computerScore}`;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore += 1;
        result.textContent = `Your Score: ${playerScore}, Computer Score: ${computerScore}`;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore += 1;
        result.textContent = `Your Score: ${playerScore}, Computer Score: ${computerScore}`;
    } else if (playerSelection === computerSelection) {
        result.textContent = `Your Score: ${playerScore}, Computer Score: ${computerScore}`;
    } else {
        computerScore += 1;
        result.textContent = `Your Score: ${playerScore}, Computer Score: ${computerScore}`;
    }

    if (playerScore == 5) {
        result.textContent = "You Have Won!";
    } else if (computerScore == 5) {
        result.textContent = "The Computer Has Won!";
    }
    
}



// add event listeners that calls playRound function when clicked.
const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playRound(getComputerChoice(), "Rock");
});


const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playRound(getComputerChoice(), "Paper");
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playRound(getComputerChoice(), "Scissors");
})




