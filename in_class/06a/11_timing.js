/*
Utilizing global timer functions
 */

var waitTime = 3000;
var currTime = 0;
var waitInterval = 100;
var percentWaited = 0;


function writeWaitingPercent(p) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(
  function() {
    currTime += waitInterval;
    percentWaited = Math.floor((currTime/waitTime) * 100);

    writeWaitingPercent(percentWaited);
  },
  waitInterval
);

setTimeout(
  function() {
    clearInterval(interval);
    writeWaitingPercent(100);
    console.log("\n\ndone!\n");
  },
  waitTime
);

process.stdout.write('\n\n');
writeWaitingPercent(percentWaited);
