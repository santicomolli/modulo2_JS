//FUNCIONES

//son procedimientos encapsulsados


//FUNCIONES DECLARATIVAS
//Estructura basica

let nombre="Santi"
let apellido ="Comolli"

function saludarPersona(parametro1, parametro2) {
    console.log(`Hola ${parametro1}${parametro2}`)
}

saludarPersona(nombre, apellido)


let num1 = 20
let num2 = 40

function suma(valor1, valor2) {

    if (isNaN(valor1) || isNaN(valor2)) 
    {
        console.warn("Alguno de los datos ingresados no es correcto")
    }
    else{
        console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`)
    }
}

suma(num1, num2)



//funciones anonimas o de expresion
const calculadora = function(valor1, valor2, operacion="+")
{
    if (isNaN(valor1) || isNaN(valor2)) 
    {
        console.warn("Alguno de los datos ingresados no es correcto")
    }
    else
    {
        switch (operacion) 
        {
            case "+":
                console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`)
                break;
            case "-":
                console.log(`${valor1} - ${valor2} = ${valor1 - valor2}`)
                break;
            case "*":
                console.log(`${valor1} * ${valor2} = ${valor1 * valor2}`)
                break;
            case "/":
                console.log(`${valor1} / ${valor2} = ${valor1 / valor2}`)
                break;
            default:
                console.warn("La operacion ingresada no es valida.")
                break;
        }
    }
}



//Calculadora con return
//el return lo que hace es corta un proceso y da un resultado
const calcu = function(valor1, valor2, operacion="+")
{
    if (isNaN(valor1) || isNaN(valor2)) 
    {
        return "Alguno de los datos ingresados no es correcto"
    }

    switch (operacion) {
        case "+":
                console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`)
                break;
            case "-":
                console.log(`${valor1} - ${valor2} = ${valor1 - valor2}`)
                break;
            case "*":
                console.log(`${valor1} x ${valor2} = ${valor1 * valor2}`)
                break;
            case "/":
                console.log(`${valor1} / ${valor2} = ${valor1 / valor2}`)
                break;
            default:
                console.warn("La operacion ingresada no es valida.")
                break;
    }
}



//podemos llamar una funcion dentro de otra
function cubo(num) 
{
    return Math.pow(num,3)
}

let numeros = [23,55,46,10]

function convertirACubo(arreglo, funcion)
{

    let numerosAlCubo = []

    for (let i = 0; i < arreglo.length; i++) 
    {
        let numerosAlCubo = funcion(arreglo[i])
        numerosAlCubo.push(numerosAlCubo)       
    }

    return numerosAlCubo
}

consol.log(convertirACubo(numeros, cubo))


//SCOPE DE UNA FUNCION
/* El scope puede definirse como el alcance que una variable tendrá en tu código. En otras palabras, el scope decide a qué variables tienes acceso en cada parte del código. Existen dos tipos de scope, el scope global y el scope local. */
let heroe = "Spiderman"

function presentarHeroe() {
    let heroe = "Batman"
    return `Bienvenido ${heroe}`
}

console.log(presentarHeroe())