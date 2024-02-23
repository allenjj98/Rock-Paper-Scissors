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




// create playGame function. 
function playGame() {
    // create playerScore variable and initialise to 0
    let playerScore = 0;

    // create computerScore variable and initialise to 0
    let computerScore = 0;

    // create roundCount variable and initialise to 5
    let roundCount = 5;

    // create keepGoing variable and initialise to True
    let keepGoing = true;

    // While the keepGoing variable is true call the playRound function
    while (keepGoing) {
        // Assign the return value from getComputerChoice to computerSelection variable. 
        let computerSelection = getComputerChoice()

        // Ask the user to input either 'Rock', 'Paper' or 'Scissors'. Store the value in a playerSelection variable. 
        let playerSelection = capitalise()

        let round = playRound(computerSelection, playerSelection)
        roundCount -= 1;
        
        if (round == 1) {
            console.log(`You Win ${playerSelection} beats ${computerSelection}!`)
            playerScore += 1;
        } else if (round == 2) {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
            computerScore += 1;
        } else {
            console.log("Tie!")
            playerScore += 1;
            computerScore += 1;
        }

        if (roundCount == 0 && playerScore > computerScore) {
            console.log("You Win!")
            keepGoing = false;
        } else if (roundCount == 0 && computerScore > playerScore) {
            console.log("You Lose!")
            keepGoing = false;
        }
    }
}

playGame()



    // depending on the outcome of the game increment either the playerScore or computerScore variable by 1.
    // After each round decrement the roundCount variable by 1. Once the variable reaches 0 reassign the keepGoing variable to False. 
    // compare playerScore and computerScore and output the winner to the console. 
