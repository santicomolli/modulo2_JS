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

const listarUsuarios = function(array = data){
    
    let usuariosOrdenados = array.map(function (alumno) {

        return `${alumno.last_name} - ${alumno.first_name}`
    })

    usuariosOrdenados.sort().forEach(function(alumno, index){

        console.log(`${index + 1} - ${alumno}`)
    });
}


//2- Crear tarjetas de presentación con los datos de los usuarios

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
    let validar = Number(nombre)

    if (isNaN(validar))
    {
        console.log("No es un numero")
    } else {
        console.log("Es un numero")
    }

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
const borrarUsuario = function(id)
{
    let indice = validarId(id)

    if (index < 0){
        return "El id ingresado no existe "    
    }

    let validar = confirm("Esta seguro que desea eliminar al usuario")
    //el confirm me devulve un true o false, ideal para un if
    if (validar)
    {
        data.splice(indice, 1)
        alert(`El usuario con el ID ${id} fue eliminado`)      
    }
}

function validarId()
{
    let index = data.findIndex(function(user){

        return user.id === id
    })

    return index
}


//6 Realizar busqueda de usuario cuyo apellido coincida con el termino a buscar

const filtarUsuario=function(termino = "")
{
    let resultado = data.filter(function(user){

        return user.last_name.toLowerCase().includes(termino.toLowerCase())
    })

    if (resultado.length === 0) 
    {
        console.log("No se encontraron coincidencias")    
    }

    listarUsuarios(resultado)
}