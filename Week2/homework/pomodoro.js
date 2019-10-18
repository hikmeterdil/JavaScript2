'use strict';
const timerDisplay = document.querySelector('#timer-display');
const startButton = document.querySelector('#start-button');
const pauseButton = document.querySelector('#pause-button');
//assigns variable to + - button html elements
const upButton = document.getElementById('up-button');
const downButton = document.getElementById('down-button');
//shows total duration of current session
const sessionInfoDisplay = document.getElementById('session-info');

//turns minutes in to seconds
const minuteToSeconds = mins => {
  return mins * 60;
};

// default session length
let durationInput = 25;
//default session value in seconds
let currentTimeLeftInSession = minuteToSeconds(durationInput);
let isClockRunning = false;

timerDisplay.innerText = durationInput;

//to display our timer
const displayCurrentTimeLeftInSession = () => {
  const secondsLeft = currentTimeLeftInSession;
  let result = '';
  const seconds = secondsLeft % 60;
  const minutes = parseInt(secondsLeft / 60) % 60;
  let hours = parseInt(secondsLeft / 3600);
  // add  zeroes if it's less than 10
  function addZeroes(time) {
    return time < 10 ? `0${time}` : time;
  }
  if (hours > 0) result += `${hours}:`;
  result += `${addZeroes(minutes)}:${addZeroes(seconds)}`;
  timerDisplay.innerText = result.toString() + ' LEFT';
};

const goUp = () => {
  if (isClockRunning === false) {
    durationInput++;
    timerDisplay.innerText = durationInput;
    return (currentTimeLeftInSession = minuteToSeconds(durationInput));
  }
};

const goDown = () => {
  if (durationInput > 1 && isClockRunning === false) {
    durationInput--;
    timerDisplay.innerText = durationInput;
    return (currentTimeLeftInSession = minuteToSeconds(durationInput));
  }
};

//starts and pauses timer
let clockTimer;
const toggleClock = () => {
  if (isClockRunning === true) {
    // pause the timer
    clearInterval(clockTimer);
    isClockRunning = false;
  } else {
    // start the timer
    isClockRunning = true;
    sessionInfoDisplay.textContent = durationInput;

    clockTimer = setInterval(() => {
      // decrease time left
      if (currentTimeLeftInSession > 0) {
        currentTimeLeftInSession--;
        displayCurrentTimeLeftInSession();
      } else {
        alert('TIME IS UP!!!');
        clearInterval(clockTimer);
      }
    }, 1000);
  }
};

startButton.addEventListener('click', toggleClock);
pauseButton.addEventListener('click', toggleClock);
upButton.addEventListener('click', goUp);
downButton.addEventListener('click', goDown);
