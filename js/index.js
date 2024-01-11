console.log("Hola mundo");

let nombre= "Jordy";
let apellido= "Velasco";
let edad=23;

console.log("Mi nombre  es  "+nombre+" y mi apellido es "+apellido)

console.log(`Mi  nombre es ${nombre} ${apellido} tengo ${edad} años`);


let b=5;
let c="Hola";
let multi=b*c;
console.log(multi);

const persona={
    nombre: "Jordy",
    apellido: "Velasco",
    edad:23,
    estado_civil:"Casado",
    pasatiempos:["Leer","Escribir","Enseñar"],
    estudios:{
        primaria:  "Escuela  andoas",
        secundaria: "Andoas",
        superior: "Andoas"
    },    
    saludar:function(){
        return "Buenas noches";
    }
}

console.log(persona.nombre);
console.log(persona.saludar);

const arreglo=["Hola",true,22,"Chao"]
console.log(arreglo);
console.log(arreglo[1]);

arreglo.push("Pedro");
console.log(arreglo);
arreglo.pop();
console.log(arreglo);

console.log(typeof b);

