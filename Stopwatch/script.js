let time = document.getElementById("timer");
let hr = 0;
let min = 0;
let sec = 0;
let stopTime = true;

// Start Timer
function startTimer() {
  if (stopTime == true) {
    stopTime = false;
    timeCycle();
  }
}

// Stop Timer
function stopTimer() {
  stopTime == false && (stopTime = true);
}

function timeCycle() {
  if (stopTime == false) {
    hr = parseInt(hr);
    min = parseInt(min);
    sec = parseInt(sec);

    sec = sec + 1;

    // Limiting to 60 seconds
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }

    // Limiting to 60 Minutes
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    // Adding zero "0" prefix if value is less than 10
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hr < 10) {
      hr = "0" + hr;
    }

    // Display Timer
    time.innerHTML = hr + ":" + min + ":" + sec;

    setTimeout("timeCycle()", 1000);
  }
}

// Reset Timer
function resetTimer() {
  time.innerHTML = "00:00:00";
  stopTime = true;
  hr = 0;
  sec = 0;
  min = 0;
}
