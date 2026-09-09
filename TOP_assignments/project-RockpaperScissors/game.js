let character = ['Rock', 'Paper', 'Scissors'];
let retry;
do{
    let playerScore = 0;
    let computerScore = 0;
    let playAgain = true;

        function getComputerChoice(){
            let charIndex = Math.floor(Math.random()*3);
            return character[charIndex];

        }

    do{

        let answer = prompt('Pick a character : 1. Rock, 2. Paper, 3. Scissors')
        let Computer = getComputerChoice();
        let Player = getPlayerChoice(answer - 1);

        function getPlayerChoice(int){
            if(int > 0 && int != undefined || null){
                if( int > 3){
                alert('Out of Range: 1. Rock, 2. Paper, 3. Scissors');
            }
            else{
                return character[int];
            }
            }
        }

        function playRound(Computer,Player){
            if(Computer === Player){
                console.log("Draw")
            }
            else if(Computer === 'Rock' && Player === 'Paper'){
                playerScore += 1;
                console.log("Player Wins");
            }
            else if(Computer === 'Paper' && Player === 'Scissors'){
                playerScore += 1;
                console.log("Player Wins");

            }
            else if(Computer === 'Scissors' && Player == 'Rock'){
                playerScore += 1;
                console.log("Player Wins");

            }
            else{
                console.log("Player Lost")
                computerScore += 1;
            }

            console.log("Player     : ", playerScore);
            console.log("Computer   : ", computerScore);

        }

        function getWinner(){
            if(playerScore === 5){
                console.log('Congratulations You Win')
                playAgain = false;
            }
            else if (computerScore === 5){
                console.log("You Lost")
                playAgain = false;
            }
        }

        console.log('Player     : ', Player);
        console.log ('Computer  : ', Computer);
        playRound(Computer,Player);
        getWinner();
    }
    while(playAgain);
    ans = prompt('Do you want to retry: Y/N');
    if(ans == null){
        retry = false;
    }
    else{
        retry =  true;
    }
} while(retry);





