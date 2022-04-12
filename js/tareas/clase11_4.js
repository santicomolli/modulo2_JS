//Tarea 3:
// Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
// Ana, Oswaldo, Raúl, Celia, María, Antonio
// (vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)

// - Imprime la clasificación actual
// El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:

// - Celia adelanta a Raúl
// - Antonio es descalificado y se elimina del concurso
// - Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
// - Hay una nueva participante que pasa a encabezar la clasificación: Marta
// - Imprime la clasificación actualizada y comprueba que se ha hecho correctamente

let clasificaciones = ["Ana", "Osvaldo", "Raul", "Celia", "Maria", "Antonio"]

console.log(clasificaciones)

clasificaciones[2] = "Celia"
clasificaciones[3] = "Raul"

console.log(clasificaciones)

clasificaciones.pop()
console.log(clasificaciones)


clasificaciones.splice(1, 0, "Roberto", "Amaya")
console.log(clasificaciones)

clasificaciones.unshift("Marta")
console.log(clasificaciones)



/* Tarea 4: 
- Pedir por pantalla el nombre de 5 alumnos de la comisión. Usar ciclo while
- Guardarlos en un arreglo llamado rollingCoders
- Usando el arreglo mostrar en consola por cada uno un mensaje de bienvenida al mundo del desarrollo web.

*/

let rollingCoders = []

while (rollingCoders.length < 5)
{
    rollingCoders.push(prompt("Ingrese los nombres de los alumnos")) 
}

for (let i = 0; i < rollingCoders.length; i++) 
{
    console.log(`Hola ${rollingCoders[i]}, bienvenido al mundo del desarrollo web`)
}