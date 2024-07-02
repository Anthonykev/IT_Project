const colorHex = document.getElementById("color-hex");
const color1 = document.getElementById("color-1");
const color2 = document.getElementById("color-2");
const color3 = document.getElementById("color-3");
const answer = document.getElementById("answer");
const buttonDiv = document.getElementById("buttonDiv");

const button = document.createElement("button");
button.innerText = "Play Again!";

let randomColor = generateColor();
colorHex.innerText = randomColor;

const randomElement = Math.floor(Math.random() * 3) + 1;

if (randomElement === 1) {
  color1.style.backgroundColor = randomColor;
  color2.style.backgroundColor = generateColor();
  color3.style.backgroundColor = generateColor();
} else if (randomElement === 2) {
  color1.style.backgroundColor = generateColor();
  color2.style.backgroundColor = randomColor;
  color3.style.backgroundColor = generateColor();
} else {
  color1.style.backgroundColor = generateColor();
  color2.style.backgroundColor = generateColor();
  color3.style.backgroundColor = randomColor;
}
function generateColor() {
  let color;
  do {
    color =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
  } while (!/^#[0-9A-F]{6}$/i.test(color));
  return color;
}
function rgbToHex(rgb) {
  const rgbValues = rgb.split(/\D+/).filter((val) => val !== "");
  const hexValues = rgbValues.map((val) =>
    Number(val).toString(16).padStart(2, "0")
  );
  const hex = "#" + hexValues.join(""); // Hex-Code
  return hex;
}
const checkColor = (event) => {
  const clickedColor = rgbToHex(event.target.style.backgroundColor);
  console.log("clicked-color:", clickedColor);
  if (clickedColor === randomColor) {
    answer.innerText = "Correct!";
  } else {
    answer.innerText = "Incorrect!";
  }
  buttonDiv.append(button);
};

function reload() {
  location.reload();
}
color1.addEventListener("click", checkColor);
color2.addEventListener("click", checkColor);
color3.addEventListener("click", checkColor);
button.addEventListener("click", reload);
