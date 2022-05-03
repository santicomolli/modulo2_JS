//BOM
//Browser Object Model


//Navigator
const obtenerUbicacion = function(){

    navigator.geolocation.getCurrentPosition(function(posicion)
    {
        console.log(posicion.coords.latitude, posicion.coords.longitude)
    })
}

// //Location
    location.reload() //recarga la pagina

    location.href = "https://google.com"


//History
    history.go(1) //me lleva a la pagina siguiente en el historial
    history.go(-1) //me lleva a la pagina anterior en el historial




//-----FUNCIONES DE TIEMPO-----

//setTimeout
//nos permite ejecutar acciones DESPUES de transcurrido un cierto tiempo

const redireccionar=function(){
    
    setTimeout(function(){
        location.href="https://google.com"
    }, 3000)
}

//setInterval
//nos permite ejecutar acciones CADA cierto intervalo de tiempo

function segundero(){
    
    repetir = setInterval(function(){
        console.log(new Date().getSeconds())
    }, 1000)
}

//funcion para poder detener el Intervalo sino va a seguir corriendo todo el tiempo hasta que se cierre el navegador
//clearInterval
//Detener los intervalos que yo defina

const detenerIntervalo = function () {
    clearInterval(repetir);
};