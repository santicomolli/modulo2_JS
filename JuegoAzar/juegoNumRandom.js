/* Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar.
    La interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
    Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero. */


    let numRandom = 0

    function random(){
    
        numRandom = Math.round(Math.random() * 20)
    }
    

    let numJugador = 0
    
    function guardarNum(e){
    
        numJugador = e.target.value
    }
    
    document.getElementById("numJugador").addEventListener("change", guardarNum)
    
    
    function control(){
        
        if (numJugador == numRandom) 
        {
            alert("El numero ingresado es IGUAL al numero magico!!! GANASTE")
            document.getElementById("numJugador").value=""
            document.getElementById("numJugador").focus()
        }
        else if(numJugador > numRandom)
        {
            alert("El numero ingresado es MAYOR al numero magico")
            document.getElementById("numJugador").select()
        }
        else{
            alert("El numero ingresado es MENOR al numero magico")
            document.getElementById("numJugador").select()
        }

    }
    
    document.getElementById("btn-Enviar").addEventListener("click", control)
    
    