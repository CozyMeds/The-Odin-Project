const rockBut = document.getElementById("rock");
const paperBut = document.getElementById("paper");
const scissorBut = document.getElementById("scissors");
const playersChoice = document.getElementById("playersChoice");
const computersChoice = document.getElementById("computersChoice");
const winner = document.getElementById("winner");
const pScore = document.getElementById("pScore");
const cScore = document.getElementById("cScore");
const tieDisplay = document.getElementById("tie");
const restartBut = document.getElementById("restart");

restartBut.disabled = true;

let humanScore = 0;
let computerScore = 0;
let counter = 0;

function getComputerChoice() {
	const min = 1;
	const max = 3;
	let randomNum = Math.floor(Math.random() * max) + min;

	switch (randomNum) {
		case 1:
			return 'rock';
		case 2:
			return 'paper';
		case 3:
			return 'scissors';
	}
}

function playGame() {

    rockBut.addEventListener("click", () => {
        playRound("rock");
    });

    paperBut.addEventListener("click", () => {
        playRound("paper");
    });

    scissorBut.addEventListener("click", () => {
        playRound("scissors");
    });

    function playRound(playerChoice) {
		// Stop the game after 5 rounds
        if (counter >= 5) {
			return;
		}

		let computerChoice = getComputerChoice();

        playersChoice.textContent = playerChoice;
        computersChoice.textContent = computerChoice;
		tieDisplay.textContent = "";

        if (playerChoice === computerChoice || computerChoice === playerChoice) {
            // Nobody scores on a tie
			tieDisplay.textContent = "Tie";
        }
        else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
        }
        else {
            computerScore++;
        }

        // Update scores
        pScore.textContent = humanScore;
        cScore.textContent = computerScore;

        // Increase round counter
        counter++;

        // Check if 5 rounds have been played
        if (counter === 5) {

            if (humanScore > computerScore) {
                winner.textContent = "Player Wins!";
            }
            else if (computerScore > humanScore) {
                winner.textContent = "Computer Wins!";
            }
            else {
                winner.textContent = "It's a Tie!";
            }

			restartBut.disabled = false;
        }
    }
}

restartBut.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    counter = 0;

    pScore.textContent = humanScore;
    cScore.textContent = computerScore;

    winner.textContent = "";
    tieDisplay.textContent = "";
    playersChoice.textContent = "";
    computersChoice.textContent = "";
});


console.log(playGame());