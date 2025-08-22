let humanScore = 0;
let computerScore = 0;

// Generate a string containing rock, paper or scissors at random
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.333) {
        return 'rock';
    } else if (rand < 0.666) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Process and return human choice
function getHumanChoice() {
    return (prompt('CHOOSE: rock paper scissors?')).toLowerCase();
}

// Plays one round of rock, paper scissors
function playRound(humanChoice, computerChoice) {
    // if any of the win conditions is met, return a winning message and increment human score
    if (humanChoice === 'rock' && computerChoice === 'scissors'
        || humanChoice === 'paper' && computerChoice === 'rock'
        || humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
        humanScore++;
        console.log(`You win, for ${humanChoice} beats ${computerChoice}.`)
    // if a draw condition is met, return draw message
    } else if (humanChoice === computerChoice) {
        console.log(`You draw! You both played ${humanChoice}.`)
    // if no win nor draw condition is met, return a loosing message and increment computer score
    } else {
        computerScore++;
        console.log(`You loose, for ${computerChoice} beats ${humanChoice}.`)
    }
}

// Prints message that declares who won in how many rounds.
function printWinMessage(humanScore, computerScore) {
    if (humanScore > computerScore) {
        msg = `You won! You won ${humanScore} rounds against the computer's ${computerScore} rounds.`;
    } else if (humanScore < computerScore) {
        msg = `You lost! You won ${humanScore} rounds against the computer's ${computerScore} rounds.`;
    } else {
        msg = `You played a draw. You won ${humanScore} rounds against the computer's ${computerScore} rounds.`;
    }
    console.log(msg);
}

// Plays a game of rock paper scissors consisting of 5 rounds.
function playGame() {
    console.log("START NEW GAME.")

    // play five rounds
    for (let i = 1; i <= 5; i++) {
        //get
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    // decide winner
    console.log("GAME IS DONE.")
    printWinMessage(humanScore, computerScore);
}

playGame()


