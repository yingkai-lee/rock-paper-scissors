let choices = ['Rock','Paper','Scissors'];
let state = 0; // 0-tie, 1-win, 2-loss
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
	return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
	let scenario1 = ['paper', 'rock'];
	let scenario2 = ['rock', 'scissors'];
	let scenario3 = ['scissors', 'paper'];

	pSelect = playerSelection.toLowerCase();
	cSelect = computerSelection.toLowerCase();

	if (pSelect == cSelect){
		state = 0;
		return "Tie between " + playerSelection + " and " + computerSelection;
	}
	else if (pSelect == scenario1[0] && cSelect == scenario1[1] || 
			 pSelect == scenario2[0] && cSelect == scenario2[1] || 
			 pSelect == scenario3[0] && cSelect == scenario3[1]){

		state = 1;
		playerScore ++;
		return "You win! " + playerSelection + " vs " + computerSelection;
	}
	else if (cSelect == scenario1[0] && pSelect == scenario1[1] || 
			 cSelect == scenario2[0] && pSelect == scenario2[1] || 
			 cSelect == scenario3[0] && pSelect == scenario3[1]){

		state = 2;
		computerScore ++;
		return "You lose! " + playerSelection + " vs " + computerSelection;
	}
	return "????";
}

function game() {
	let score = 0;
	let ties = 0;
	for (let i = 1; i <= 5; i ++){
		let playerSelection = prompt("Enter Rock, Paper, or Scissors:");
		let computerSelection = getComputerChoice();

		console.log(playRound(playerSelection, computerSelection));

		if (state == 1){
			score += 1;
		}
		if (state == 0){
			ties += 1;
		}
	}
	console.log(`Your score: ${score}`);
	console.log(`Computer score: ${5-score-ties}`);
}

//game();
let bodyElement = document.getElementsByTagName('body')[0];
let scoreElement = document.createElement('div');
let outputElement = document.createElement('div');
bodyElement.appendChild(scoreElement);
bodyElement.appendChild(outputElement);
let choiceButtons = [];
for (const choice of choices){
	let button = document.createElement('button');
	button.textContent = choice;
	button.addEventListener("click", function(){
		let roundReturn = playRound(choice, getComputerChoice());
		outputElement.textContent = roundReturn;

		if (playerScore == 5 || computerScore == 5){
			if (playerScore == 5){
				scoreElement.textContent = "You've won 5 rounds!";
			}
			else if (computerScore == 5){
				scoreElement.textContent = "You've lost 5 rounds!";
			}
			playerScore = 0;
			computerScore = 0;
		}
		else{
			scoreElement.textContent = "Your score: " + playerScore + "; " + "Computer score: " + computerScore;
		}
	});
	choiceButtons.push(button);
	bodyElement.appendChild(button);
}



