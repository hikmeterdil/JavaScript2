'use strict';

const body = document.body;
const time = document.createElement("span");
body.append(time);

function showTime() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  time.textContent = h + ":" + m + ":" + s;
}

setInterval(showTime, 1000);
