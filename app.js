let playerScore = 0;
let cpuScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const playerPoints = document.querySelector("#player-score");
const cpuPoints = document.querySelector("#cpu-score");

const genCpuChoice = () => {
    const move = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return move[randomIdx];
};

const drawGame = () => {
    console.log("Game was Drawn");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#e9b4a8";
};

const showWinner = (playerWin, playerChoice, cpuChoice) => {
    if (playerWin) {
        playerScore++;
        playerPoints.innerText = playerScore;
        msg.innerText = `You Win!  ${playerChoice}  beats  ${cpuChoice}`;
        msg.style.backgroundColor = "#BEDC74";
        console.log("Player is Winner");
    } else {
        cpuScore++;
        cpuPoints.innerText = cpuScore;
        msg.innerText = `You Lose! ${cpuChoice} beats ${playerChoice}`;
        msg.style.backgroundColor = "#FFAAAA";
        console.log("CPU is Winner");
    }
};

const playGame = (playerChoice) => {
    console.log("player choice = ", playerChoice);
    const cpuChoice = genCpuChoice();
    console.log("cpu choice = ", cpuChoice);

    let playerWin = true; 
    if (cpuChoice === playerChoice) {
        drawGame();
    } else {
        if (playerChoice === "rock")
            playerWin = cpuChoice === "paper" ? false : true;
        else if (playerChoice === "paper")
            playerWin = cpuChoice === "rock" ? false : true;
        else if (playerChoice === "scissors")
            playerWin = cpuChoice === "rock" ? false : true;
    }
    showWinner(playerWin, playerChoice, cpuChoice); // Pass playerWin as an argument
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const playerChoice = choice.getAttribute("id"); //player
        playGame(playerChoice);
    });
});
