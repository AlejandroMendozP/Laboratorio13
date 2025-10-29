const numeros = [1, 2, 3, 4];
function doblarNumeros(lista){
    let arregloDoble = new Array(lista.length);
    for(let i=0; i<lista.length; i++){
        arregloDoble[i]=lista[i]*2;    
    }
    return arregloDoble;
}

const arregloDobles = doblarNumeros(numeros);
for(let i=0; i<arregloDobles.length; i++){
    console.log(arregloDobles[i]);
}