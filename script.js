document.addEventListener("DOMContentLoaded", function () {
  let time = 1500; // 25 minutes in seconds
  let timerInterval;
  let counter = 0;

  const timerDisplay = document.getElementById("timer");
  const startButton = document.getElementById("start");
  const resetButton = document.getElementById("reset");
  const breakButton = document.getElementById("break");
  const counterDisplay = document.getElementById("counter");

  function startTimer() {
    startButton.disabled = true;
    breakButton.disabled = true;
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
        counter++;
        counterDisplay.innerHTML = `Completed sessions: ${counter}`;
        startButton.disabled = false;
        breakButton.disabled = false;
      }
    }, 1000);
  }

  function resetTimer() {
    clearInterval(timerInterval);
    time = 1500;
    timerDisplay.innerHTML = "25:00";
    counter = 0;
    counterDisplay.innerHTML = "Completed sessions: 0";
    startButton.disabled = false;
    breakButton.disabled = false;
  }

  function startBreak(duration) {
    time = duration * 60;
    startTimer();
  }

  function showBreakPrompt() {
    const duration = prompt(
      "Choose break duration (in minutes): 2, 5, 7, 10, or 15"
    );
    if (
      duration === "2" ||
      duration === "5" ||
      duration === "7" ||
      duration === "10" ||
      duration === "15"
    ) {
      startBreak(duration);
      breakButton.disabled = true;
    } else {
      alert("Invalid input!");
    }
  }

  breakButton.addEventListener("click", showBreakPrompt);
  startButton.addEventListener("click", startTimer);
  resetButton.addEventListener("click", resetTimer);
});
