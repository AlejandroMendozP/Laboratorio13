const capitales = new Map([
    ["Perú", "Lima"],
    ["Chile", "Santiago"]
]);
function invertirMap(map) {
    const mapaInvertido = new Map();
    for (const [clave, valor] of map.entries()) {
        mapaInvertido.set(valor, clave);
    }
    return mapaInvertido;
}
console.log("Original:", capitales);
console.log("Invertido:", invertirMap(capitales));
