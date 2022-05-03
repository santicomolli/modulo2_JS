// /* BOM
// -----

// - Crear un script que luego de 3 segundos muestre en el navegador la fecha del día.

function fechaPc(){

    setTimeout(function(){
        document.write(`${new Date().getDate()} : ${new Date().getMonth()} : ${new Date().getFullYear()}`)
    }, 3000)
}

// - Con 30 minutos de bicicleta puedes quemar 192 calorías. Crear un script que muestre en consola las calorías que vas quemando por segundo simulando que vas en bicicleta.

//30 min son 1800 segundos
//1800 segundos son 1800000 milisegundos
//x segundo se van quemando 0,106 calorias -/- 0,106 * 1800 segundos(30 min) = 192 calorias

function calorias(){

    let calorias = 0.106
    
    calcular = setInterval(function(){
        console.log(`Las calorias quemadas por segundo son: ${calorias}.`)
    }, 1000)
}


// - Crear el script que detendrá el script anterior cuando dejes de andar en bicicleta */

const detenerCuenta = function(){
    clearInterval(calorias)
}