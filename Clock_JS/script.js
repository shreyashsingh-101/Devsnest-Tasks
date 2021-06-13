var h_hand = document.querySelector(".hand__3").style;
var m_hand = document.querySelector(".hand__2").style;
var s_hand = document.querySelector(".hand__1").style;

var digital = document.querySelector(".digital");

function clock() {
  var d = new Date();
  var h = d.getHours() % 12;
  if (h == 0) h = 12;
  var m = d.getMinutes();
  var s = d.getSeconds();
  var ms = d.getMilliseconds();

  

  h_hand.transform = `rotate(${h * 30 - 90 + (m / 60) * 30}deg)`;
  m_hand.transform = `rotate(${m * 6 - 90}deg)`;
  s_hand.transform = `rotate(${(ms / 1000 + s) * 6 - 90}deg)`;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  digital.innerHTML = `${h}:${m}:${s}`;
}

window.setInterval(clock, 1);
