function computerPlay(){

    const choices = ["rock", "paper", "scissors"];

    const selection = choices[Math.floor(Math.random() * choices.length)];

    console.log(`cpu selects : ${selection}`);
    return selection;
};


function playRound(playerSelection, computerSelection) {

    let result = "";
    pS = playerSelection.toLowerCase();
    cS = computerSelection.toLowerCase();

    if(pS == cS){
        result = `DRAW! You both picked: ${pS}`;
        console.log(result);
        alert(result);
        return result;

    }else if(pS == "rock" && cS == "paper" ) {
        result = "YOU LOSE! Paper beats Rock";
        console.log(result);
        alert(result);
        return result;
    }else if(pS == "rock" && cS == "scissors"){
        result = "YOU WIN! Rock beats Scissors";
        console.log(result);
        alert(result);
        return result;
    }

    else if(pS == "scissors" && cS == "paper"){
        result = "YOU WIN! Scissors beats Paper";
        console.log(result);
        alert(result);
        return result;
    }else if(pS == "scissors" && cS == "rock"){
        result = "YOU LOSE! Rock beats Scissors";
        console.log(result);
        alert(result);
        return result;
    }

    else if(pS == "paper" && cS == "scissors"){
        result = "YOU LOSE! Scissors beats Paper";
        console.log(result);
        alert(result);
        return result;
    }else if(pS == "paper" && cS == "rock"){
        result = "YOU WIN! Paper beats Rock";
        console.log(result);
        alert(result);
        return result;
    }
    
    else {
        return "YEET";
    }


};

//playRound("paper",computerPlay());

function game(){

    let pS = "";

    for (let i = 0; i<5; i++){
        pS = prompt("Choose rock, paper, or scissors!");
        playRound(pS,computerPlay());
    }


}

game();