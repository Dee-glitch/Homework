'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // TODO complete this function
  window.addEventListener('load', setInterval(timer, 1000));

  function timer() {
    const currentTime = new Date();
    document.querySelector(
      '.clock'
    ).innerHTML = currentTime.toLocaleTimeString();
  }
}

// TODO execute `addCurrentTime` when the browser has completed loading the page
addCurrentTime();
