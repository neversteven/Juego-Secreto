// document es un punte entre el html y el java, permite trabajar con el querySelector lo atribuye a la variable titutlo
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

// linea de codgio que conecta el HTML con JAVA para codifcar texto
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
// la triple === es para que realice comparacion de iguales en valor y en tipo
    
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto) {
//${(intentos === 1) ? 'vez': 'veces' esta linea de codigo es un if/else que se utiliza para optimizar el codigo
        asignarTextoElemento(`p`,`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    // el ususario no acerto
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","el numero secreto es menor");
        } else {
            asignarTextoElemento("p","el numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
    
}
// linea de codigo que permite generar el numero secreto
function genrarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "ya se sortearon todos los numeros posibles");
    } else {
         // si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return genrarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales() {
    // asignaciones de texto dentro del HTML
    asignarTextoElemento("h1", "juego del numero secreto");
    asignarTextoElemento("p", `indica un numero de 1 a ${numeroMaximo}`);
    numeroSecreto = genrarNumeroSecreto();
    intentos = 1;

}


function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    // indicar mensaje de intervalo de numero
    // generar el numero aleatorio
    // inicializar el nuemro de intentos
    condicionesIniciales();
    // deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");

}

condicionesIniciales();


