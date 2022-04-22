/* Ejercicio con arreglo de objetos:


- Generar un arreglo de películas (3), donde cada película deberá contener las propiedades (título, género, año, sinopsis). 

- Crear una función que recorra toda las películas imprimiendo la información de las películas por pantalla (incluir un título que diga **CARTELERA**). */

let peliculas = [
    {
        titulo: "IronMan",
        genero: "Accion",
        año: "2008",
        sinopsis: "Anthony Stark, un multimillonario industrial y genio inventor, que es secuestrado y obligado a construir un arma devastadora. En su lugar, utilizando su inteligencia e ingenio, Anthony construye una armadura de alta tecnología y escapa de su cautiverio."
    },
    {
        titulo: "Transformers",
        genero: "Ciencia Ficcion",
        año: "2007",
        sinopsis: "Dos razas de robots extraterrestres están en guerra. Mientras que los autobots creen en la tolerancia, los decepticons desean exterminar la vida biológica. Cuando la batalla llega hasta la Tierra, el humano Sam Witwicky empezará su particular lucha."
    },
    {
        titulo: "Annabelle",
        genero: "Terror",
        año: "2014",
        sinopsis: "Ed y Lorraine Warren tratan de encerrar bajo llave a Annabelle, una muñeca poseída. Como demonólogos la colocaran en una vitrina bendecida como medida de seguridad, sin embargo, una noche terrorífica Annabelle despertará a otros espíritus malignos que se encuentran en la habitación y que tendrán una nueva fijación"
    }
]

function presentarPelis()
{
    peliculas.forEach(function(peli)
    {
        document.write(`---------CARTELERA---------<br/>`)
        document.write(`<b>Nombre</b>: ${peli.titulo} <br/>`)
        document.write(`<b>Genero</b>: ${peli.genero} <br/>`)
        document.write(`<b>Año</b>: ${peli.año} <br/>`)
        document.write(`<b>Sinopsis</b>: ${peli.sinopsis} <br/><br/>`)
    })
}