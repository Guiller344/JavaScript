// Función para calcular el descuento
function calcularDescuento(precio, porcentajeDescuento) {
    return precio * (porcentajeDescuento / 100);
}

// Función para calcular el precio con descuento
function precioConDescuento(precio, descuento) {
    return precio - descuento;
}

// Función para calcular el impuesto
function calcularImpuesto(precio, porcentajeImpuesto) {
    return precio * (porcentajeImpuesto / 100);
}

// Función para calcular el precio con impuesto
function precioConImpuesto(precio, impuesto) {
    return precio + impuesto;
}
// en uso
const precioProducto = parseFloat(prompt("Ingrese el precio del producto o servicio:"));
const porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento aplicable:"));
const porcentajeImpuesto = parseFloat(prompt("Ingrese el porcentaje de impuesto aplicable:"));

const descuento = calcularDescuento(precioProducto, porcentajeDescuento);
const precioFinalConDescuento = precioConDescuento(precioProducto, descuento);
console.log("El precio con descuento es: $" + precioFinalConDescuento.toFixed(2));

const impuesto = calcularImpuesto(precioFinalConDescuento, porcentajeImpuesto);
const precioFinalConImpuesto = precioConImpuesto(precioFinalConDescuento, impuesto);
console.log("El precio final con impuesto es: $" + precioFinalConImpuesto.toFixed(2));
