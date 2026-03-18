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

// ejercicio 4

// ejercicio 5

// ejercicio 6

// ejercicio 7

// ejercicio 8

