let nota1 = parseFloat(prompt("Ingrese la primera nota"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota"));

let promedioNotas = calcularPromedio(nota1, nota2, nota3);

let resultado = Validacion(promedioNotas);
console.log(`El promedio es ${promedioNotas}. El alumno esta ${resultado}.`);

function calcularPromedio(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

function Validacion(promedio) {
    if (promedio >= 7) {
        return "Aprobado";
    } else {
        return "Suspendido";
    }
}

