let palavraSecretaSorteada;
let palavraSecretaCategoria;
let listaDinamica = [];
let tentativas = 6;
var letrasUsadas = [];
var letrasErradas = [];

const perdeu = document.querySelector('.perdeu');
const venceu = document.querySelector('.venceu');
const categoria = document.getElementById('box-categoria');
const boxLetrasErradas = document.getElementById('box-letras-erradas');
const letras = document.querySelector('.letras');
const letrasEspaco = document.getElementById('.letrasEspaco');
const palavraTela = document.querySelector('.box-palavra-secreta');
const teclado = document.getElementById('teclado');
const boxAddPalavra = document.getElementById('sec-input-palavra');
const boxTextAddPalavra = document.getElementById('text-add-palavra');


//Botões:
let btnIniciaJogo = document.querySelector('.btn-jogar')
btnIniciaJogo.onclick = iniciaJogo;

let bntReiniciar = document.querySelector("#btn-novo-jogo")
bntReiniciar.onclick = novoJogo;

btnTeclado = document.querySelector('.btn-teclado')
btnTeclado.onclick = mostrarTeclado;


let btnDica = document.querySelector("#btn-dica");
btnDica.onclick = mostrarDica;

let btnDesistir = document.querySelector("#btn-desistir");
btnDesistir.onclick = recarregaPagina;


let btnTentarPerdeu = document.getElementById("btn-tentar-perdeu");
btnTentarPerdeu.onclick = recarregaPagina;

let btnTentarVenceu = document.getElementById("btn-tentar-venceu");
btnTentarVenceu.onclick = recarregaPagina;

let btnAddPalavras = document.querySelector(".btn-add-palavras")
btnAddPalavras.onclick = mostrarInputAddPalavra;

let btnCancelar = document.querySelector(".btn-cancelar");
btnCancelar.onclick = recarregaPagina;

//let btnSalvar = document.querySelector(".btn-salvar");
//btnSalvar.onclick = addSalva


function sorteiaPalavraSecreta() {
    const indexPalavra = Math.floor(Math.random() * palavras.length)
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

}

function mostrarPalavraNaTela() {

    categoria.innerHTML = palavraSecretaCategoria

    palavraTela.innerHTML = "";

    for (let i = 0; i < palavraSecretaSorteada.length; i++) {

        if (listaDinamica[i] == undefined) {
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else {
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
        }
        else {
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else {
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }

        }
    }

}

function carregaImagemForca() {
    switch (tentativas) {
        case 5:
            desenhaCabeca();
            break;
        case 4:
            desenhaCorpo();
            break;
        case 3:
            desenhaBracoEsquerdo()
            break;
        case 2:
            desenhaBracoDireito()
            break;
        case 1:
            desenhaPernaEsquerda();
            break;
        case 0:
            desenhaPernaDireita();
            break;
        default:
            desenhaForca();
            break;
    }
}

function verificaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra, false);
        comparaListas(letra);
        mostrarPalavraNaTela();
        mostrarLetraErrada(letra);
    }
}

function mudarStyleLetra(tecla, condicao) {
    if (condicao == false) {
        document.getElementById(tecla).style.background = "#cf252c";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else {
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }
}

function comparaListas(letra) {
    const posi = palavraSecretaSorteada.indexOf(letra)
    if (posi < 0) {
        tentativas--
        carregaImagemForca()

        if (tentativas == 0) {
            mostraMensagemPerdeu()
        }
    }
    else {
        mudarStyleLetra("tecla-" + letra, true)
        for (let i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }
    if (vitoria == true) {
        mostraMensagemVenceu()
        tentativas = 0;
    }

}

// pega a letra apertada no teclado físico
document.addEventListener("keypress", (evento) => {

    const letra = evento.key.toUpperCase();
    if (!letrasUsadas.includes(letra)) {
        letrasUsadas.push(letra);
        verificaLetraEscolhida(letra);
    }
});

function mostrarLetraErrada(letra) {
    document.getElementById("tecla-" + letra)
    if (!palavraSecretaSorteada.includes(letra) && !letrasErradas.includes(letra)) {

        letrasErradas.push(letra);
        boxLetrasErradas.innerHTML += letra
    }
}

function mostraMensagemPerdeu() {
    perdeu.style.display = 'block';
    document.querySelector(".paragrafo-fim").innerHTML += `<p>A palavra era  <br>"${palavraSecretaSorteada.toUpperCase()}"!</p>`;
}

function mostraMensagemVenceu() {
    document.querySelector('.venceu').style.display = 'block';

}

function iniciaJogo() {

    sorteiaPalavraSecreta()
    mostrarPalavraNaTela()
    desenhaForca()
    boxAddPalavra.style.display = 'none';
    document.querySelector('.btn-inicial').style.display = 'none';
    document.querySelector('.btn-jogo').style.display = 'flex';
    document.querySelector('.titulo-principal').style.display = 'none';
    teclado.style.display = 'block';
    boxLetrasErradas.style.display = 'block';
}

function recarregaPagina() {
    document.location.reload(true)
}

function mostrarInputAddPalavra() {

    boxAddPalavra.style.display = 'block'
}

function novoJogo() {
    tentativas = 6;
    letrasErradas = [];
    listaDinamica = [];
    palavraTela.style.display = "";
    categoria.style.display = "";
    boxLetrasErradas.style.display = "";
    limpaCanvas()
    sorteiaPalavraSecreta()
    mostrarPalavraNaTela()
    desenhaForca()

}

function mostrarTeclado() {
    var containerTeclado = document.getElementById("teclado");
    if (containerTeclado.style.display === "none") {
        containerTeclado.style.display = "block"
    }
    else {
        containerTeclado.style.display = "none"
    }
}

function mostrarDica() {
    var dica = document.querySelector(".box-categoria");

    if (dica.style.display == "none") {
        dica.style.display = "block"
    }
    else {
        dica.style.display = "none"
    }
}

function reiniciarTeclado() {

}

function addPalavra() {

}

function salvarPalavraAdd() {

}

