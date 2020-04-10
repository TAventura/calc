let primero = 0;
let bandera = "";
apagar();


function apagar() {
    let todo = document.getElementsByClassName("boton");
    let visor = document.getElementById("visor");
    for (let i=0; i<todo.length; i++) {
        todo[i].disabled=true;
    }
    document.getElementById("on").disabled=false;
    visor.value = "";
    primero=0;
    bandera="";
}

function prender() {
    let todo = document.getElementsByClassName("boton");
    for (let i=0; i<todo.length; i++) {
        todo[i].disabled=false;
    }
}

function uno() {
    let visor = document.getElementById("visor");
    visor.value+="1";
}
function dos() {
    let visor = document.getElementById("visor");
    visor.value+="2";
}
function tres() {
    let visor = document.getElementById("visor");
    visor.value+="3";
}
function cuatro() {
    let visor = document.getElementById("visor");
    visor.value+="4";
}
function cinco() {
    let visor = document.getElementById("visor");
    visor.value+="5";
}
function seis() {
    let visor = document.getElementById("visor");
    visor.value+="6";
}
function siete() {
    let visor = document.getElementById("visor");
    visor.value+="7";
}
function ocho() {
    let visor = document.getElementById("visor");
    visor.value+="8";
}
function nueve() {
    let visor = document.getElementById("visor");
    visor.value+="9";
}
function cero() {
    let visor = document.getElementById("visor");
    if (visor.value.length > 0) {
        visor.value+="0";
    }
}
function punto() {
    let visor = document.getElementById("visor");
    /*if (visor.value.charAt(visor.value.length-1) != ".") {
        visor.value+=".";
    }*/
    let punto=false;
    for (let i=0; i<visor.value.length;i++) {
        if (visor.value[i] == ".") {
            punto = true
        }
    }
    if (punto == false) {
        visor.value+=".";
    }
}
function borrarVisor() {
    let visor = document.getElementById("visor");
    visor.value="";
}

function sumar() {
    /*let visor = document.getElementById("visor");
    if (sessionStorage.getItem("numeros") === null) {
        let lista = [];
        lista.push(visor.value);
        sessionStorage.setItem("numeros", lista);
    } else {
        let lista = new Array();
        lista = sessionStorage.getItem("numeros");
        lista.push(visor.value);
        sessionStorage.setItem("numeros", lista);
    }

    lista.push(visor.value);*/
    primero = document.getElementById("visor").value
    bandera = "sumar";
    visor.value="";
}

function restar() {
    primero = document.getElementById("visor").value
    bandera = "restar";
    visor.value="";
}

function multiplicar() {
    primero = document.getElementById("visor").value
    bandera = "multiplicar";
    visor.value="";
}

function dividir() {
    primero = document.getElementById("visor").value
    bandera = "dividir";
    visor.value="";
}

function igual() {
    let numero = 0;
    switch (bandera) {
        case "sumar":
            numero = document.getElementById("visor").value;
            document.getElementById("visor").value = +primero + +numero;
            bandera = "";
            break;
        case "restar":
            numero = document.getElementById("visor").value;
            document.getElementById("visor").value = +primero - +numero;
            bandera = "";
            break;
        case "multiplicar":
                numero = document.getElementById("visor").value;
                document.getElementById("visor").value = +primero * +numero;
                bandera = "";
                break;
        case "dividir":
            numero = document.getElementById("visor").value;
            document.getElementById("visor").value = +primero / +numero;
            bandera = "";
            break;
        default:
            break;
    }
}