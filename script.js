var jogador, vencedor = null;
var quadrados = document.getElementsByClassName("quadrado");
var intervalo = null;

mudarJogador("X");

function mudarQuadrado(id) {
    let elemento = document.getElementById(id);
    console.log(jogador)
    if(elemento.textContent !== "-" || vencedor !== null)  {
        return;
    }
    if(jogador === null) {
        mudarJogador("X");
    }
    if(jogador === "X") {
        elemento.textContent = "X";
        elemento.style.color = "black";
        mudarJogador("O");
        checarVencedor();
    } else if(jogador === "O") {
        elemento.textContent = "O";
        elemento.style.color = "black";
        mudarJogador("X");
        checarVencedor();
    }
}

function mudarJogador(jogador) {
    this.jogador = jogador;
    var jogadorText = document.getElementById("jogador");
    jogadorText.textContent = "Jogador: " + jogador;
}

function vencer(jogador)
 {
    this.vencedor = jogador;
    var vencedorText = document.getElementById("vencedor");
    vencedorText.textContent = "Vencedor: " + jogador;

 }

 function toggleColor(...quadrados) {
    for(var quadrado of quadrados) {
        if(quadrado.style.backgroundColor === "green") {
            quadrado.style.backgroundColor = "#acacac";
        } else {
            quadrado.style.backgroundColor = "green"
        }
    }
 }

 function mudarCorQuadrado(q1,q2,q3) {
    intervalo = setInterval(() => {
        toggleColor(q1,q2,q3);
    },500);
 }

function checarVencedor() {
    var quadrado1 = document.getElementById("1");
    var quadrado2 = document.getElementById("2");
    var quadrado3 = document.getElementById("3");
    var quadrado4 = document.getElementById("4");
    var quadrado5 = document.getElementById("5");
    var quadrado6 = document.getElementById("6");
    var quadrado7 = document.getElementById("7");
    var quadrado8 = document.getElementById("8");
    var quadrado9 = document.getElementById("9");


    if(checarSequencia(quadrado1,quadrado2,quadrado3)) {
        vencer(quadrado1.textContent);
        mudarCorQuadrado(quadrado1,quadrado2,quadrado3);
    }
    if(checarSequencia(quadrado4,quadrado5,quadrado6)) {
        vencer(quadrado4.textContent);
        mudarCorQuadrado(quadrado4,quadrado5,quadrado6);
    }
    if(checarSequencia(quadrado7,quadrado8,quadrado9)) {
        vencer(quadrado7.textContent);
        mudarCorQuadrado(quadrado7,quadrado8,quadrado9);
    }
    if(checarSequencia(quadrado1,quadrado4,quadrado7)) {
        vencer(quadrado1.textContent);
        mudarCorQuadrado(quadrado1,quadrado4,quadrado7);
    }
    if(checarSequencia(quadrado2,quadrado5,quadrado8)) {
        vencer(quadrado2.textContent);
        mudarCorQuadrado(quadrado2,quadrado5,quadrado8);
    }
    if(checarSequencia(quadrado3,quadrado6,quadrado9)) {
        vencer(quadrado3.textContent);
        mudarCorQuadrado(quadrado3,quadrado6,quadrado9);
    }
    if(checarSequencia(quadrado1,quadrado5,quadrado9)) {
        vencer(quadrado1.textContent);
        mudarCorQuadrado(quadrado1,quadrado5,quadrado9);
    }
    if(checarSequencia(quadrado3,quadrado5,quadrado7)) {
        vencer(quadrado3.textContent);
        mudarCorQuadrado(quadrado3,quadrado5,quadrado7);
    }
}

function checarSequencia(q1,q2,q3) {
    var bool = false;
    if(q1.textContent != "-" && q1.textContent == q2.textContent && q2.textContent == q3.textContent) {
        bool = true;
    }
    return bool;
}

function resetTable() {
    var vencedorText = document.getElementById("vencedor");

    mudarJogador("X");
    vencedor = null;
    if(intervalo !== null) {
        clearInterval(intervalo);
    }

    for(var quadrado of this.quadrados) {
        quadrado.style.backgroundColor = "#acacac";
        quadrado.textContent = "-";
        quadrado.style.color = "#acacac";
    }

    vencedorText.textContent = "Vencedor: ";

}