var app = document.querySelector('.txt-animation');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 55,
});

typewriter
  .pauseFor(1200)
  .typeString('My name is Belghiti brahim')
  .pauseFor(300)
  .typeString('<br> <strong>I am a <span style="color: #5067b3;">Web designer</span></strong> ')
  .deleteChars(13)
  .typeString('<strong><span style="color: #5067b3;">Web developer</span></strong>')
  .pauseFor(1000)
  .start();



function myFunction() {
  var x = document.getElementById("Nav-gauche");
  if (x.className === "nav-gauche") {
    x.className += " responsive";
  } else {
    x.className = "nav-gauche";
  }
}



