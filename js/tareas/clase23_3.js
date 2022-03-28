/*
Tarea 1
-------

- Obtener un número aleatorio entre 1 y 100

- Calcular su raiz cuadrada y mostrar en consola el resultado
- Elevarlo a la quinta potencia y mostrar en consola el resultado


Tarea 2
--------

- Según la siguiente lista de números 120,250,78,96,-38,45.72,1450,2380
- Mostrar en consola el menor 
- Mostrar en consola el mayor

Tarea 3
--------

- Dado los siguientes números, dejarlos con dos decimales y mostrar en consola los mismos redondeados:
45.895025
56.788789
78.413582
*/


//RESOLUCION DE EJERICIOS

//Ejercicio 1
let numRandom = Math.ceil(Math.random()*100)
let base = numRandom;
let raiz = Math.sqrt(base)
let potencia = 5
let potenciacion = Math.pow(base, potencia)

console.log("EJERCICIO 1")
console.log(`El numero aleatorio es: ${numRandom}. Y su raiz cuadrada ${raiz}`)
console.log(`El numero base es: ${numRandom}. Y elevado a la quinta es: ${potenciacion}`)
console.log("-------")


//Ejercicio 2
const lista = "120,250,78,96,-38,45.72,1450,2380"
let minimo = Math.min(120,250,78,96,-38,45.72,1450,2380)
let maximo = Math.max(120,250,78,96,-38,45.72,1450,2380)

console.log("EJERCICIO 2")
console.log(`El menor numero de la lista ${lista}, es: ${minimo}`)
console.log(`El mayor numero de la lista ${lista}, es: ${maximo}`)
console.log("-------")


//Ejercicio 3
console.log("EJERCICIO 3")
let num1 = 45.895025
let num2 = 56.788789
let num3 = 78.413582

num1 = (Math.round(num1*100)/100)
console.log(parseFloat(num1.toFixed(2)));

num2 = (Math.round(num2*100)/100)
console.log(parseFloat(num2.toFixed(2)));

num3 = (Math.round(num3*100)/100)
console.log(parseFloat(num3.toFixed(2)))