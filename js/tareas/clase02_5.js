/*- Escribe una clase **Producto** para crear objetos. 
    - Estos objetos, deben presentar las **propiedades** código, nombre y precio, además del **método** imprimeDatos, el cual escribe por pantalla los valores de sus propiedades.
    - Posteriormente, cree **tres instancias** de este objeto y guárdalas en un array.
    - Por último, utilice el método imprimeDatos para mostrar por pantalla los valores de los tres objetos instanciados.*/

    class Producto{
        
        constructor(codigo, nombre, precio){
            this.codigo = codigo
            this.nombre = nombre
            this.precio = precio
        }

        imprimeDatos(){

            document.write(`<b>----Datos del producto-----</b>`)
            document.write(`<br><b>Codigo:</b> ${this.codigo}`)
            document.write(`<br><b>Nombre:</b> ${this.nombre}`)
            document.write(`<br><b>Precio:</b> $${this.precio}<br><br>`)
        }
    }

    let productos = []
    

    function agregarProducto(){
        for (let i = 0; i < 3; i++) 
        {           
            let codigo = new Date().getTime()
            let nombre = prompt("Ingrese el nombre del producto")
            let precio = prompt("Ingrese el precio")  
            
            //con el push estoy agregando un obejto nuevo dentro del array
            //y los paramtetros dentro del () en new Producto, uso los valores que me da el usuario en las varriables dentro del for
            productos.push(new Producto(codigo, nombre, precio))
        }
    }

    function mostrarDatos(){

        //Esta tambien es una manera para mostrarlos, por cada vuelta que da el for dentro del array con el .lenght ejecuta el codigo dentro
        // con cada posicion que tiene entra en la funcion imprimeDatos
        for (let i = 0; i < productos.length; i++) {
            productos[i].imprimeDatos()
        }

        //PUEDE SER CON CUALQ DE LAS DOS MANERAS, PERO MAS SIMPLE EL FOR COMUN

        //lo que necesita el foreach es un callback, una funcion como parametro
        //aca el foreach lo que hace es a cada objeto/producto dentro del array "Producto" entra a la funcion de imprime datos que ya esta en cada uno
        
        /* productos.forEach(function(producto){
            productos.imprimeDatos()
        }) */
    }


    /*
3- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

class Libro{

    constructor(isbn, titulo, autor, paginas){

        this.isbn = isbn
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }

    mostrarLibro(){

        console.log(`El libro <b>${this.titulo}</b> con ISBN <b>${this.isbn}</b> creado por el autor <b>${this.autor}</b> tiene páginas <b>${this.paginas}</b><br>.`)
    }

    compararPaginas(libro){
        if (this.paginas > libro.paginas) 
        {
            let cantidadDiferencia = this.paginas - libro.paginas
            
            return(`El libro ${this.titulo}, tiene ${this.paginas} mas que el libro ${libro.titulo}`)    
        }

        if (this.paginas < libro.paginas) 
        {
            let cantidadDiferencia = this.paginas - libro.paginas
            
            return(`El libro ${libro.titulo}, tiene ${this.paginas} paginas mas que el libro ${this.titulo}`)    
        }

        return `Ambos libros tienen la misma cantidad de paginas`
    }
}

let libro1 = new Libro("987-131-7", "Como hacer amigos", "Dale Carnegie", 303)
let libro2 = new Libro("987-987-1949-58-8", "PHP desde cero", "Users", 192)