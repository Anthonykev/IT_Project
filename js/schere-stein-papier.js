$(document).ready(function () {
  console.log("JQUERY FUNKTIONIERT!!!");
  fadeOutIn();
});

// Hier erstell ich den Array für die Auswahl
const choices = ["Stein", "Papier", "Schere"];
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
    (playerChoice === "Stein" && computerChoice === "Stein") ||
    (playerChoice === "Papier" && computerChoice === "Papier") ||
    (playerChoice === "Schere" && computerChoice === "Schere")
  ) {
    result = "Unentschieden!😯";
  } else {
    switch (playerChoice) {
      case "Stein":
        result =
          computerChoice === "Schere"
            ? "Sie haben  Gewonnen!😁"
            : "Sie haben  Verloren!😫";
        break;
      case "Papier":
        result =
          computerChoice === "Stein"
            ? "Sie haben  Gewonnen!😁"
            : "Sie haben  Verloren!😫";
        break;

      case "Schere":
        result =
          computerChoice === "Papier"
            ? "Sie haben  Gewonnen!😁"
            : "Sie haben  Verloren!😫";
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
    case "Sie haben  Gewonnen!😁":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "Sie haben  Verloren!😫":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;

    case "Unentschieden!😯":
      drawScore++;
      drawScoreDisplay.textContent = drawScore;

    default:
      break;
  }
}

document.getElementById("infos").addEventListener("click", function () {
  window.location.href = "/pages/rock_paper_sciccor_information.html";
});
