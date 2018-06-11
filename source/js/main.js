var future = (new Date()).getTime() + 10000000;

function convertMS( milliseconds ) {
  var day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;

  return {
    day: day,
    hour: hour,
    minute: minute,
    seconds: seconds
  };
}

function update() {
  var t = convertMS(future - new Date());

  document.querySelector("#days").innerHTML = t.day;
  if (t.day == 0) {
    document.querySelector("#days").classList.add("empty");
  }

  document.querySelector("#hours").innerHTML = t.hour;
  if (t.hour == 0 && t.day == 0) {
    document.querySelector("#hours").classList.add("empty");
  }

  document.querySelector("#minutes").innerHTML = t.minute;
  if (t.minute == 0 && t.hour == 0 && t.day == 0) {
    document.querySelector("#minutes").classList.add("empty");
  }

  document.querySelector("#seconds").innerHTML = t.seconds;
  if (t.seconds == 0 && t.minute == 0 && t.hour == 0 && t.day == 0) {
    document.querySelector("#seconds").classList.add("empty");
  }
}

setInterval(function() {
  update();
}, 1000);

update();
