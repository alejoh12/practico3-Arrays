// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function esPar(numeroEntero) {
    if(numeroEntero % 2 === 0) {
        return `El número ingresado ${numeroEntero}, es "par".`;
    }else {
        return `El número ingresado ${numeroEntero} es "impar".`;
    }
}

let numeroIngresado = parseInt(prompt("Por favor, ingrese un número entero."));

document.write(`<p>${esPar(numeroIngresado)}</p>`);