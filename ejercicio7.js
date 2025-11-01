const nombres = ['Ana', 'Juan', 'Maria', 'Ana', 'Pedro', 'Luis', 'Juan'];
function tieneDuplicados(arreglo) {
    const setUnico = new Set(arreglo);
    return setUnico.size !== arreglo.length;
}
console.log(tieneDuplicados(nombres));