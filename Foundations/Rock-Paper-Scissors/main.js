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

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	let counter = 0;


	function playRound() {
		let humanChoice = getHumanChoice();
		let computerChoice = getComputerChoice();

		if (humanChoice === computerChoice || computerChoice === humanChoice) {
			return 'Tie';
		} 
		else if ( 
			(humanChoice === 'rock' && computerChoice === 'scissors') || 
			(humanChoice === 'paper' && computerChoice === 'rock') || 
			(humanChoice === 'scissors' && computerChoice === 'paper')) {
				humanScore++
				return "Player Wins";
		}
		else {
			computerScore++;
			return "Computer Wins";
		}	
	}

	while (counter <= 4) {
		counter++;
		console.log(`Round: ${counter}\n${playRound()}`);
	}

	//Get Winner
	if (humanScore === computerScore || computerScore === humanScore) {
		return 'Tie';
	} else if (humanScore > computerScore) {
		return 'Player Wins';
	} else {
		return 'Computer Wins';
	}
}

console.log(playGame());