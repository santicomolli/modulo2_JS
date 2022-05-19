
class NombresCompletos{
    constructor(id,nombre, apellido){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
    }
}


let nombres = JSON.parse(localStorage.getItem("names")) || []
let tableBody = document.getElementById("table_body")


function guardarNombre(e){
    e.preventDefault()

    let id = new Date().getTime()
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value

    nombres.push(new NombresCompletos(id, nombre, apellido))
    localStorage.setItem("names", JSON.stringify(nombres))

    document.getElementById("formulario").reset(); //limpia los campos del formulario
    document.getElementById("nombre").focus(); //pone el cursos en el input del nombre

    mostrarLista()
}


function mostrarLista(){
    tableBody.innerHTML =""

    nombres.map(function (lista, index) {
        let tr = document.createElement("tr");
        let celda = `<th scope="row" id="filaTabla">${index + 1}</th>
                        <td>${lista.nombre}</td>
                        <td>${lista.apellido}</td>
                        <td><button class="btn btn-danger btn-sm" onclick="borrarTarea(${index})">x</button></td>`;
            
        tr.innerHTML = celda;
        tableBody.appendChild(tr);
    });
}


//Solo me falta corregir la parte de borrar esteticamente la fila de la lista


function borrarTarea(index){

    nombres.splice(index, 1);
    localStorage.setItem("names", JSON.stringify(nombres));
    guardarNombre();
}


document.getElementById("formulario").addEventListener("submit", guardarNombre)

mostrarLista()