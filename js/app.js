//CONDICIONALES

/*if else
let numero = prompt("Ingrese un numero")
console.log(numero)
numero = parseInt(numero)


if (isNaN(numero)) 
{
    console.warn("Debe ingresar un numero")
}
else
{
    if (numero % 2 === 0)//condicion
    {
        //codigo a ejecutarse si se cumple la condicion
        console.log("El numero es par")
    }
    else
    { 
        //de no cumplirse se ejecuta lo q esta en el else.
        console.error("El numero no es par")
    }
}
*/

//EJERCICIO REPUESTO

/*
let monto = parseFloat(prompt("Ingrese el monto del repuesto"))

if (!isNaN(monto))
{
    if (monto > 500) 
    {
        console.log("Montos menores a 500 no tiene descuento")    
    }else if(monto >= 500 && monto <=1000)
    {
        let montoDescuento = monto * 0.5
        let montoFinal = monto - montoDescuento
        console.log(`El monto final con el descuento es de: ${montoFinal}`)
    }else if(monto >= 500 && monto <=1000)
    {
        let montoDescuento = monto * 0.5
        let montoFinal = monto - montoDescuento
        console.log(`El monto final con el descuento es de: ${montoFinal}`)
    }else if(monto >= 500 && monto <=1000)
    {
        let montoDescuento = monto * 0.5
        let montoFinal = monto - montoDescuento
        console.log(`El monto final con el descuento es de: ${montoFinal}`)
    }    
}
*/

/*EJERCICIO FIESTA
solo pueden entrar un mayor de edad osea edad >=18
si no es mayor debe ingresar con un tutor
 */

/*
let edad = parseInt(prompt("Ingrese su edad"))
let tutor = true

if (edad >= 18 || tutor) 
{
    console.log("Bienvenido a la fiesta paa 🎉")
}
else{
    console.log("No puede ingresar a esta fiesta 🤔 ")
}
*/

//CONDICIONAL SWITCH
/*
Se nos pide hacer un ejercicio para una verduleria
que segun la fruta ingresada nos devuelve el precio del kilo
*/
/*
let fruta = prompt("ingrese una fruta")

switch (fruta)
{
    case "manzana":
        console.log("El precio del kilo de manzana es de: $200")
        break;
    case "naranja":
        console.log("El precio del kilo de naranja es de: $150")
        break;
    case "banana":
        console.log("El precio del kilo de banana es de: $280")
        break;
    case "pomelo":
    case "mango":
        console.log("El precio del kilo de pomelo o mang es de: $280")
        break;

    default:
        console.log(`Lo siento, no tenemos ${fruta} en este momento.`)
        break;
}*/

/*
Hacer una aplicacion que nos devuelva un mensaje
diciendo que dia de la semana es
*/

let dia = new Date().getDay()

switch (dia) {
    case 0:
        alert("El dia de hoy es Domingo")
        break;
    case 1:
        alert("El dia de hoy es Lunes")
        break;
    case 2:
        alert("El dia de hoy es Martes")
        break;
    case 3:
        alert("El dia de hoy es Miercoles")
        break;
    case 4:
        alert("El dia de hoy es Jueves")
        break;
    case 5:
        alert("El dia de hoy es Viernes")
        break;
    case 6:
        alert("El dia de hoy es Sabado")
        break;
}

let num1 = parseFloat(prompt("Ingresa el primero numero"))
let num2 = parseFloat(prompt("Ingresa el segundo numero"))



if(isNaN(num1) || isNaN(num2))
{
    console.error("Uno de los datos ingresados no es un numero. Hasta luego")
}
else
{
    let operacion =  prompt("Aclare que operacion desea realizar(suma, resta, multiplicacion, division)")
    
    switch (operacion) {
        case "suma":
        case "+":
            console.log(`${num1} + ${num2} = ${num1 + num2}`)
            break;
        case "resta":
        case "-":
            console.log(`${num1} - ${num2} = ${num1 - num2}`)
            break;
        case "multiplicacion":
        case "x":
            console.log(`${num1} x ${num2} = ${num1 * num2}`)
            break;
        case "division":
        case "/":
            console.log(`${num1} / ${num2} = ${num1 / num2}`)
            break;
    
        default:
            console.warn("La operacion ingresada no es valida")
            break;
    }
}

