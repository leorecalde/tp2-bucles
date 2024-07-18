/* 1- Escribir un programa que solicite la edad y 
si es mayor de 18 años mostrar un mensaje que ya puede 
conducir, si la edad ingresada no es un número válido 
indicarlo en un mensaje.
*/

const edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18 && edad < 90) {
  document.write(
    `Su edad es de ${edad} años, esta habilitado a obtener su carnet de manejo para conducir`
  );
} else if (edad >= 90) {
  document.write(
    `Su edad es de ${edad} años, esta habilitado para conducir, pero recomendamos no hacerlo por su seguridad`
  );
} else {
  document.write(
    `Su edad es de ${edad} años, es menor de edad, y no se ecuentra habilitado para conducir.`
  );
}
