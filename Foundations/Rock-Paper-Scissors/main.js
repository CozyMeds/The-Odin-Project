let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
	let response = prompt("Rock, Paper, Scissors: ").toLowerCase();

	return response;
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice || computerChoice === humanChoice) {
		return 'Tie';
	} 
	else if ( 
		(humanChoice === 'rock' && computerChoice === 'scissors') || 
		(humanChoice === 'paper' && computerChoice === 'rock') || 
		(humanChoice === 'scissors' && computerChoice === 'paper')) {
		return "Player Wins";
	}
	else {
		return "Computer Wins";
	}

	
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`Player: ${humanSelection}\nComputer: ${computerSelection}`);

console.log(playRound(humanSelection, computerSelection));