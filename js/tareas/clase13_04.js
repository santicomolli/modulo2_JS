/* Tarea 1
-----------
Dado 3 arreglos de números unir todos en uno solo y ordenarlos de mayor a menor

*/
let numeros1 = [13, 456, 786, 23, 45];
let numeros2 = [67, 3, 5];
let numeros3 = [90, 1245, 56000];

function ejercicio1() {
    let numerosParaOrdenar = numeros1.concat(numeros2, numeros3);

    numerosParaOrdenar.sort(function (a, b) {
    return b - a;
});

    console.log(numerosParaOrdenar);
}

/*
Tarea 2
---------
Filtrar de un arreglo de personas todos los nombres que contengan la letra "m"
*/

let personas = [
"Joaquín",
"Daniel",
"Magdalena",
"Gonzalo",
"Armando",
"Samuel",
"Valentina",
];

function obtenerNombreConLetra(letra) {
    let nombres = personas.filter(function (nombre) {
    return nombre.toUpperCase().includes(letra.toUpperCase());
});

    return nombres;
}

console.log(obtenerNombreConLetra("m"));

/*
Tarea 3
----------
Tomar una lista de lenguajes de programación y mostrar en consola una lista ordenada con los nombres ordenados alfabéticamente y en mayúsculas sin mutar el arreglo original.

*/

let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net"];

function ordenarLenguajes() {
  //definir un nuevo arreglo
  //ordenarlos por orden alfabético
  //en mayusculas
  // en una lista ordenada
  //1-javascript
  //2-java
}
