// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

const sumasPosibles = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 50; i++) {
  // Aquí creo el primer dado
  let dadoPrimero = Math.round(Math.random() * 10);
  if (dadoPrimero >= 7 && dadoPrimero <= 10) {
    dadoPrimero -= 4;
  }
  if (dadoPrimero === 0) {
    dadoPrimero++;
  }

  // Aquí creo el segundo dado
  let dadoSegundo = Math.round(Math.random() * 10);
  if (dadoSegundo >= 7 && dadoSegundo <= 10) {
    dadoSegundo -= 4;
  }
  if (dadoSegundo === 0) {
    dadoSegundo++;
  }

  const sumaDados = dadoPrimero + dadoSegundo;

  for (let j = 0; j < sumasPosibles.length; j++) {
    if (sumaDados === sumasPosibles[j]) {
      apariciones[j]++;
    }
  }
}

document.write(`<table><thead>`);
document.write(`<tr>`);
document.write(
  `<th>Suma <i class="bi bi-box-fill"></i> <i class="bi bi-box-fill"> </i></th>`
);
document.write(`<th>Apariciones</th>`);
document.write(`<tr>`);
document.write(`<thead><tbody>`);
for (let i = 0; i < sumasPosibles.length; i++) {
  document.write(`<tr>`);
  document.write(`<td>${sumasPosibles[i]}</td>`);
  document.write(`<td>${apariciones[i]}</td>`);
  document.write(`<tr>`);
}
document.write(`</tbody></table>`);
