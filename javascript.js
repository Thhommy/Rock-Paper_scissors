let playerScore = 0;
let computerScore = 0;

const consol = document.getElementById('console');
const scoreBoard = document.getElementById('score-board')
const picks = document.createElement('h1')
const scores = document.createElement('h2');

function compGuess(){
    let num = Math.floor(Math.random() * 3);
    if(num == 0){
        return "rock";
    }else if(num == 1){
        return "paper";
    }else {
        return "scissors";
    }
}


function playRound(){
    compGuess1 = compGuess()
    picks.textContent = `player picked ${playerGuess}, computer picked ${compGuess1}`
    consol.appendChild(picks)
    if(playerGuess == 'rock' && compGuess1 == 'scissors'){
        ++playerScore;
    }else if (playerGuess == 'rock' && compGuess1 == 'paper'){
        ++computerScore;
    }

    if(playerGuess == 'paper' && compGuess1 == 'rock'){
        ++playerScore;
    }else if (playerGuess == 'paper' && compGuess1 == 'scissors'){
        ++computerScore;
    }

    if(playerGuess == 'scissors' && compGuess1 == 'paper'){
        ++playerScore;
    }else if (playerGuess == 'scissors' && compGuess1 == 'rock'){
        ++computerScore;
    }
    score()
}

function score(){

    scores.textContent = `Player: ${playerScore}, computer: ${computerScore}`;
    scoreBoard.appendChild(scores)
    if(playerScore == 5){
        scores.textContent = 'Player Wins!';

    }else if(computerScore == 5){
        scores.textContent = 'Computer Wins!';
    }

}


const rockbtn = document.querySelector('#rock');
const paperbtn = document.querySelector('#paper');
const scissorsbtn = document.querySelector('#scissors');


rockbtn.addEventListener('click', () =>{
    playerGuess = "rock";
    playRound();

    console.log('player: ', playerScore,'   computer: ', computerScore);
})

paperbtn.addEventListener('click', () =>{
    playerGuess = "paper";
    playRound();
    console.log('player: ', playerScore,'   computer: ', computerScore);
})

scissorsbtn.addEventListener('click', () =>{
    playerGuess = "scissors";
    playRound();
    console.log('player: ', playerScore,'   computer: ', computerScore);
})