/*
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
•	La fórmula del perímetro  es p = 2*(a +b)
Ejemplo:
Input:
lado A = 24
lado B = 5

Output: 58
*/

const perimetroRectangulo = (base, altura) => 2 * (base + altura);

const baseIngresada = parseInt(
  prompt("Ingrese la base de un rectangulo, por favor.")
);
const alturaIngresada = parseInt(
  prompt("Ingrese la altura del rectangulo, por favor.")
);

document.write(
  `<p>El perímetro del rectangulo es: ${perimetroRectangulo(
    baseIngresada,
    alturaIngresada
  )}</p>`
);
