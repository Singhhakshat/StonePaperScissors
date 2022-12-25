function computerSelection(){
    let choices=["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random()*(2-0+1)+0)]
}


function playRound(playerSelection,computerSelection){
    let result;
    if(playerSelection===computerSelection){
        return 2;
    }
    else{
        if(playerSelection=="Rock"){
            if(computerSelection=="Scissors")
                result=1;
            if(computerSelection=="Paper")
                result=0;
        }
        if(playerSelection=="Paper"){
            if(computerSelection=="Scissors")
                result=0;
            if(computerSelection=="Rock")
                result=1;
        }
        if(playerSelection=="Scissors"){
            if(computerSelection=="Rock")
                result=0;
            if(computerSelection=="Paper")
                result=1;
        }
        // return result==1?`You Won! ${playerSelection} beats ${computerSelection}`:`You Lose! ${computerSelection} beats ${playerSelection}`;
        return result;
    }
}

function game(){
    let playerScore=0;
    let computerScore=0;
    for(let i=1;i<=5;i++){
        console.log(`Score: Player-> ${playerScore}, Computer-> ${computerScore}`)
        console.log(`Round: ${i}`)
        let playerChoice=prompt("Enter your choice");
        let computerChoice=computerSelection()
        let result= playRound(playerChoice, computerChoice);

        if(result==1){
            playerScore++;
            console.log(`You Won! ${playerChoice} beats ${computerChoice}`)
        }
        else if(result==0){
            computerScore++;
            console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
        }
        else{
            console.log("Its a Tie!");
            i--;
        }
    }
    result(playerScore, computerScore);
}

function result(pScore,cScore){
    console.log("Final Result->");
    if(pScore>=3)
    console.log("Player Wins!");
    else
    console.log("Computer Wins!");

    console.log(`Score: Player-> ${pScore}, Computer-> ${cScore}`)
}

game()

