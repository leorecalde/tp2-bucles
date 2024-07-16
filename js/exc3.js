/*3- Realiza un script que pida frases de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las frases concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/

let frases = "";
let continuar;

do {
    let frase = prompt("Ingrese una frase de texto:");
    if (frase !== null) {
        console.log(`Frase ingresada: ${frase}`);
        if (frases === "") {
            frases = frase;
        } else {
            frases += "-" + frase;
        }
    }
    continuar = confirm("¿Deseas ingresar otra frase?");
} while (continuar);


document.write("Tus frases ingresadas son: " + frases);
