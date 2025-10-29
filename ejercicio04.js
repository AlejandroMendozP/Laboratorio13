let lista = [3, -1, 4, -7]

function filtrarYTransformar(arreglo) {
    let sinNegativos = [];
    let cuadrados = [];
    let suma = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] >= 0) {
            sinNegativos.push(arreglo[i]);
        }
    }

    for (let i = 0; i < sinNegativos.length; i++) {
        cuadrados.push(sinNegativos[i] ** 2);
    }

    for (let i = 0; i < cuadrados.length; i++) {
        suma += cuadrados[i];
    }
    return suma;
}

console.log("La suma de numeros es "+filtrarYTransformar(lista));