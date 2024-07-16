/*7- Haz un script que escriba una pirámide inversa de los 
números del 1 al número que indique el usuario (no mayor de 50)  
de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

*/

// Solicitar al usuario un número
let numero = parseInt(prompt("Introduce un número (no mayor de 50):"));

// Verificar que el número esté en el rango permitido
if (numero > 0 && numero <= 50) {
    // Generar la pirámide inversa
    for (let i = numero; i >= 1; i--) {
        for (let j = 0; j < i; j++) {
            document.write(i);
        }
        document.write("<br>");
    }
} else {
    document.write("El número debe estar entre 1 y 50.");
}