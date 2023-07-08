let choices = ['Rock','Paper','Scissors'];

function getComputerChoice(){
	return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
	let scenario1 = ['paper', 'rock'];
	let scenario2 = ['rock', 'scissors'];
	let scenario3 = ['scissors', 'paper'];

	pSelect = playerSelection.toLowerCase();
	cSelect = computerSelection.toLowerCase();

	if (pSelect == cSelect){
		return "Tie between " + playerSelection + " and " + computerSelection;
	}
	else if (pSelect == scenario1[0] && cSelect == scenario1[1] || 
			 pSelect == scenario2[0] && cSelect == scenario2[1] || 
			 pSelect == scenario3[0] && cSelect == scenario3[1]){

		return "You win! " + playerSelection + " vs " + computerSelection;
	}
	else if (cSelect == scenario1[0] && pSelect == scenario1[1] || 
			 cSelect == scenario2[0] && pSelect == scenario2[1] || 
			 cSelect == scenario3[0] && pSelect == scenario3[1]){

		return "You lose! " + playerSelection + " vs " + computerSelection;
	}
	return "????";
}
 
const playerSelection = choices[2];
const computerSelection = choices[2];
console.log(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));

