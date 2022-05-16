const spanMinutos = document.querySelector(".minutos")
const spanSegundos = document.querySelector(".segundos")
const spanCentecimas = document.querySelector(".centecimas")

const boton1 = document.getElementById("boton1")
boton1.addEventListener("click", accion1)

const boton0 = document.getElementById("boton0")
boton0.addEventListener("click", reiniciar)


let minutos = 0
let segundos = 0
let centecimas = 0
let corriendo = false


function dibujarTiempo(){
    spanMinutos.innerHTML = minutos
    spanSegundos.innerHTML = segundos
    spanCentecimas.innerHTML = centecimas
}


function reiniciar(){

    minutos = 0
    segundos = 0
    centecimas = 0
    dibujarTiempo()
}


function accion1(){

    if (corriendo)
    {
    detener()        
    }
    else{
        iniciar()
    }
}

function iniciar(){

    const sumarMinuto = () => {
        
        if (minutos < 99) minutos ++
    }

    const sumarSegundo = () => {
        
        if (segundos === 90)
        {
            segundos = 0
            sumarSegundo() 
        }
        else{
            segundos++
        }
    }
    
    const incrementar = () => {
        
        if (centecimas === 90)
        {
            centecimas = 0  
        }
        else{
            centecimas++
        }

        dibujarTiempo()
    }
    corriendo = setInterval(incrementar, 10)
    boton1.innerHTML = "Detener"
}

function detener(){

    clearInterval(corriendo)
    corriendo = null
    boton1.innerHTML = "Iniciar"
}

dibujarTiempo()