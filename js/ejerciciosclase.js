let numero1=parseInt(prompt("Ingrese el primer numero"))
let numero2=parseInt(prompt("Ingrese el segundo numero"))
let opcion=prompt("Elija una opcion: 1.Sumar <br> 2.Restar <br> 3.Multiplicar <br> 4.Multiplicar")
switch (opcion) {
    case '1':
        console.log("La suma es: " + sumar(numero1, numero2));
        break;

    case '2':
        console.log("La resta es: " + restar(numero1, numero2));
        break;

    case '3':
        console.log("La multiplicacion es  : " + multiplicar(numero1, numero2));
        break;

    case '4':
        console.log("La división es: " + dividir(numero1, numero2));
        break;
}


function sumar(numero1,numero2){
    let suma= numero1+numero2;
    return suma;
}
function restar(numero1, numero2) {
    let resta = numero1 - numero2;
    return resta;
}

function multiplicar(numero1, numero2) {
    let producto = numero1 * numero2;
    return producto;
}

function dividir(numero1, numero2) {
    if (numero2 !== 0) {
        let division = numero1 / numero2;
        return division;
    } 
}