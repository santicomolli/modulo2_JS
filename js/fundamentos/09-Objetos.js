
//OBEJETOS

let alumno={
    nombre:"Santiago Comolli",
    edad:25,
    dni:39973680,
    curso:"Fullstack",
    saludar:function(){
        console.log(`Hola, soy ${this.nombre}`)
    }

}

//OBETENER VALORES
console.log(alumno.nombre)
console.log(alumno["curso"])

//AGREGA UNA NUEVA PROOPIEDAD AL OBJETO
alumno.domicilio = "Galvez Cota"

//MIDUFUICA EL VALOR DE UNA PROPIEDAD DEL OBJETO
alumno.nombre = "Leo Messi"

//ELIMINAR UNA PROPIEDAD DEL OBJETO
delete alumno.edad

//COMO RECORRER UN OBJETO
for (const atributo in alumno) {

    console.log(`${atributo}: ${alumno[atributo]}`)
}





/*
1- Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
  */

let persona = {
    nombre: "Florencia Espeche",
    edad: 34,
    genero: "Femenino",
    obtDetalles: function () {
    for (const propiedad in this) {
        if (propiedad !== "obtDetalles") {
        console.log(`${propiedad}:${this[propiedad]}`);
        }
    }
    },
};

/*
2- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

*/

let auto = {
    color: "rojo",
    marca: "Fiat",
    modelo: "Palio",
    anio: 2018,
    encendido: false,
    encenderApagar: function () {
    this.encendido = !this.encendido;
    if (this.encendido) {
        console.log("El vehículo está encendido");
    } else {
        console.log("El vehículo está apagado");
    }
    },
}


//Arreglos de objetos

let alumnos = [
    {   
        nombre:"Santiago", 
        curso:"Fullstack"
    },
    {   
        nombre:"Leon", 
        curso:"FrontEnd"
    },
    {   
        nombre:"Elias", 
        curso:"BackEnd"
    },
]


//Recorrer un arreglo de objetos
for (let i = 0; i < alumnos.length; i++) {
    console.log(`Nombre: ${alumnos[i].nombre} - ${alumnos[i].curso}`)
}


//---------------------------------------------------------------------------------

let data = [
    {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
    {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
    },
    {
        id: 11,
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
        id: 12,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
];


//Crear funciones que realicen las siguientes tareas:

//1- Mostrar una lista con los nombres completos en orden alfabético

const listarUsuarios = function(){
    
    let usuariosOrdenados = data.map(function (alumno) {

        return `${alumno.last_name} - ${alumno.first_name}`
    })

    usuariosOrdenados.sort().forEach(function(alumno, index){

        console.log(`${index + 1} - ${alumno}`)
    });
}


//2- Crear tarjetas de presentación con los datos de los usuarios

function tarjetaPresentacion (){

    data.forEach(function(user){

        document.write(`---------Tarjeta de presentacion---------<br/>`)
        document.write(`Nombre: ${user.first_name} ${user.last_name} <br/>`)
        document.write(`Correo: ${user.email}<br/><br/>`)
    })
}

data.forEach(function (persona) {
    document.write(
        `<strong>------Tarjeta de presentación------</strong><br />`
    );
    document.write(
        `<b>Nombre:</b> ${persona.last_name} ${persona.first_name}<br />`
    );
    document.write(`<b>Correo:</b> ${persona.email}<br /><br />`);
});


//3- Agregar un usuario más al final de la lista
function agregarUsuario(){
    
    let idNuevo = data[data.length - 1 ].id + 1 //aca solo voy a buscar el id

    let nombre = prompt("Ingrese el nombre de usuario")
    let apellido = prompt("Ingrese el apellido de usuario")
    let correo = prompt("Ingrese el correo de usuario")
    let foto = prompt("Ingrese link de la imagen de su avatar")

    //validar los datos a guardar SI O SI

    data.push(
        {   
            id: idNuevo,
            email: correo,
            first_name: nombre,
            last_name: apellido,
            avatar: foto
        }
    )
}


//4 Actualizar el nombre de un usuario
//4-1 la funcion necesita saber cual es el usuario (id)
//4-2 usar el id para identificar al usuario
//4-3 pedir el nuevo valor o nombre
//4-4 guardar esa info en data

const actualizarNombre=function(id){

    let index = data.findIndex(function(user){

        return user.id === id
    })

    if (index < 0){
        return "El id ingresado no existe "    
    }

    let nuevoNombre = prompt("Ingrese un nuevo nombre para " + data[index].first_name)

    data[index].first_name = nuevoNombre

}



//5- Eliminar un usuario en particular

//6- Realizar búsqueda de usuarios cuyo apellido coincida con el termino a buscar

