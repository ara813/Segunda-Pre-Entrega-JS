class Agregados {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const marco = new Agregados ("marco", 4000)
const vidrio = new Agregados ("vidrio", 3000)
const cancion = new Agregados ("cancion", 2000)
const texto = new Agregados("texto", 1000)
const envio = new Agregados ("envio", 3000)

const arrayAgregados = [ marco, vidrio, cancion, texto, envio]

class Colores {
    constructor (color){
        this.color = color;
    }
}

const blanco = new Colores ("blanco")
const negro = new Colores ("negro")
const marron = new Colores ("marron")

const arrayColoresMarco = [blanco, negro, marron]

let carrito = []

let seleccion = prompt ("Hola bienvendo a Rame :) el costo inicial de la lamina es de $1000 ingrese si para continuar con la compra si desea cancelar la operacion ingrese no")
while (seleccion != "si" && seleccion != "no"){
    alert ("por favor ingrese si o no")
    seleccion = prompt ("Hola bienvendo a Rame :) el costo inicial de la lamina es de $1000 ingrese si para continuar con la compra si desea cancelar la operacion ingrese no")
}
if(seleccion == "si"){
    alert ("A continuacion todo lo que le podes agregar a tu fotografia")
    let todosLosAgregados = arrayAgregados.map((Agregados)=> Agregados.nombre + " " + "$" + Agregados.precio)
    alert (todosLosAgregados.join (" - "))
    console.log (todosLosAgregados)
} else if (seleccion == "no") {
    alert ("Gracias por tu interes, volve pronto :)")
}

while (seleccion != "no") {
    let producto = prompt ("Introduce lo que quieras agregar: marco - vidrio - cancion - texto - envio")
    let precio = 0
    
    if (producto == "marco" || producto == "vidrio" || producto == "cancion" || producto == "texto" || producto == "envio"){
    switch (producto){
        case "marco":
        precio = 4000;
        alert ("Ha agregado un marco a su fotografia")
        break;
        case "vidrio":
        precio = 3000;
        alert ("Ha agregado un vidrio a su fotografia")
        break;
        case "cancion":
        precio = 2000;
        alert ("Ha incrustado una cancion en su fotografia")
        let song = prompt("Introduzca la cancion con el nombre que figura en Spotify seguida del nombre del artista")
        alert ("Ha seleccionado la cancion " + song)
        console.log("Ha seleccionado la cancion " + song)
        break;
        case "texto":
        precio = 1000
        alert ("Ha agregado un texto adicional")
        let text = prompt ("Introduzca el texto que desea agregar y la zona donde le gustaria que este en la fotografia")
        alert ("Ha seleccionado el texto " + text)
        console.log("Ha seleccionado el texto " + text)
        break;
        case "envio":
        precio = 3000
        alert ("Ha seleccionado el envio a domicilio")
        let direction = prompt ("Introduzca la direccion y codigo postal")
        alert ("Ha seleccionado la direccion " + direction)
        console.log ("Ha seleccionado la direccion " + direction)
        break;
        default:
        break;
    }
    carrito.push({producto, precio})
    console.log(carrito)
    } else ("Comunicate al 3436-413715 si tuviste inconvenientes, gracias por tu visita :)")

 seleccion = prompt ("Si desea seguir agregando productos a su pack introduzca si y no si ya no quiere agregar mas productos a su pack")

 while (seleccion === "no" || "NO" || "No"){
    alert ("Gracias por su compra :)")
    carrito.forEach ((carritoLleno)=>{
    console.log (`producto: ${carritoLleno.producto}, total a pagar por este agregado a la foto ${carritoLleno.precio}`)
    })
    break;
 }
}

const total = carrito.reduce ((acc, el)=> acc + el.precio, 1000)
alert (`El total a pagar es de: ${total}`)
let marcoColor = prompt ("Antes de que te vayas si has pedido un marco por favor ingresa el color que te gustria: blanco, negro o marron, sino ingresa no")
if (marcoColor == "marron") {
    const buscar= arrayColoresMarco.find (Colores => Colores.color === "marron")
    console.log (buscar)
    alert ("Usted ha elegido el color marron")}
if (marcoColor == "blanco") {
    const buscado =arrayColoresMarco.find (Colores => Colores.color === "blanco")
    console.log (buscado)
    alert ("Usted ha elegido el color blanco")}
if (marcoColor == "negro") {
    const busca = arrayColoresMarco.find (Colores => Colores.color === "negro")
    console.log(busca)
    alert ("Usted ha elegido el color negro")}
while (marcoColor === "no"){
    alert ("Gracias por su compra")
    break;
}
alert ("Gracias por tu compra que la disfutes :)")
console.log (`El total a pagar es de $ ${total}`)