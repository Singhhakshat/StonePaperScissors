function startAnimation(){
    const element=document.getElementById("startButton");

    element.classList.add('StartGameAnimation');
    element.style.height="100vh";
    element.style.width="100vw";

    document.getElementById("startText").style.display="none";
    
    setTimeout(function(){
        element.classList.remove('StartGameAnimation');
        document.getElementById("gameContainer").style.display="block";
    }, 1000);

    
}





function computerSelection(){
    let choices=["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random()*(2-0+1)+0)]
}

let selectionDone=0;

let playerSelection={
    rock: 0,
    paper: 0,
    scissors: 0,
}

function makePlayerSelection(rock,paper,scissors){
    playerSelection.rock=rock;
    playerSelection.paper=paper;
    playerSelection.scissors=scissors;
    console.log(playerSelection.rock);
    console.log(playerSelection.paper);
    console.log(playerSelection.scissors);

    selectionDone=1;

}

function readPlayerSelection(){
    if(playerSelection.rock==1)
        return "Rock";
    else if(playerSelection.paper==1)
        return "Paper";
    else if(playerSelection.scissors==1)
        return "Scissors";
}










const rock=document.getElementById("rockSelect");
const paper=document.getElementById("paperSelect");
const scissors=document.getElementById("scissorsSelect");

const round=document.getElementById("round");

function game(){

    let playerScore=0;
    let computerScore=0;

    for(let i=1;i<=3;i++){
        makePlayerSelection(0,0,0);
        selectionDone=0;

        round.innerHTML=`Round ${i}`;
        
        // function wait(){
        //     if(selectionDone==0)
        //         wait();
        // }
        // wait();

        while(selectionDone==0){

        }

        let playerChoice=readPlayerSelection();
        let computerChoice=computerSelection();

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
        }
    }
    result(playerScore, computerScore);
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

function result(pScore,cScore){
    console.log("Final Result->");
    if(pScore>=3)
    console.log("Player Wins!");
    else
    console.log("Computer Wins!");

    console.log(`Score: Player-> ${pScore}, Computer-> ${cScore}`)
}























// function computerSelection(){
//     let choices=["Rock", "Paper", "Scissors"]
//     return choices[Math.floor(Math.random()*(2-0+1)+0)]
// }


// function playRound(playerSelection,computerSelection){
//     let result;
//     if(playerSelection===computerSelection){
//         return 2;
//     }
//     else{
//         if(playerSelection=="Rock"){
//             if(computerSelection=="Scissors")
//                 result=1;
//             if(computerSelection=="Paper")
//                 result=0;
//         }
//         if(playerSelection=="Paper"){
//             if(computerSelection=="Scissors")
//                 result=0;
//             if(computerSelection=="Rock")
//                 result=1;
//         }
//         if(playerSelection=="Scissors"){
//             if(computerSelection=="Rock")
//                 result=0;
//             if(computerSelection=="Paper")
//                 result=1;
//         }
//         // return result==1?`You Won! ${playerSelection} beats ${computerSelection}`:`You Lose! ${computerSelection} beats ${playerSelection}`;
//         return result;
//     }
// }

// function game(){
//     let playerScore=0;
//     let computerScore=0;
//     for(let i=1;i<=5;i++){
//         console.log(`Score: Player-> ${playerScore}, Computer-> ${computerScore}`)
//         console.log(`Round: ${i}`)
//         let playerChoice=prompt("Enter your choice");
//         let computerChoice=computerSelection()
//         let result= playRound(playerChoice, computerChoice);

//         if(result==1){
//             playerScore++;
//             console.log(`You Won! ${playerChoice} beats ${computerChoice}`)
//         }
//         else if(result==0){
//             computerScore++;
//             console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
//         }
//         else{
//             console.log("Its a Tie!");
//             i--;
//         }
//     }
//     result(playerScore, computerScore);
// }

// function result(pScore,cScore){
//     console.log("Final Result->");
//     if(pScore>=3)
//     console.log("Player Wins!");
//     else
//     console.log("Computer Wins!");

//     console.log(`Score: Player-> ${pScore}, Computer-> ${cScore}`)
// }



// function startAnimation(){
//     const element=document.getElementById("startButton");

//     element.classList.add('StartGameAnimation');
//     element.style.height="100vh";
//     element.style.width="100vw";

//     document.getElementById("startText").style.display="none";
    
//     setTimeout(function(){
//         element.classList.remove('StartGameAnimation');
//         document.getElementById("gameContainer").style.display="block";
//     }, 1000);

    
// }