let humanScore = 0;
let computerScore = 0;
let round = 0;

// DOM selects
choiceBox = document.querySelector('#choice-box');
resultBox = document.querySelector('#results');
scoreBox = document.querySelector('#score');
winBox = document.querySelector('#win');

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

// Handle choice buttons 
choiceBox.addEventListener('click', (event) => {
    const target = event.target;

    let choice;
    switch(target.id) {
        case 'btn-rock':
            choice = 'rock';
            break;
        case 'btn-paper':
            choice = 'paper';
            break;
        case 'btn-scissors':
            choice = 'scissors';
            break;
    }
    playRound(choice, getComputerChoice());
})

// Plays one round of rock, paper scissors
function playRound(humanChoice, computerChoice) {
    round++;
    // if any of the win conditions is met, return a winning message and increment human score
    if (humanChoice === 'rock' && computerChoice === 'scissors'
        || humanChoice === 'paper' && computerChoice === 'rock'
        || humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
        humanScore++;
        resultBox.textContent = `You win, for ${humanChoice} beats ${computerChoice}.`;
    // if a draw condition is met, return draw message
    } else if (humanChoice === computerChoice) {
        resultBox.textContent = `You draw! You both played ${humanChoice}.`;
    // if no win nor draw condition is met, return a loosing message and increment computer score
    } else {
        computerScore++;
        resultBox.textContent = `You loose, for ${computerChoice} beats ${humanChoice}.`;
    }
    updateScoreBox();
    checkWin();
}

// Update the score displayed on the page
function updateScoreBox() {
    msg = `SCORE: You: ${humanScore} | Computer: ${computerScore}`;
    scoreBox.textContent = msg;
}

// Checks if win condition has been met
function checkWin() {
    if(round === 5) {
        printWinMessage();
    }
}

// Prints message that declares who won in how many rounds.
function printWinMessage() {
    if (humanScore > computerScore) {
        msg = `You won! You won ${humanScore} rounds against the computer's ${computerScore} rounds.`;
    } else if (humanScore < computerScore) {
        msg = `You lost! You won ${humanScore} rounds against the computer's ${computerScore} rounds.`;
    } else {
        msg = `You played a draw. You won ${humanScore} rounds against the computer's ${computerScore} rounds.`;
    }
    win.textContent = msg;
}


