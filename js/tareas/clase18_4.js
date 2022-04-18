//Solicita un nombre, la edad y muestra por consola el mensaje "Hola____, tienes____años y el año q viene tendras:____"
//realiza el ejercico con prompt

let nombre = prompt("Ingrese su nombre")
let edad = prompt("Ingrese su edad")

console.log(`Hola____, tienes____años y el año q viene tendras:____`)

//Ejercicio 2
/* Escribe un programa que pueda calcular el area de 2 figuras geometricas, triangulo y rectangulo. en primer lugar, pregunta de que figura se quiere calcular el area, despues, solicitar los datos que se necesiten para calcularlo. Utiliza el switch para pedir los datos.
triangulo = b * h/2
rectangulo = b * h
*/

let figura = prompt("Introduce la figura geometrica de la que quieres calcular su area: triangulo, rectangulo")

let figuraMay = figura.toUpperCase()

switch (figuraMay) {
    case "TRIANGULO":
        let baseTriangulo = Number(prompt("Ingrese la base del triangulo"))
        let alturaTriangulo = Number(prompt("Ingrese la altura del triangulo"))
        let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
        console.log(`El area del triangulo es igual a ${areaTriangulo}`)
        break;
    case "RECTANGULO":
        let baseRectangulo = Number(prompt("Ingrese la base del rectangulo"))
        let alturaRectangulo = Number(prompt("Ingrese la altura del rectangulo"))
        let areaRectangulo = (baseRectangulo * alturaRectangulo)
        console.log(`El area del rectangulo es igual a ${areaRectangulo}`)
        break;

    default:
        console.log("Los datos ingresados no corresponden a una figura valida")
        break;
}


/*Solicita */

let num = parseInt(prompt("Introduce un numero"))

for (let i = 1; i <=num; i++) {
    if (i % 2 == 0) {
        console.log(`${i} - es par`)
    }else{
        console.log(`${i} - es impar`)
    }
    
}

/*Escribe un programa que permita ir introduciendo una serie indetermindada de numeros mientras su suma no supere 50. Cuando esto ocurra se debe mostrar le tota acumulado y el conmtador de cuantos numeros se han introducido*/

let suma = 0
let cont = 0

while (suma <= 50)
{
    suma += parseInt(prompt("Introduce un numero a añadir a la suma"))
    cont++    
}
console.log(`La suma total es: ${suma}`)
console.log(`El total de numeros introducidos es: ${cont}`)


/**/
