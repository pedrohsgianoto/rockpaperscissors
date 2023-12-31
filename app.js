let rounds = 0;
        let playerWin = 0;
        let compWin = 0;
    
            function playRockPaperScissors(userChoice) {
            let choices = ["rock", "paper", "scissors"];
            let compRandom = choices[(Math.floor(Math.random() * 3))];
            userChoice = userChoice.toLowerCase();
            rounds++;
        
        //Added this to make the game stops when 5 rounds are completed. 
        //Took me a little bit of a time to find out this simple solution...
            if (rounds > 5) {
            return "Game over. Reset the game";
                }
        
            if (!choices.includes(userChoice)) {
            rounds--;
            return "Invalid choice. Choose Rock, Paper or Scissors.";
            }
            //Compare user's choice with computer's choice
            let roundResult;

            if (userChoice === compRandom) {
                return `Round ${rounds}: Draw! Play again.`;
            } else if (
                (userChoice === "rock" && compRandom === "scissors") ||
                (userChoice === "paper" && compRandom === "rock") ||
                (userChoice === "scissors" && compRandom === "paper") 
                ) {
                playerWin++;
                roundResult = `Round ${rounds}: You won this round! Computer chose ${compRandom}.`;
                    
                } else {
                compWin++;
                roundResult = `Round ${rounds}: Computer wins now! Computer chose ${compRandom}.`;
                } 
                
                if (rounds >= 5) {
                const gameResult =
                playerWin > compWin
                ? 'You won the game!'
                : playerWin === compWin
                ? 'Draw! - Reset the game'
                : 'The computer won!';
                return gameResult;
                }else {
                return roundResult; 
        } 
    }
        
     /*function setGameOver() {
	  userChoice.disabled = true;
	  playGame.disabled = true;
	  resetButton = document.createElement('button');
	  resetButton.textContent = 'Start new game';
	  document.body.appendChild(resetButton);
	  }*/
    
        document.getElementById("resetButton").onclick = resetGame;
        
        function resetGame() {
        rounds = 0;
        }

        function playGame(){
        const userChoice = document.getElementById("userChoice").value;
        const resultElement = document.getElementById("result");
        const result = playRockPaperScissors(userChoice);
        resultElement.textContent = result;
        //Added this below to change the text that gives the results accordingly.
        if (rounds >= 7) {
            resultElement.textContent = "";
        } else if (rounds >= 6) {
            resultElement.textContent = "Game over. Reset the game";
        }
         }

