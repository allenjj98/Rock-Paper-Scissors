// create getComputerChoice function to randomly return either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
    const options = ["Scissors", "Rock", "Paper"];
    let randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

// Assign the return value from getComputerChoice to computerSelection variable. 
let computerSelection = getComputerChoice();


// Ask the user to input either 'Rock', 'Paper' or 'Scissors'. Store the value in a playerSelection variable. 
let playerSelection = prompt("Input your choice here: ");


// Standardise player input to ensure that its case-insensitive. 
function capitalise(playerInput) {
    let firstLetter = playerInput[0].toUpperCase();
    let letters = playerInput.slice(1).toLowerCase();
    return firstLetter + letters;
}

playerSelection = capitalise(playerSelection)



// create playRound function that has two parameters(computerSelection and playerSelection). 
function playRound(computerSelection, playerSelection) {
    // compare the values to decide the outcome of the game. 
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        // Return a string that declares the outcome of the game.
        return `You Win ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return `You Win ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return `You Win ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === computerSelection) {
        return "Tie!";
    }
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}



    
    

// create playGame function. 
    // create playerScore variable and initialise to 0
    // create computerScore variable and initialise to 0
    // create roundCount variable and initialise to 5
    // create keepGoing variable and initialise to True



    // While the keepGoing variable is true call the playRound function
    // depending on the outcome of the game increment either the playerScore or computerScore variable by 1.
    // After each round decrement the roundCount variable by 1. Once the variable reaches 0 reassign the keepGoing variable to False. 
    // compare playerScore and computerScore and output the winner to the console. 
