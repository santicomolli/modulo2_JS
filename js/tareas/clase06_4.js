/* Tarea 1: 
Leer una cadena de texto y generar un array con la función split(). Posteriormente, mostrar la siguiente información: 
- Número de palabras 
- primera palabra
- última palabra 
- las palabras colocadas en orden inverso
- las palabras ordenadas de la a la z  
- las palabras ordenadas de la z a la a. 
- Sacar toda esta información en consola
*/

let usuario = prompt("Ingrese su nombre").toUpperCase()
let frase = prompt("Ingrese una frase").toLowerCase().split(" ")

console.log("TAREA 1")
console.log(`La cantidad de palabras en la frase ingresada por ${usuario}, es de ${frase.length}`)
console.log("---")
console.log(`La primera palabra es: ${frase[0]}`)
console.log("---")
console.log(`La ultima palabra es: ${frase[frase.length - 1]}`)
console.log("---")
console.log(`En esta ocasion vamos a dar vuelta el orden de las palabras ${frase.reverse()}`)
console.log("---")
console.log(`Ahora vamos a ponerle un orden de la A-Z ${frase.sort()}`)
console.log("---")
console.log(`Ahora lo invertimos de la Z-A ${frase.reverse()}`)

console.log("--------------------------------")

/* Tarea 2:
Tenemos una lista de números, el usuario ingresará un número y le diremos si
ese número se encuentra en la lista o no
*/
console.log("TAREA 2")

let numero = prompt("Ingrese un numero para controlar en lista...")
let lista =  [1,2,50,74,84,64,21,78,1318,4894,818,15,68,4,81,22,0,6,7,98,123,48,]

//nose porque me da mal cuando si esta el numero, me pasa al else directamente
if(lista.includes(numero)) 
{
    console.log("Si esta el numero")    
}else{
    console.log(`No se encuentra el numero, pero lo agregamos`)
    lista.push(numero)
}
