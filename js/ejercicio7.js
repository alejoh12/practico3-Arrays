// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

const tablaDeMultiplicar = (numero) => {
    document.write(`<h2>Tabla de multiplicar del número ${numero}</h2>`);
    document.write(`<table><thead>`);
    document.write(`<tr>`);
    document.write(`<th>${numero}</th>`);
    document.write(`<th>Resultado</th>`);
    document.write(`</tr>`);
    document.write(`<thead><tbody>`);
    for(let i=0;i<10;i++) {
        document.write(`<tr>`);
        document.write(`<td>${numero} * ${i+1}</td>`);
        document.write(`<td>${numero*(i+1)}</td>`);
        document.write(`</tr>`);
    }
    document.write(`</tbody></table>`);
}

const numeroIngresado = parseInt(prompt("Ingrese el número del cual quiere saber su tabla de multiplicar por favor."));

tablaDeMultiplicar(numeroIngresado);