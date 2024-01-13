let precioProducto = parseFloat(prompt("Ingrese el precio del producto"));
let precioTotal = calcularPrecioTotal(precioProducto);
console.log(`El precio total  es: ${precioTotal}`);

function calcularPrecioTotal(precioProducto) {
    const iva1 = 0.15;
    let iva = precioProducto * iva1;
    let precioTotal = precioProducto + iva;
    return precioTotal;
}
