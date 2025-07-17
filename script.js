const introScreen = document.getElementById("intro-screen");
const dressupScreen = document.getElementById("dressup-screen");
const podiumScreen = document.getElementById("podium-screen");

document.getElementById("start-btn").onclick = () => {
  introScreen.classList.add("hidden");
  dressupScreen.classList.remove("hidden");
};

document.getElementById("done-btn").onclick = () => {
  dressupScreen.classList.add("hidden");
  podiumScreen.classList.remove("hidden");

  // optional: copy outfit to final screen
};

document.getElementById("restart-btn").onclick = () => {
  location.reload(); // quick way to restart the game
};

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-btn");
  const introScreen = document.getElementById("intro-screen");
  const gameScreen = document.getElementById("game-screen");

  startButton.addEventListener("click", () => {
    introScreen.style.display = "none";
    gameScreen.style.display = "block";
  });
});
