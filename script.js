const element={
    startButton: document.getElementById("startButton"),

    roundNumber: document.getElementById("round"),

    stonePicture:document.getElementById("rockImage"),
    paperPicture:document.getElementById("paperImage"),
    scissorsPicture:document.getElementById("scissorsImage"),
    gameScore: document.getElementById("gameScore"),
    score:{
        round1:document.getElementById("roundOneImage"),
        round2:document.getElementById("roundTwoImage"),
        round3:document.getElementById("roundThreeImage")
    },
    show:{
        show: document.getElementById('show'),
        playerChoice: document.getElementById('playerChoice'),
        computerChoice: document.getElementById('computerChoice'),
        status: document.getElementById('status')
    },
    finalMessage: document.getElementById("finalMessage"),
    finalScore: document.getElementById("finalScore")
};
const score={
    player: 0,
    computer: 0
}

// let player='na';

function startAnimation(){

    element.startButton.classList.add('StartGameAnimation');
    element.startButton.style.height="100vh";
    element.startButton.style.width="100vw";

    document.getElementById("startText").style.display="none";
    
    setTimeout(function(){
        element.startButton.classList.remove('StartGameAnimation');
        document.getElementById("gameContainer").style.display="block";
    }, 1000);
    game();
}

function computerSelection(){
    let choices=["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*(2-0+1)+0)];
}

function calcResult(computerSelection,playerSelection){
    let result;
    if(playerSelection===computerSelection){
        result=2;
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
        return result;
    }
}

function showScore(round,result, computer, player){

    element.show.playerChoice.innerHTML=`Player Choice: ${player}`;
    element.show.computerChoice.innerHTML=`Computer Choice: ${computer}`;
    if(result==1)
        element.show.status.innerHTML='You Won!';
    else if(result==0)
        element.show.status.innerHTML='Computer Won!';
    else
        element.show.status.innerHTML=`Its a tie -> Play again`;

    if(round==1)
        element.score['round1'].src=(result==1)?'media/won.png':'media/lost.png';
    if(round==2)
        element.score['round2'].src=(result==1)?'media/won.png':'media/lost.png';
    if(round==3)
        element.score['round3'].src=(result==1)?'media/won.png':'media/lost.png';
}

function finalResult(){
    if(score.player>=2)
        return true;
    else
        return false;
}

function endofGame(){
    let result=finalResult();
    element.finalMessage.innerHTML=result?'You won':'Computer Won';
    element.finalScore.style.backgroundColor=result?'lightgreen':'red';
    element.show.show.style.display='none';
    element.finalScore.style.display='block';
}

// function wait() {
//     if (player==='na') {
//         setTimeout(wait, 1000);
//     } else {
//       console.log(`playerSelection: ${player}`);
//     }
//   }

// function makePlayerSelection(newValue){
//     player=newValue;
// }
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function getVal(){
    await sleep(3000)
     return prompt("Enter your choise: \"Rock\"/ \"paper\"/\"Scissors\"");
   
    
}

async function game(){
    let i=1;
    while(i <=3){
        // makePlayerSelection('na');
        element.roundNumber.innerHTML=`Round ${i}`;    //showing round number on top.
        let computer=computerSelection();
        console.log(computer);
        
        await getVal().then(
            function(value){
               let result = calcResult(computer, value);
                console.log(result);
                if(result==1)
                    score.player++;
                else if(result==0)
                    score.computer++;
                else{
                    console.log("Its a Tie!");
                    i--;
                }
                console.log(score);
                showScore(i,result, computer, value);
                console.log('end of game function')
            },
             function(value){
              
             }
          
        )
        
        i++;
    }

    setTimeout(function(){
        endofGame();
    }, 500);
}