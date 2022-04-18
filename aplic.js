//OBEJETOS

let alumno={
    nombre:"Santiago Comolli",
    edad:25,
    dni:39973680,
    curso:"Fullstack",
    saludar:function(){
        console.log(`Hola, soy ${this.nombre}`)
    }

}

//OBETENER VALORES
console.log(alumno.nombre)
console.log(alumno["curso"])

//AGREGA UNA NUEVA PROOPIEDAD AL OBJETO
alumno.domicilio = "Galvez Cota"

//MIDUFUICA EL VALOR DE UNA PROPIEDAD DEL OBJETO
alumno.nombre = "Leo Messi"

//ELIMINAR UNA PROPIEDAD DEL OBJETO
delete alumno.edad

//COMO RECORRER UN OBJETO
for (const atributo in alumno) {

    console.log(`${atributo}: ${alumno[atributo]}`)
}

/*
1- Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
  */

let persona = {
    nombre: "Florencia Espeche",
    edad: 34,
    genero: "Femenino",
    obtDetalles: function () {
    for (const propiedad in this) {
        if (propiedad !== "obtDetalles") {
        console.log(`${propiedad}:${this[propiedad]}`);
        }
    }
    },
};

/*
2- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

*/

let auto = {
    color: "rojo",
    marca: "Fiat",
    modelo: "Palio",
    anio: 2018,
    encendido: false,
    encenderApagar: function () {
    this.encendido = !this.encendido;
    if (this.encendido) {
        console.log("El vehículo está encendido");
    } else {
        console.log("El vehículo está apagado");
    }
    },
}
