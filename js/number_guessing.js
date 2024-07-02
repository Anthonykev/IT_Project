document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".input-field input[type='number']");
  const guess = document.querySelector(".guess");
  const checkButton = document.querySelector(".input-field button");
  const remainChances = document.querySelector(".chances");

  console.log("Input element:", input);
  console.log("Guess element:", guess);
  console.log("Check button element:", checkButton);
  console.log("Chances element:", remainChances);

  input.focus();

  let randomNum = Math.floor(Math.random() * 100) + 1;
  let chance = 10;

  console.log("Game initialized. Random number:", randomNum);

  checkButton.addEventListener("click", () => {
    console.log("Check button clicked");

    if (checkButton.textContent === "Replay") {
      window.location.reload();
      return;
    }

    let inputValue = Number(input.value);
    console.log("Input value:", inputValue);

    if (inputValue < 1 || inputValue > 100 || isNaN(inputValue)) {
      guess.textContent = "Your number is invalid";
      guess.style.color = "#DE0611";
      console.log("Invalid number");
      return;
    }

    chance--;
    remainChances.textContent = chance;
    console.log("Chances left:", chance);

    if (inputValue === randomNum) {
      guess.textContent = "Congratulations! You guessed the correct number.";
      input.disabled = true;
      checkButton.textContent = "Replay";
      guess.style.color = "#333";
      console.log("Congratulations! You guessed the correct number.");
    } else if (inputValue > randomNum) {
      guess.textContent = "Your guess is high";
      guess.style.color = "#333";
      console.log("Your guess is high");
    } else {
      guess.textContent = "Your guess is low";
      guess.style.color = "#333";
      console.log("Your guess is low");
    }

    if (chance === 0) {
      checkButton.textContent = "Replay";
      input.disabled = true;
      guess.textContent = "You lost the game";
      guess.style.color = "#DE0611";
      console.log("You lost the game");
    }
  });
  document.getElementById("infos").addEventListener("click", function () {
    window.location.href = "/pages/number_guessing_information.html";
  });
});
