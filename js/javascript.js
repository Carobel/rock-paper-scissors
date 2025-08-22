
function getComputerChoice() {
    rand = Math.random();
    if (rand < 0.333) {
        return "rock"
    } else if (rand < 0.666) {
        return "paper"
    } else {
        return "scissors"
    }
}

console.log(getComputerChoice())