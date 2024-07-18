/*5- Realizar una página con un script que calcule el valor de la letra de 
un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 

Input:  40773821 
Output: ‘L’

*/
/*

do{
    const dni = parseInt(prompt("Ingrese su D.N.I. (0 al 99.999.999)"));
    const resultado = dni % 23;
    
    if (resultado === 0) {
        document.write("Por su N° de DNI, le corresponde la letra T");
    } else if (resultado === 1) {
        document.write("Por su N° de DNI, le corresponde la letra R");
    } else if (resultado === 2) {
        document.write("Por su N° de DNI, le corresponde la letra W");
    } else if (resultado === 3) {
        document.write("Por su N° de DNI, le corresponde la letra A");
    } else if (resultado === 4) {
        document.write("Por su N° de DNI, le corresponde la letra G");
    } else if (resultado === 5) {
        document.write("Por su N° de DNI, le corresponde la letra M");
    } else if (resultado === 6) {
        document.write("Por su N° de DNI, le corresponde la letra Y");
    } else if (resultado === 7) {
        document.write("Por su N° de DNI, le corresponde la letra F");
    } else if (resultado === 8) {
        document.write("Por su N° de DNI, le corresponde la letra P");
    } else if (resultado === 9) {
        document.write("Por su N° de DNI, le corresponde la letra D");
    } else if (resultado === 10) {
        document.write("Por su N° de DNI, le corresponde la letra X");
    } else if (resultado === 11) {
        document.write("Por su N° de DNI, le corresponde la letra B");
    } else if (resultado === 12) {
        document.write("Por su N° de DNI, le corresponde la letra N");
    } else if (resultado === 13) {
        document.write("Por su N° de DNI, le corresponde la letra J");
    } else if (resultado === 14) {
        document.write("Por su N° de DNI, le corresponde la letra Z");
    } else if (resultado === 15) {
        document.write("Por su N° de DNI, le corresponde la letra S");
    } else if (resultado === 16) {
        document.write("Por su N° de DNI, le corresponde la letra Q");
    } else if (resultado === 17) {
        document.write("Por su N° de DNI, le corresponde la letra V");
    } else if (resultado === 18) {
        document.write("Por su N° de DNI, le corresponde la letra H");
    } else if (resultado === 19) {
        document.write("Por su N° de DNI, le corresponde la letra L");
    } else if (resultado === 20) {
        document.write("Por su N° de DNI, le corresponde la letra C");
    } else if (resultado === 21) {
        document.write("Por su N° de DNI, le corresponde la letra K");
    } else if (resultado === 22) {
        document.write("Por su N° de DNI, le corresponde la letra E");
    }
} while ( dni !== isNaN){
    alert("ingrese numeros validos!")
}
*/

let dni;
do {
    dni = parseInt(prompt("Ingrese su D.N.I. (0 al 99.999.999)"));
    if (isNaN(dni)) {
        alert("Ingrese un número válido!");
    }
} while (isNaN(dni));

const resultado = dni % 23;

if (resultado === 0) {
    document.write("Por su N° de DNI, le corresponde la letra T");
} else if (resultado === 1) {
    document.write("Por su N° de DNI, le corresponde la letra R");
} else if (resultado === 2) {
    document.write("Por su N° de DNI, le corresponde la letra W");
} else if (resultado === 3) {
    document.write("Por su N° de DNI, le corresponde la letra A");
} else if (resultado === 4) {
    document.write("Por su N° de DNI, le corresponde la letra G");
} else if (resultado === 5) {
    document.write("Por su N° de DNI, le corresponde la letra M");
} else if (resultado === 6) {
    document.write("Por su N° de DNI, le corresponde la letra Y");
} else if (resultado === 7) {
    document.write("Por su N° de DNI, le corresponde la letra F");
} else if (resultado === 8) {
    document.write("Por su N° de DNI, le corresponde la letra P");
} else if (resultado === 9) {
    document.write("Por su N° de DNI, le corresponde la letra D");
} else if (resultado === 10) {
    document.write("Por su N° de DNI, le corresponde la letra X");
} else if (resultado === 11) {
    document.write("Por su N° de DNI, le corresponde la letra B");
} else if (resultado === 12) {
    document.write("Por su N° de DNI, le corresponde la letra N");
} else if (resultado === 13) {
    document.write("Por su N° de DNI, le corresponde la letra J");
} else if (resultado === 14) {
    document.write("Por su N° de DNI, le corresponde la letra Z");
} else if (resultado === 15) {
    document.write("Por su N° de DNI, le corresponde la letra S");
} else if (resultado === 16) {
    document.write("Por su N° de DNI, le corresponde la letra Q");
} else if (resultado === 17) {
    document.write("Por su N° de DNI, le corresponde la letra V");
} else if (resultado === 18) {
    document.write("Por su N° de DNI, le corresponde la letra H");
} else if (resultado === 19) {
    document.write("Por su N° de DNI, le corresponde la letra L");
} else if (resultado === 20) {
    document.write("Por su N° de DNI, le corresponde la letra C");
} else if (resultado === 21) {
    document.write("Por su N° de DNI, le corresponde la letra K");
} else if (resultado === 22) {
    document.write("Por su N° de DNI, le corresponde la letra E");
}

