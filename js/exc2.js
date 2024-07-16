/* 2- Escribir un programa que solicite una nota (número) de 0  a 10. 
Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 
mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:

Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido
*/

let nota;
do {
    nota = parseInt(prompt("Ingrese su calificación (del 0 al 10)"));
    if (nota < 0 || nota > 10) {
        alert("ERROR! Ingresaste una nota inválida");
    } else {
        switch (nota) {
            case 0:
            case 1:
            case 2:
                alert(`Nota registrada: ${nota}, Muy deficiente`);
                break;
            case 3:
            case 4:
                alert(`Nota registrada: ${nota}, Insuficiente`);
                break;
            case 5:
            case 6:
                alert(`Nota registrada: ${nota}, Suficiente`);
                break;
            case 7:
                alert(`Nota registrada: ${nota}, Bien`);
                break;
            case 8:
            case 9:
                alert(`Nota registrada: ${nota}, Muy Bien`);
                break;
            case 10:
                alert(`Nota registrada: ${nota}, Excelente 10, te felicito!`);
                break;
        }
    }
} while ( nota < 0 || nota > 10);

