function contarLetras(texto) {
    const conteo = {};
    const textoLimpio = texto.toLowerCase();
    for (const caracter of textoLimpio) {
        if (caracter >= 'a' && caracter <= 'z') {
        conteo[caracter] = (conteo[caracter] || 0) + 1;
        }
    }
    return conteo;
}
console.log(contarLetras("Banana"));
console.log(contarLetras("Hola Mundo!!"));
