let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;

let choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = "images/" + choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = "images/" + you + ".png";

    // random for opponenet
    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = "images/" + opponent + ".png";

    // your wins
    if ((you == "rock" && opponent == "scissors") || (you == "paper" && opponent == "rock") || (you == "scissors" && opponent == "paper")) {
        yourScore++;
        document.getElementById("your-score").innerText = yourScore;
        if (yourScore == 3) {
            document.getElementById("your-score").innerText = "";
            document.getElementById("opponent-score").innerText = "You Win";
        }
    }
    else if ((opponent == "rock" && you == "scissors") || (opponent == "paper" && you == "rock") || (opponent == "scissors" && you == "paper")) {
        opponentScore++;
        document.getElementById("opponent-score").innerText = opponentScore;
        if (opponentScore == 3) {
            document.getElementById("your-score").innerText = "";
            document.getElementById("opponent-score").innerText = "Opponent Win";
        }
    }
}