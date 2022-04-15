
const arrayRPS=["rock","paper","scissors"]



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay(){
    a = getRandomInt(3);
    return arrayRPS[a];
    
}
function RockPaperScissors(computerInput, computerScore, humanScore){

    a=humanScore;
    b=computerScore;
    const playerInput = prompt("Rock, paper or scissors?");
    
    if (playerInput.toLowerCase() == computerInput.toLowerCase()) {
        console.log("draw");
    
    }
    if (playerInput.toLowerCase() == "rock" ){
        console.log(playerInput);
        if (computerInput.toLowerCase() == "scissors"){
            console.log("gg wp");
            humanScore++;
        }

        if (computerInput.toLowerCase() == "paper"){
            console.log("f");
            computerScore++;
        }
    }

    if (playerInput.toLowerCase() == "paper" ){
        console.log(playerInput);
        if (computerInput.toLowerCase() == "rock"){
            console.log("gg wp");
            humanScore++;
        }

        if (computerInput.toLowerCase() == "scissors"){
            console.log("f");
            computerScore++;
        }
    }

    if (playerInput.toLowerCase() == "scissors" ){
        console.log(playerInput);
        if (computerInput.toLowerCase() == "paper"){
            console.log("gg wp");
            ++humanScore;
        }

        if (computerInput.toLowerCase() == "rock"){
            console.log("f");
            ++computerScore;
        }
    }


   if (humanScore < 5 && computerScore < 5) {
       console.log("Player : ",humanScore, " - ",computerScore," : Computer");
       return RockPaperScissors(computerPlay(),computerScore,humanScore);
   }


   if (humanScore == 5){
       return "you win bro gg ;)"
   }
   if (computerScore == 5){
       return "you lost sorry"
   }
}



console.log(RockPaperScissors(computerPlay(),0,0))
