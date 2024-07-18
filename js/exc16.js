/*16- Realiza un script que pida una cadena de texto 
y la devuelva al revés. Es decir, si tecleo 
“hola que tal” deberá mostrar “lat euq aloh”.
*/

/*const texto = prompt ("ingrese una frase").toLowerCase;
let delReves = ""

for(let c = texto.length - 1; c >= 0; c--){
delReves =+ texto.charAt(c)
}

document.write(delReves)
*/

const texto = prompt("Ingrese una frase").toLowerCase();
let delReves = "";

for (let c = texto.length - 1; c >= 0; c--) {
    delReves += texto.charAt(c);
}

document.write(delReves);
