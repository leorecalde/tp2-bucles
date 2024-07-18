/*10- Realiza un script que pida número de filas y
 columnas y escriba una tabla. Dentro de cada una de
  las celdas deberá escribirse un número consecutivo 
  en orden descendente. Si, por ejemplo, la tabla es
   de 7×5 los números irán del 35 al 1.
*/
//RESUELTO EN CLASES

const filas = parseInt(prompt("ingrese numero de filas"));
const columnas = parseInt(prompt("ingrese numero de columnas"));
celdas = filas*columnas

console.log(filas);
console.log(columnas);

document.write("<table><tbody>");
for (let indiceFilas = 1; indiceFilas <= filas; indiceFilas++) {
  document.write("<tr>");
  for (let indiceColumna = 1; indiceColumna <= columnas; indiceColumna++) {
    document.write(`<td>${celdas}</td>`);
    celdas--;
  }
  document.write("</tr>");
}
document.write("</tbody></table>");
