let playerScore = 0;
let computerScore = 0;



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


function playRound(playerGuess, compGuess){
    playerGuess = playerGuess.toLowerCase()
    if (playerGuess === "rock"){
        if (compGuess === "rock"){
            return "You both guessed rock, it's a tie!";
        }else if (compGuess === "paper"){
            ++computerScore;
            return "you guessed rock, the compter guessed paper, you lose!";
            
        }else{
            ++playerScore;
            return "You guessed rock, the computer guessed scissors, you win!";
            
        }
    }else if (playerGuess === "paper"){
        if (compGuess === "paper"){
            return "You both guessed paper, it's a tie!";
        }else if (compGuess === "scissors"){
            ++computerScore;
            return "You guessed paper, the compter guessed scissors, you lose!";
            
        }else{
            ++playerScore;
            return "You guessed paper, the computer guessed rock, you win!";
          
        }
    }else if (playerGuess === "scissors"){
        if (compGuess === "scissors"){
            return "You both guessed scissors, it's a tie!";
        }else if (compGuess === "rock"){
            ++computerScore;
            return "You guessed scissors, the computer guessed rock, you lose!";
            
        }else{
            ++playerScore;
            return "You guessed scissors, the computer guessed paper, you win!";
            
        }
    }else{
        return 'Please only guess "rock", "paper", or scissors"'
    }
}

function game(){
    for (let i = 1; i <= 5; i++){
        if (i <= 5){
            const player = prompt('Please guess "rock", "paper", or "scissors".');
            const comp = compGuess();;
            console.log(playRound(player, comp));
            console.log(`player: ${playerScore}, computer: ${computerScore}`)
        }
        
    }
}



game()


