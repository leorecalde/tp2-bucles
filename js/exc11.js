//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *


const nombre1 = prompt("ingrese su nombre")
const edad1 = parseInt(prompt(`hola ${nombre1}! ingrese su edad`))
console.log (nombre1 + edad1)

const nombre2 = prompt("ingrese su nombre")
const edad2 = parseInt(prompt(`hola ${nombre2}! ingrese su edad`))
console.log (nombre2 + edad2)

const nombre3 = prompt("ingrese su nombre")
const edad3 = parseInt(prompt(`hola ${nombre3}! ingrese su edad`))
console.log (nombre3 + edad3)


if (edad1 > edad2 && edad1 > edad3){
    document.write("Hola" + nombre1 + `, tu eres el mayor del grupo con ${edad1} años` )
} else if (edad2 > edad1 && edad2 > edad3){
    document.write(`Hola ${nombre2} tu eres el mayor del grupo con ${edad2} años`)
} else{
    document.write(`Hola ${nombre3} tu eres el mayor del grupo con ${edad3} años`)
}