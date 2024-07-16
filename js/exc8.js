/*8- Crea script para generar pirámide siguiente con 
los números del 1 al número que indique el usuario 
(no mayor de 50) 

1
12
123
1234
12345
123456
*/

// Solicitar al usuario un número
let numero = parseInt(prompt("Introduce un número (no mayor de 50):"));

// Verificar que el número esté en el rango permitido
if (numero > 0 && numero <= 50) {
    // Generar la pirámide ascendente
    for (let i = 1; i <= numero; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(j);
        }
        document.write("<br>");
    }
} else {
    document.write("El número debe estar entre 1 y 50.");
}