var future = 1529900000000;

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
  document.querySelector("#hours").innerHTML = t.hour;
  document.querySelector("#minutes").innerHTML = t.minute;
  document.querySelector("#seconds").innerHTML = t.seconds;
}

setInterval(function() {
	update();
}, 1000);

update();
