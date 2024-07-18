/*4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let suma = 0;
let continuar;

do {
  let num = prompt("Ingrese un número:");
  if (num !== null) {
    num = parseInt(num);
    if (!isNaN(num)) {
      console.log(`Número ingresado: ${num}`);
      suma += num;
    } else {
      alert("Por favor, ingrese un número válido.");
    }
  }
  continuar = confirm("¿Deseas ingresar otro número?");
} while (continuar);

document.write("La suma total de los números ingresados es: " + suma);
