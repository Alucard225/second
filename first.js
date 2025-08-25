
function getComputerChoice()
{

    const myArray = ["paper","scissors","rock"];

    const randomItem = myArray[Math.floor(Math.random() * myArray.length)];

    return randomItem; // Outputs a random fruit from the array
}

const button = document.querySelector("#btn");
const input = document.querySelector("#input");

button.addEventListener("click", ()=>{
    let player = input.value;
    let computer = getComputerChoice()
    if (player === computer) {
        console.log("It's a tie!");
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        console.log("Player wins!");
    } else {
        console.log("Computer wins!");
    }
});

