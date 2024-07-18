//12- Realiza un script que genere un número aleatorio entre 1 y 99

const min = 1;
const max = 99;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
document.write(numeroAleatorio);
