//Ejercicio: obtener las vocales de una frase

/* let frase = prompt("Ingrese la frase deseada...")
let vocales = ""

for (let i = 0; i < frase.length; i++) 
{
    let letra = frase.charAt(i).toLowerCase()
    
    if (letra === "a" ||
        letra === "e" ||
        // letra === "i" ||
        // letra === "o" ||
        letra === "u" )
    {
        vocales += letra
    }

}

console.log(vocales)
console.log(`La cantidad de vocales en al ${frase}, es de ${vocales.length} y son ${vocales}`) */


let alumnos = ["Santi", "Maria", "Pablo", "Marcos","Joni"]

//mostrar un elemento del arreglo
alumnos[2]//dentro del corchete va el indice de posiucion de lo que quiero ver


//mostrar el ulitmo elemento del array
alumnos[alumnos.length - 1]


//concatenar elementos en consola
console.log(`Los alumnos mas nasis son: ${alumnos.join(",")}`)


//iterar los elementos de un arreglo
//for comun
for (let i = 0; i < alumnos.length; i++) 
{
    console.log(`Hola soy ${alumnos[i]}`)
}

//for of
for (const alumno of alumnos) 
{
    console.log(`Hola soy ${alumno}`)
}


//agregrar un elemento al arreglo
alumnos.unshift("Nadia") //agrega al principio
alumnos.push("Daniel", "Roberto")//agrega al final


//Saber si un elemento existe en un arreglo
console.log(alumnos.includes("Santi"))


//Encontrar posicion/indice de un elemento
console.log(alumnos.indexOf("Daniel")) //adentro de los () va lo que quiero buscar



//eleminiar elemntos del arreglo
alumnos.shift()//el primer elemento
alumnos.pop()//el ultimo elemento

//eliminar varios elementos de una
alumnos.slice(0,3)

//eliminar un elemento por su posicion
let pos = alumnos.indexOf("Roberto") //encuentro la posicion donde se encuentra
alumnos.splice(pos, 1) //pos, 1 son para,emtros. pos es la posicion guardada en una variable y 1 es la cantidad de elementos que se borran desp de esa posicion


//agregar alumnos
alumnos.push("Nara", "Wanda", "Duki")

//agrega elementos desde una posicion en particular
alumnos.splice(3, 0, "Angel")

//Reemplazar elementos en una posicion
alumnos.splice(5,1, "Nayru")


let alumnas = ["Gabriela", "Nayru", "Dami", "Agostina", "Rocio"]


//metodo para concatenar arreglos
let comision = alumnos.concat(alumnas)

//ordenar arrelgto de la A-Z
console.log(comision.sort())

//Lo q hace el reverse es dar vuelta las posiciones todo el array
console.log(comision.reverse())


//extrar un porcion de arreglo hacia otro arreglo
let ausentes = comision.slice(3,8)


