console.log("Opciones disponibles:");
console.log("1. Ford Fiesta");
console.log("2. Ford Focus");

let opcion = prompt("Elija el numero 1.Ford fiesta  2. Ford Focus");

switch (opcion) {
    case '1':
        console.log(`El descuento para un Ford Fiesta es del 5%.`);
        break;

    case '2':
        console.log(`El descuento para un Ford Focus es del 10%.`);
        break;

    default:
        console.log(`Opción no válida. Por favor, elija 1 o 2.`);
}

function calcularDescuento(modelo) {
    switch (modelo()) {
        case 'ford fiesta':
            return 0.05; 
        case 'ford focus':
            return 0.1; 
        default:
            return 0;
    }
}


