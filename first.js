// --- SETUP ---
const choices = ["paper", "scissors", "rock"];
const buttons = document.querySelectorAll("button");
const scoreDisplay = document.querySelector("#score");
const resultDisplay = document.querySelector("#result");

let pcPoints = 0;
let playerPoints = 0;

// --- FUNCTIONS ---
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice) {
    // Stop the game if a winner has been decided
    if (pcPoints >= 5 || playerPoints >= 5) {
        return;
    }

    const computerChoice = getComputerChoice();

    // Determine the winner of the round
    if (playerChoice === computerChoice) {
        // It's a tie, no points awarded in this version
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerPoints++;
    } else {
        pcPoints++;
    }

    updateScore();
    checkWinner();
}

function updateScore() {
    scoreDisplay.textContent = `Player: ${playerPoints} | Computer: ${pcPoints}`;
}

function checkWinner() {
    if (playerPoints >= 5) {
        resultDisplay.textContent = "You won the game! Congratulations!";
        // Optional: disable buttons after game ends
        buttons.forEach(button => button.disabled = true);
    } else if (pcPoints >= 5) {
        resultDisplay.textContent = "The computer won the game. Try again!";
        buttons.forEach(button => button.disabled = true);
    }
}

// --- EVENT LISTENERS ---
// Add a single click listener to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});

// Initialize score display
updateScore();