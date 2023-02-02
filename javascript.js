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


function playRound(){
    compGuess1 = compGuess()
    console.log('player: ', playerGuess,'   computer: ', compGuess1);
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