//Usuario modelo

//class es una palabra reservada, el nombre de la clase primera letra en mayuscula en singular y se abre llave
class Usuario {

    //dentro la funcion constructora
    //luego se pone el constructor, dentro de los parentisis se ponen los valores que queremnos que el usuario ingrese a la clase
    constructor(nombre, username, password, estado=true){

        //dentro del constructor creo las propiedades que va a tener ese objeto con los valores
        //uso la palabra reservada This, haciendo referiencia a ese obejto a crear
        this.nombre = nombre,
        this.username = username,
        this.password = password,
        this.estado = estado
    }

    //Tambien una clase puede tener una funcion o varias segun lo que quiera
    //y luego para crear una funcion o metodo se lo hace poniendo el nombre y su estructura como otra funcion normal
    //no olvidarme tambien del This para saber a que obejto hago referencia
    presentacion(){
        console.log("-----Tarjeta de presentacion-----")
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Nombre: ${this.username}`)
    }


}

let user1 = new Usuario("Santi", "Santic", "12345")
let user2 = new Usuario("Josefina", "Jo", "54321")

Usuario.prototype.saludar=function(){
    console.log(`Hola soy ${this.nombre}`)
}

//Herencia
//la palabra reservada extends me muestra que la clase  Administrador hereda de Usuario
class Administrador extends Usuario{

    constructor(nombre, username, password, puesto, estado=true){
        //para decir que son las cosas que se heredan se usa la palabra super, y dentro de los parentesis, se ponen las propiedades de la clase "PADRE"
        super(nombre, username, password, estado)
        this.puesto = puesto
    }

    cambiarEstado(){

        this.estado = !this.estado
    }

    presentacionAdmin(){
        this.presentacion()
        console.log(`Puesto: ${this.puesto}`)
    }

}

let admin1 = new Administrador("Santi", "Santi123", "4321", true, "Gerente")