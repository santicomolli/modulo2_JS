let nombre = "Santiago"
let apellido = "Comolli"
let frase = "Aguante boca carajo"
//Para saber cuantos catacteres tiene un string

console.log(nombre.length) //El length se usa para saber la cantidad de caract
console.log(apellido.length) //y o saber el largo de lo que quiero


console.log("El nombre tiene", nombre.length, "caracteres")

console.log(frase)
console.log(frase.trim()) //El trim sirve para sacar los espacios en blanco, trim(), asi es como va

console.log(frase.toUpperCase()) //pone todo en mayuscula
console.log(frase.toLowerCase()) //pone todo en minuscula
console.log(frase.charAt(3)) //para saber la posicion de un caracter

console.log(apellido.split("")) //separa las letras de una palabra y las guarda en un array a acad auna en una posicion
console.log(frase.split(" ")) //separa las palabras y las guarda en un arrray a acad auna en una posicion


//para hacer lo opuesto, unir las cosas de un array
//al trasnformarse en un arreglo tengo que unir los datos del array
//entonces creo un avariable y la lleno con el array creado

let array1 = (frase.split(" "))
console.log(array1.join(" ")) //el join me une los datos de ese array y lo vuelve string

//Para obtener la ultima letra de una palabra o frase
console.log(frase.charAt(frase.length -1 ))

// Forma de concatenar: template string .....LA QUE MAS VOY A UTILIZAR 
console.log(`Bienvenido ${nombre.toUpperCase()}, gracias por su visita`)