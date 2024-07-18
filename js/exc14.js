/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo
 – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, 
 deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
 */

const texto = prompt("ingrese una frase").toLowerCase;
console.log(texto);

//la c es de caracter :D
for (let c = 0; c <= texto.length; c++) {
  document.write(texto.charAt(c) + "-");
}
