// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.


function minusOMayus(cadena) {
    const letrasMayusculas = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    const letrasMinusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let tieneMinuscula = false;
    let tieneMayuscula = false;
    for(let i=0;i<cadena.length;i++) {
        for(let j=0;j<letrasMayusculas.length;j++){
            if(cadena.charAt(i) === letrasMinusculas[j]) {
                tieneMinuscula = true;
            };
            if(cadena.charAt(i) === letrasMayusculas[j]) {
                tieneMayuscula = true;
            };
        }
    }
    if(tieneMayuscula & tieneMinuscula) {
        return `<p>La cadena ingresada "${cadena}" tiene una mezcla de letras <b>minúsculas</b> y de <b>mayusculas</b>.</p>`;
    }else if(tieneMayuscula) {
        return `<p>La cadena ingresada "${cadena}" solo tiene letras <b>minúsculas</b>.</p>`;
    }else if(tieneMinuscula) {
        return `<p>La cadena ingresada "${cadena}" solo tiene letras <b>mayúsculas</b>.</p>`;
    };
}

const cadenaIngresada = prompt("Por favor ingrese una palabra.");

document.write(minusOMayus(cadenaIngresada));