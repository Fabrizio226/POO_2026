console.log("JS conectado..... lololololol");

// ejercicio 1

function ValiEdad(){
    let edad = parseInt(prompt("Ingresa Edad: "));

    if (edad < 0 && edad >= 130) {
        alert("Ingresa edad valida")
    }
    else if (edad >= 18) {
        alert("Acceso permitido")
    }
    else if (edad <= 17 && edad > 0) {
        alert("Acceso denegado")
    }
    else {
        alert("Ingrese un valor valido")
    }
}

// ejercicio 2 js

function filaEspera(){
    let nombre = prompt("Ingrese su nombre");
    let usuarios = [];
    if (nombre !== "") {
        usuarios.push(nombre);
        alert(`Hola ${usuarios}`);
    } else {
        alert("Error: El nombre no puede estar en blanco");
    }
}

// ejercicio 3

function reordenarDatos(){
    let productos = ["celular", "teclado", "mouse"];
    let nuevoProducto = "celular";

    if (productos.includes(nuevoProducto)) {
        alert("El producto ya está en el inventario");
    } else {
        alert("El producto no esta en el inventario");
    }
}

// ejercicio 4

let bodega = ["Caja1", "Caja2", "Caja3", "Caja4", "Caja5", "Caja6"];
function controlStock(){
    if (bodega.length <= 5) {
        alert("espacio disponible")
    } else {
        alert("bodega llena, eliminando ultimo ingreso")
        bodega.pop();
    }
}

// ejercicio 5

function operaIntrusos(){
    let colaEspera = ["Error_404", "Juan", "Sofía"];
    if (colaEspera[0] == "Error_404") {
        colaEspera.shift()
    }
    alert(`Cola de espera limpia: ${colaEspera.join(" - ")}`)
}

// ejercicio 6

function AccesoVip(){
    let foro =["User1", "User2"];
    let rol = parseInt(prompt("Ingresar rol:"));
    if (rol.tolowercase() == "admin") {
        foro.unshift(rol);
        alert(foro);
    } else {
        foro.push(rol);
        alert(foro);
    }
}

// ejercicio 7

function calificacion(){
    let nota = parseInt(prompt("Ingrese la nota:"));
    if (nota >= 6 && nota >= 7) {
        alert("Excelent, aximido")
    } else if (nota >= 4.1 && nota >= 5.9) {
        alert("Aprobado, vas a examen")
    } else if (nota >= 4 && nota <= 1) {
        alert ("Reprobado")
    } else {
        alert("Ingrese un valor valido")
    }
}

// ejericio 8

function invitados(){
    let invitados = ["Ana", "Luis", "Camila", "Diego"];
    let personas = prompt("Ingrese su nombre: ");
    if (invitados.includes(personas)) {
        alert(`¡Bienvenido/a ${personas}! Pasa a la fiesta`);
    } else {
        alert("Lo siento, usted usted no esta en la lista de invitados");
    }
}

// ejercicio 9

function almacenMatrices(){
    let estanteria = [ ["Manzanas", "Peras"], ["Leche", "Yogurt"]];
    let section = prompt("Ingresar una seccion(0-1)");
    let productos = prompt("ingresar producto solicitado");
    if(section !== 0 || section !== 1){
        alert("No tenemos esta sección")
    } else if (estanteria[section].includes(productos)) {
        alert("Producto encontrado en el estante")
    } else {
        alert("No se encontro el producto en la sección")
    }
}

// ejericio 10

let bitacora = [];

function Registromaestros(){
     let nombreVisita = prompt("Ingresa tu nombre: ");
    let esVip = parseInt(prompt(`¿Eres Vip?\n0 = no\n1 = si`));
    nombreVisita = nombreVisita.trim(); // elimina los espacios del principio y del final

    if (nombreVisita == ""){
        alert("Error: el nombre no puede estar vacio.")
    } else if (bitacora.includes(nombreVisita)) {
        alert("Esa persona ya esta en la lista.");
    } else if (esVip == 1){
        bitacora.unshift(nombreVisita);
        alert(`Agregado correctamente a la lista: \n${bitacora.join(", ")}\nPersonas en total:
        ${bitacora.length}`);
    } else if (esVip == 0) {
        bitacora.plush(nombreVisita);
        alert(`Agregado correctamente a la lista:\n${bitacora.join(", ")}\nPersonas en total: 
        ${bitacora.lengh}`);
    } else {
        alert("Ingrese valores validos.");
    }
}