const txt_animation = document.querySelector('.txt-animation');
console.log(txt_animation)

var typewriter = new Typewriter(txt_animation, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1200)
  .typeString('My name is Belghiti brahim')
  .pauseFor(300)
  .typeString('&nbsp I am a <strong>Web Designer</strong> ')
  .deleteChars(14)
  .typeString('<strong> Web developer </strong>')
  .pauseFor(1000)
  .start();



