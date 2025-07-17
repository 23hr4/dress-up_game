document.addEventListener("DOMContentLoaded", () => {
  const introScreen = document.getElementById("intro-screen");
  const dressupScreen = document.getElementById("dress-up-screen");
  const podiumScreen = document.getElementById("podium-screen");

  const startBtn = document.getElementById("start-btn");
  const doneBtn = document.getElementById("done-btn");
  const restartBtn = document.getElementById("restart-btn");

  startBtn.addEventListener("click", () => {
    introScreen.classList.add("hidden");
    dressupScreen.classList.remove("hidden");
  });

  doneBtn.addEventListener("click", () => {
    dressupScreen.classList.add("hidden");
    podiumScreen.classList.remove("hidden");
  });

  restartBtn.addEventListener("click", () => {
    location.reload();
  });
});
