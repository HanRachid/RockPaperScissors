
const arrayRPS = ["rock", "paper", "scissors"];



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    a = getRandomInt(3);
    return arrayRPS[a];

}

function removeButton() {
    const button = document.querySelector('.start button');
    button.parentNode.removeChild(button);
    return false;
}

function removeScore(score) {
    
}



let humanScore = 0;
let computerScore = 0;
function RockPaperScissors(computerInput, computerScore, humanScore) {
    if (humanScore < 5 && computerScore < 5) {
        let score = "Player : "+humanScore+" - "+computerScore+" : Computer";
        const options = document.querySelector(".options");
        const children = Array.from(options.children);
        const onClick = (e) => {
            computerInput = computerPlay();
            const element = e.currentTarget;
            console.log(element.className, ' - ' , computerInput);
            
            if (element.className.toString().toLowerCase() == computerInput.toLowerCase()) {
                console.log("draw");
        
            }
            if (element.className.toString().toLowerCase() == "rock") {
               
                if (computerInput.toLowerCase() == "scissors") {
                    console.log("gg wp");
                    humanScore++;
                }
        
                if (computerInput.toLowerCase() == "paper") {
                    console.log("f");
                    computerScore++;
                }
                
            }
        
            if (element.className.toString().toLowerCase() == "paper") {
             
                if (computerInput.toLowerCase() == "rock") {
                    console.log("gg wp");
                    humanScore++;
                }
        
                if (computerInput.toLowerCase() == "scissors") {
                    console.log("f");
                    computerScore++;
                }
                
            }
        
            if (element.className.toString().toLowerCase() == "scissors") {
               
                if (computerInput.toLowerCase() == "paper") {
                    console.log("gg wp");
                    ++humanScore;
                }
        
                if (computerInput.toLowerCase() == "rock") {
                    console.log("f");
                    ++computerScore;
                }
              
            }
            if (humanScore == 5) {
                
                const select = document.querySelector('.layout');
                const button = document.createElement("button");
                button.setAttribute('class',"woo");
                button.textContent="Start";
                select.appendChild(button);
            
                children.forEach((element) =>{
                    element.removeEventListener('click', onClick);
                });
                button.addEventListener('click' , (e) => {
                    computerScore=0; 
                    humanScore = 0;
                    let score = "Player : "+humanScore+" - "+computerScore+" : Computer";
                    const buttonn = document.querySelector('.woo');
                    buttonn.parentNode.removeChild(buttonn);
                    scoreBoard.textContent=score;
                    select.appendChild(scoreBoard);
                    return RockPaperScissors(computerPlay(),computerScore, humanScore , scoreBoard);
                });
                
                
                
            }
            if (computerScore == 5) {
                
                
                const select = document.querySelector('.layout');
                const button = document.createElement("button");
                button.setAttribute('class',"woo");
                select.appendChild(button);
               
                button.textContent = "Start";
                children.forEach((element) =>{
                    element.removeEventListener('click', onClick);
                });
                button.addEventListener('click' , (e) => {
                    computerScore=0; 
                    humanScore = 0;
                    let score = "Player : "+humanScore+" - "+computerScore+" : Computer";
                    const buttonn = document.querySelector('.woo');
                    buttonn.parentNode.removeChild(buttonn);
                    scoreBoard.textContent=score;
                    select.appendChild(scoreBoard);
                    return RockPaperScissors(computerPlay(),computerScore, humanScore , scoreBoard);
                });
                
            }
            score = "Player : "+humanScore+" - "+computerScore+" : Computer"
            scoreBoard.textContent = score;
            
            console.log(scoreBoard.textContent);
            
            
        };
        children.forEach((element) =>{
            element.addEventListener('click', onClick);
                
        });
    }


    
}


const button = document.querySelector('.start button');
const select = document.querySelector('.layout');
const scoreBoard = document.createElement("div")
button.addEventListener('click' , (e) => {
    let score = "Player : "+humanScore+" - "+computerScore+" : Computer";
    removeButton();
    ;
    scoreBoard.textContent=score;
    select.appendChild(scoreBoard);
    RockPaperScissors(computerPlay(),computerScore, humanScore , scoreBoard);
});