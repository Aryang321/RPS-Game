let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    // console.log("game was draw.")
    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin ,userChoice , computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win");
        msg.innerText = `You Win!. Your ${userChoice} beats ${computerChoice} `;
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        // console.log("you lose");
        msg.innerText = `You Lose!. ${computerChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =",userChoice)
    // generating computer choice
    const computerChoice = genComputerChoice();
    console.log("computer choice =",computerChoice)

    if(userChoice === computerChoice){
        // Draw game
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors=> win , paper=>lose
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            //scissor=> lose , rock=>win
            userWin = computerChoice === "scissors" ? false : true;
        }
        else{
            //paper=> win , rock=> lose
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice ,computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("Id");
        playGame(userChoice);
    });
});








































