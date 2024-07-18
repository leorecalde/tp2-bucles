/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:



Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1

const frase = prompt("ingrese una frase").toLowerCase
console.log(frase)
let vocal = ""

for(let c = 0; c <= frase.length; c++){
    if (c === "a" || c === "e" || c === "i" || c ===  "o" || c === "u"){
        vocal =+ c
        document.write(`la vocal ${vocal} esta en la posicion ${frase.charAt(c)}`)
    }
}

*/

const frase = prompt("Ingrese una frase").toLowerCase();
console.log(frase);
let vocal = "";

for (let c = 0; c < frase.length; c++) {
    if (frase.charAt(c) === "a" || frase.charAt(c) === "e" || frase.charAt(c) === "i" || frase.charAt(c) === "o" || frase.charAt(c) === "u") {
        vocal = frase.charAt(c);
        document.write(`La vocal ${vocal} está en la posición ${c}`);
        break;
    }
}
