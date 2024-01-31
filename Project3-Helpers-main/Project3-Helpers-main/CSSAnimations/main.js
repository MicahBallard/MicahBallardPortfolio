let colorSwatch = document.getElementById("color-swatch");
let startButton = document.getElementById("start-button");

startButton.addEventListener("click", () => {
  colorSwatch.style.animationPlayState = "running";
})