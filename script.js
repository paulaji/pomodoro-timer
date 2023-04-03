let time = 1500; // 25 minutes in seconds
let timerInterval;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

function startTimer() {
  timerInterval = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timerDisplay.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time < 0) {
      clearInterval(timerInterval);
      timerDisplay.innerHTML = "Time's up!";
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  time = 1500;
  timerDisplay.innerHTML = "25:00";
}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
