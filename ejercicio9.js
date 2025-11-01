function contarPalabras(texto) {
    const conteo = new Map();
    const palabras = texto.toLowerCase().split(/\s+/);  
    for (const palabra of palabras) {
        if (palabra) {
        const cuentaActual = conteo.get(palabra) || 0;
        conteo.set(palabra, cuentaActual + 1);
        
        }
return conteo;
    }
}
console.log(contarPalabras("Sol luna sol sol estrella luna"));
