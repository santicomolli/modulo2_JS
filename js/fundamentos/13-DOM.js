//DOM
//Document Object Model



//DOCUMENT.GETELEMENT

//obtener elemento por su ETIQUETA
let titulo1 = document.getElementsByTagName("h1")

//obtener elemento por su ID 
//ESTA SERIA LA "MEJOR" MANERA YA QUE ES LA MAS PRECISA RESPECTO AL ELEMENTO
let titulo2 = document.getElementById("titulo")

//obtener elemento por su CLASE
let titulo3 = document.getElementsByClassName("titulo_main")



//QUERY SELECTOR

//llamar al elemento segun el ETIQUETA
let parrafo1 = document.querySelector("h3")

//llamar al elemento segun el ID
let parrafo2 = document.querySelector("#parrafito")

//llamar al elemento por la CLASE
let parrafo3 = document.querySelector(".clase")



//PARA CAMBIAR EL VALOR DE UN ELEMENTO
//lo que hace el innerText, apunta al texto interno del elemento
titulo2.innerText = "Aguante boca"
parrafo2.innerText = "Clase practica de DOM"



//AGREGAR UN ELEMENTO AL DOM
//creo el elemento 
let nuevoParrafo = document.createElement("p") 

//le asigno un valor al elemneto nuevo, le doy contenido
nuevoParrafo.innerText = "Esto es un parrafo creado desde Javascript"

//agrego un nuevo "hijo" al body de mi pagina para poder mostrarlo
document.body.appendChild(nuevoParrafo)



//AGREGAR UNA IMAGEN AL DOM
let imagen1 = document.createElement("img")

imagen1.src = "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2022/03/avatar-facebook-2632445.jpg?itok=lsD0KFxA"
imagen1.alt = "Primera imagen"
imagen1.classList = "img-dom"

document.body.appendChild(imagen1)



//REEMPLAZAR UN ELEMENTO
let span = document.createElement("span")

span.innerText = "Esto es una estiqueta span"

document.body.replaceChild(span, parrafo2)


//ELIMINAR UN ELEMENTO
document.body.removeChild(imagen1)


//CLONAR UN ELEMENTO
document.body.appendChild(imagen1.cloneNode(true))

//TAREA!!!
//como hago para insertar un elemento antes que otro




//.--------------------------------------//

//EVENTOS----------------------

function mostrarMensaje(){
    alert("Esto es un mensaje importante")
}

function cambiarColor(){
    
    document.querySelector("#campo").classList= "cambiarfondo"
    
}

function volverColor(){
    
    document.querySelector("#campo").classList= ""  
}



let nombre = ""

function guardarDatos(e){
    nombre = e.target.value
}

function saludar (){
    alert(`Bienvenido ${nombre}`)
}


let darkmode = false

function modoOscuro(){

    if(!darkmode){
        document.body.classList = "dark-mode"
        darkmode = true
    }
    else
    {
        document.body.classList = ""
        darkmode = false
    }
}

document.getElementById("toggle").addEventListener("click", modoOscuro)

document.getElementById("campo").addEventListener("change", guardarDatos)