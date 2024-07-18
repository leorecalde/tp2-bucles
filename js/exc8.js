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


let numero = parseInt(prompt("Introduce un número (no mayor de 50):"));

if (numero > 0 && numero <= 50) {
    
    for (let num1 = 1; num1 <= numero; num1++) {
        for (let num2 = 1; num2 <= num1; num2++) {
            document.write(num2);
        }
        document.write("<br>");
    }
} else {
    document.write("El número debe estar entre 1 y 50.");
}