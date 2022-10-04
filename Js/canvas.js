let tela = document.querySelector('.canvas-forca');
let str = tela.getContext('2d');
str.fillStyle = '#134d3f';
str.lineWidth = 7;



function desenhaForca() {
    str.strokeStyle = '#cf252c';
    document.getElementById('canvas-forca').style.display = 'flex';
    str.beginPath();
    str.moveTo(30, 360);
    str.lineTo(280, 360);
    str.stroke();

    str.beginPath();
    str.moveTo(30, 360);
    str.lineTo(280, 360);
    str.stroke();
    str.closePath();

    str.beginPath();
    str.moveTo(80, 360);
    str.lineTo(80, 50);
    str.lineTo(255, 50);
    str.lineTo(255, 100);
    str.stroke();
    str.closePath();

    str.beginPath();
    str.moveTo(65, 120);
    str.lineTo(190, 40);
    str.stroke();
    str.closePath();
}

function desenhaCabeca() {
    str.strokeStyle = '#10071a';
    str.beginPath();
    str.moveTo(285, 130);
    str.arc(255, 130, 30, 0, 2 * Math.PI);
    str.stroke();
    str.closePath();
}

function desenhaCorpo() {
    str.strokeStyle = '#10071a';
    str.beginPath();
    str.moveTo(255, 160);
    str.lineTo(255, 255)
    str.stroke();
    str.closePath();
}

function desenhaBracoEsquerdo() {
    str.strokeStyle = '#10071a';
    str.beginPath();
    str.moveTo(255, 180);
    str.lineTo(220, 220)
    str.stroke();
    str.closePath();
}


function desenhaBracoDireito() {
    str.strokeStyle = '#10071a';
    str.beginPath();
    str.moveTo(255, 180);
    str.lineTo(290, 220)
    str.stroke();
    str.closePath();
}


function desenhaPernaEsquerda() {
    str.strokeStyle = '#10071a';
    str.beginPath();
    str.moveTo(255, 255);
    str.lineTo(220, 290)
    str.stroke();
    str.closePath();
}


function desenhaPernaDireita() {
    str.strokeStyle = '#10071a';
    str.beginPath();
    str.moveTo(255, 255);
    str.lineTo(290, 290)
    str.stroke();
    str.closePath();
}


function limpaCanvas() {
    str.clearRect(0, 0, 340, 380);
}

/*
function escreverLetraCorreta() {

    str.font = "bpld 52px Verdana";
    str.lineCap = "round";
    str.fillStyle = "black";
    str.lineWidth = "6";
    let largura = 600 / palavraSecretaSorteada.length;
    str.fillText(palavraSecretaSorteada[i],)

}

function escreverLetraErrada(letra) {
    str.font = "bpld 52px Verdana";
    str.lineCap = "round";
    str.fillStyle = "black";
    str.lineWidth = "6";
    str.fillText(letra, 520, + (40 * (10 - erros)), 450, 40)

}*/