let rounds = 0;
        let playerWin = 0;
        let compWin = 0;
        
        

        function playRockPaperScissors(userChoice) {
        let choices = ["rock", "paper", "scissors"];
        let compRandom = choices[(Math.floor(Math.random() * 3))];
        userChoice = userChoice.toLowerCase();
        rounds++;
        
        //let total = 0;//

        if (!choices.includes(userChoice)) {
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

                console.log(rounds);
                if (rounds >= 5) {
                const gameResult =
                playerWin > compWin
                ? 'You won the game! - Reset the game'
                : playerWin === compWin
                ? 'Draw! - Reset the game'
                : 'The computer won! - Reset the game';
                return gameResult;
                } else {
                return roundResult; 
            } 
                //Maybe create a variable or if....else that disables the "Play" button and 
                //the input field when the game reaches 5 rounds, invoking a function to do so.
                
                //We can do something similar to deactivate the field and button when the "Play" button
                //is pressed 5 times.

                //Maybe we can invoke the playGame function 5 times and make the gamResult variable 
                // work only when the 5 rounds are done.
                
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
         }

