'use script';

function playSound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`); //seleccionamos el elemento, con el atributo ${}, aquí es el audio
  const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`); //seleccionamos el elemento (div) con el aributo ${} de la tecla que se pulsa
  if (!audio) {
    return; //parará la función del audio
  }
  audio.currentTime = 0; //rebobina el audio al principio, para poder tocar más amenudo
  audio.play();
  key.classList.add('playing');
}

function removeTransition(ev) {
  if (ev.proportyName !== 'transform') {
    this.classList.remove('playing');
    //propertyNam=transition, elegimos una de todas las que suceden, la más larga (consolear el ev)
    //this = nosotros mismos (en este caso key, que pulsamos)
  }
}
const keys = document.querySelectorAll('.key'); //es un array, hay que hacer un bucle
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//para cada elemento de keys se escucha un evento, 'transitioned' es el nombre que le ponemos al evento
// removeTransition es la función que declaramos que va a pasar al suceder el evento

window.addEventListener('keydown', playSound);
