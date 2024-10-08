let numberOfWords = 2;
function getComputerChoice(numberOfWords){
    const randomNumber = Math.round(Math.random()*numberOfWords)
    if (randomNumber == 0) {
        return "rock" + randomNumber
    }if (randomNumber == 1) {
        return "scissors" + randomNumber
    }else return "paper" + randomNumber
}


console.log(getComputerChoice(numberOfWords));

