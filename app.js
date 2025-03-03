// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let participantes = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre && !participantes.includes(nombre)) {
        participantes.push(nombre);
        actualizarLista();
    }
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    participantes.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Se necesitan al menos dos participantes.");
        return;
    }
    let asignaciones = {};
    let mezclados;
    let valido = false;
    while (!valido) {
        mezclados = mezclarArray([...participantes]);
        valido = true;
        for (let i = 0; i < participantes.length; i++) {
            if (participantes[i] === mezclados[i]) {
                valido = false;
                break;
            }
        }
    }
    for (let i = 0; i < participantes.length; i++) {
        asignaciones[participantes[i]] = mezclados[i];
    }
    mostrarResultado(asignaciones);
}

function mostrarResultado(asignaciones) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    for (let [amigo, asignado] of Object.entries(asignaciones)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${asignado}`;
        resultadoLista.appendChild(li);
    }
}
