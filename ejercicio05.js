function reordenarPalabras(oracion) {
    let palabras = oracion.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].toUpperCase();
    }

    palabras.sort();
    return palabras;
}

console.log(reordenarPalabras("estoy cansado jefe"));