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
/* El scope puede definirse como el alcance que una variable tendr?? en tu c??digo. En otras palabras, el scope decide a qu?? variables tienes acceso en cada parte del c??digo. Existen dos tipos de scope, el scope global y el scope local. */
let heroe = "Spiderman"

function presentarHeroe() {
    let heroe = "Batman"
    return `Bienvenido ${heroe}`
}

console.log(presentarHeroe())

//Diferencias entre declarativas y an??nimas
console.log(calcularDescuento(2500, 15));
console.log(calcularDescuento2(3000, 15));

function calcularDescuento(precio, descuento) {
  //cual es el precio con descuento
    let descuentoCalculado = 100 - descuento;
    let montoConDescuento = (precio * descuentoCalculado) / 100;

    return `El importe a abonar es de $${montoConDescuento}`;
}

const calcularDescuento2 = function (precio, descuento) {
  //cual es el precio con descuento
    let descuentoCalculado = 100 - descuento;
    let montoConDescuento = (precio * descuentoCalculado) / 100;

    return `El importe a abonar es de $${montoConDescuento}`;
};

/*
1- Definir una funci??n que muestre informaci??n sobre una cadena de texto que se le pasa como argumento. 
- A partir de la cadena que se le pasa, la funci??n determina si esa cadena est?? formada s??lo por may??sculas, s??lo por min??sculas o por una mezcla de ambas.

*/
// let cadena='pepe el hombre de al lado'

const examinarCadena = function (cadena) {
    if (cadena === cadena.toUpperCase()) {
    return "El texto est?? en may??sculas";
}

    if (cadena === cadena.toLowerCase()) {
    return "El texto est?? en min??sculas";
}

    return "El texto tiene may??sculas y min??sculas";
};

console.log(examinarCadena("hola funcion como est??s"));

/*

2- Solicitar por pantalla al usuario ingresar el valor de los lados de un rect??ngulo, luego crear una funci??n para calcular su per??metro y mostrarlo por pantalla.

La f??rmula del per??metro  es p = 2*(a +b)

*/

let ladoA = Number(prompt("Ingrese la altura del rect??ngulo"));
let ladoB = Number(prompt("Ingrese el ancho del rect??ngulo"));

const perimetroRectangulo = function (alto = 25, ancho = 10) {
  return 2 * (alto + ancho);
};

document.write(`El per??metro del rect??ngulo es de ${perimetroRectangulo()}`);
