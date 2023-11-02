/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
*/ 

const ciudades = [];

do {
    const ciudad = prompt("Ingrese una ciudad, por favor");
    ciudades.push(ciudad);
}while(confirm("¿Desea ingresar otra ciudad?"));

// •	Mostrar la longitud del arreglo.
document.write(`<p>El arreglo tiene ${ciudades.length} elementos</p>`);

// •	Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write(`<ul>`);
document.write(`<li>Elemento 1er posición: ${ciudades[0]}</li>`);
document.write(`<li>Elemento 3er posición: ${ciudades[2]}</li>`);
document.write(`<li>Elemento ultima posición: ${ciudades[ciudades.length-1]}</li>`);
document.write(`</ul>`);

// •	Añade en última posición la ciudad de París.
ciudades.push("Paris");
document.write(`<ul>`);
document.write(`<li>Elemento ultima posición: ${ciudades[ciudades.length-1]}</li>`);
document.write(`</ul>`);

// •	Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(`<ul>`);
document.write(`<li>Elemento 2da posición: ${ciudades[1]}</li>`);
document.write(`</ul>`);

// •	Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades.splice(1,0,"Barcelona");

document.write(`<h2>Arreglo de Ciudades</h2>`);
document.write(`<ul>`);
for(let i=0;i<ciudades.length;i++) {
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write(`</ul>`);