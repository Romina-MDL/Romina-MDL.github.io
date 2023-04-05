let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#60405b;">Soy estudiante de Mecatrónica área automatización.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
