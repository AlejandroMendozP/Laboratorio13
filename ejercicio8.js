const listaDeCompras = new Map([
    ['manzana', 2.50],
    ['leche', 4.00],
    ['pan', 1.50]
]);
listaDeCompras.set('plátano', 3.00);
let precioTotal = 0;
for (const precio of listaDeCompras.values()) {
    precioTotal += precio;
}
console.log("Lista de compras:", listaDeCompras);
console.log("Precio total:", precioTotal);
