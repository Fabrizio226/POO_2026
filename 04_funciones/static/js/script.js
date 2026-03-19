// ejercicio 1

let asistencia = [];
function agregarLista(nombre){
    asistencia.push(nombre);
    return asistencia.join(", ");
}

function registrarAlumno() {
    const container = document.getElementById("container1");
    const result = document.getElementById("result1");
    const input = document.getElementById("input1");
    let nombre = input.value;
    let resultado = agregarLista(nombre);
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}

// ejercicio 2

let pacientes = ["Carlos", "María", "Diego"];
function agregarUrgencia(nombre) {
    pacientes.unshift(nombre);
    return pacientes.join(", ");
};
function ingresarUrgencia() {
    const container = document.getElementById("container2");
    const result = document.getElementById("result2");
    const input = document.getElementById("input2");
    if (input.value !== "") {
        let nombre = input.value;
        let resultado = agregarUrgencia(nombre);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
    } else {
        alert("El nombre no puede estar vacio,");
    };
};

// ejercicio 3

let entregas = ["Pizza", "Sushi", "Hamburguesa", "Ensalada"];

function actualizarPedidos(pedido) {
    if (pedido == "despachar") {
        entregas.shift()
    } else if (pedido == "cancelar") {
        entregas.pop()
    } else {
        alert("Ingrese un valor valido")
    }
    return `Pedidos pendientes: ${entregas.join(", ")}`
}

function gestionPedidos() {
    const container = document.getElementById("container3");
    const result = document.getElementById("result3");
    let input = document.getElementById("input3").value;
    let resultado = actualizarPedidos(input);
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}

// ejercicio 4

let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"];

function buscarCodigo(codigo){
    let mensaje = "valido";
    for (let i = 0; i < codigosValidos.length; i++){
        if (codigo === codigosValidos[i]) {
            mensaje = "¡Éxito! código aceptado";
            return "¡Éxito! código aceptado";
        } else {
            mensaje = "Ingresa un código valido";
        }
    }
    return mensaje
}
function verificarCodigo() {
    let input = document.getElementById("input4");
    let codigo  = input.value;
    const result = document.getElementById("result4");
    const container = document.getElementById("container4");
    let resultado = buscarCodigo(codigo);
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}

// ejercicio 5

function calcularCuotas(valor, cuota){
    let registroPagos = "";
    for(let i = 1; i <= 3; i++) {
        registroPagos += `Cuota ${cuota}: ${valor/3}`;
    }
    return registroPagos;
};

function simularCuotas() {
    const producto = document.getElementById("input5_1");
    let valorProducto = parseInt(producto.value);
    const cuotaInput = document.getElementById("input5_2");
    let cuota = parseInt(cuotaInput.value);
    const result = document.getElementById("result5");
    const container = document.getElementById("container5");
    let resultado = calcularCuotas(valorProducto,cuota)
    result.textContent = resultado;
    producto.value 
}

// ejercicio 6

// ejercicio 7

// ejercicio 8

