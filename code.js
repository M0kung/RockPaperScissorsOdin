let humanScore = 0;
let computerScore = 0;

function playGame() {

    function getComputerChoice(numberOfWords){
        const randomNumber = Math.round(Math.random()*numberOfWords)
        if (randomNumber == 0) {
            return computerChoice = "rock" 
        }if (randomNumber == 1) {
            return computerChoice = "scissors" 
        }else return computerChoice = "paper"
    }

    function getPlayerChoice(userInput){
        userInput = prompt("Hello Dani! :) What do you pick? (rock, paper, scissors)");
        firstLetter = userInput.charAt(0).toLowerCase();
        restOfWord = userInput.slice(1).toLowerCase();
        userInput = firstLetter.concat(restOfWord);
        return userInput
    }
    
    getComputerChoice(2);

    function playRound(gameChoice, playerChoice) {
        if (gameChoice == "paper" && playerChoice == "rock") {
            console.log("You lost! Paper beats Rock!");
            computerScore = computerScore + 1;
        } else if (gameChoice == "rock" && playerChoice == "paper") {
            console.log("You won! Paper beats Rock!");
            humanScore = humanScore + 1;
        } else if (gameChoice == "scissors" && playerChoice == "rock") {
            console.log("You won! Rock beats Scissors!");
            humanScore = humanScore + 1;
        } else if (gameChoice == "scissors" && playerChoice == "paper") {
            console.log("You lost! Scissors beat Paper!");
            computerScore = computerScore + 1;
        } else if (gameChoice == "paper" && playerChoice == "scissors") {
            console.log("You won! Scissors beat Paper!");
            humanScore = humanScore + 1;
        } else if (gameChoice == "rock" && playerChoice == "scissors") {
            console.log("You lost! Rock beats Scissors!");
            computerScore = computerScore + 1;
        } else if (gameChoice == playerChoice) {
            console.log("Draw!");
        }
    }
    for (let i = 1; i < 6; i++) {
        const gameChoice = getComputerChoice(2); 
        const playerChoice = getPlayerChoice(); 
        playRound(gameChoice, playerChoice);
        console.log("Round "+ i+": "+"Dani: "+humanScore +"; "+"Computer: "+computerScore)
    }
}

playGame()


