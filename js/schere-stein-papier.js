$(document).ready(function () {
  console.log("JQUERY FUNKTIONIERT!!!");
  fadeOutIn();
});

// Hier erstell ich den Array für die Auswahl
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const drawScoreDisplay = document.getElementById("drawScoreDisplay");
let playerScore = 0;
let computerScore = 0;

let drawScore = 0;
function fadeOutIn() {
  $("#title").animate({ opacity: "0.2" }, 1000, function () {
    $("#title").animate({ opacity: "1" }, 1000, fadeOutIn);
  });
}

function playGame(playerChoice) {
  // ich benutze die Math.random um eine zufälige Zahl zu erzeugen. Ich benutze Math.floor um eine gerade zahl zu kriegen
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);

  let result = "";

  if (
    (playerChoice === "rock" && computerChoice === "rock") ||
    (playerChoice === "paper" && computerChoice === "paper") ||
    (playerChoice === "scissors" && computerChoice === "scissors")
  ) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;

      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;

      default:
        break;
    }
  }
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;

    case "IT'S A TIE!":
      drawScore++;
      drawScoreDisplay.textContent = drawScore;

    default:
      break;
  }
}
