var botoes4x4 = ['botao1', 'botao2', 'botao3', 'botao4', 'botao5', 'botao6', 'botao7', 'botao8', 'botao9', 'botao10', 'botao11', 'botao12', 'botao13', 'botao14', 'botao15', 'botao16'];
var botoes5x5 = ['botao1', 'botao2', 'botao3', 'botao4', 'botao5', 'botao6', 'botao7', 'botao8', 'botao9', 'botao10', 'botao11', 'botao12', 'botao13', 'botao14', 'botao15', 'botao16', '17', 'botao18', 'boato19', 'botao20', 'botao21', '22', 'botao23', 'botao24', 'botao25'];
var botoes2x2 = ['botao1', 'botao2', 'botao3', 'botao4']

var opcao1 = 0;
var opcao2 = 0;
var segundos = 15;
var pontuacao = 0;

var numBotoes;
var intervaloContador;

var img1 = '';
var img2 = '';

function comecar() {

    intervaloFinalizar = setTimeout(finalizar, segundos * 1000);
    intervaloContador = setInterval(contador, 1000);

    document.getElementById('contador').innerHTML += '<div id="divContador"></div>';
    document.getElementById('botaoComecar').disabled = true;

    atualizar();

}

function atualizar() {

    pontuacao += 300;

    if (numBotoes == 0) {
        for (var i = 0; i < botoes4x4.length; i++) {
            document.getElementById(botoes4x4[i]).remove();
        }
    } else if (numBotoes == 1) {
        for (var i = 0; i < botoes2x2.length; i++) {
            document.getElementById(botoes2x2[i]).remove();
        }
    } else if (numBotoes == 2) {
        for (var i = 0; i < botoes5x5.length; i++) {
            document.getElementById(botoes5x5[i]).remove();
        }
    }

    var imgAleatoria = Math.round(Math.random())

    if (imgAleatoria == 0) {
        img1 = '<img draggable="false" src="./img/bobOoO.png" width="80%">';
        img2 = '<img draggable="false" src="./img/patrickOoO.png" width="70%">';
    } else {
        img1 = '<img draggable="false" src="./img/bobCaverna.png" width="100%">';
        img2 = '<img draggable="false" src="./img/patrickCaverna.png" width="100%">';
    }

    numBotoes = Math.round(Math.random() * 2);
    if (numBotoes == 0) {

        for (var i = 0; i < botoes4x4.length; i++) {

            var botaoAtual = botoes4x4[i];
            var num = Math.round(Math.random());

            document.getElementById('minigame').innerHTML += `<div onclick="clicou(${i + 1})" id="${botaoAtual}" class="botao4x4"></div>`;
            if (num == 0) {
                document.getElementById(botaoAtual).innerHTML = img1

            } else if (num == 1) {
                document.getElementById(botaoAtual).innerHTML = img2

            }
        }

    } else if (numBotoes == 1) {

        for (var i = 0; i < botoes2x2.length; i++) {

            var botaoAtual = botoes2x2[i];
            var num = Math.round(Math.random());

            document.getElementById('minigame').innerHTML += `<div onclick="clicou(${i + 1})" id="${botaoAtual}" class="botao2x2"></div>`;
            if (num == 0) {
                document.getElementById(botaoAtual).innerHTML = img1

            } else if (num == 1) {
                document.getElementById(botaoAtual).innerHTML = img2

            }
        }

    } else if (numBotoes == 2) {

        for (var i = 0; i < botoes5x5.length; i++) {

            var botaoAtual = botoes5x5[i];
            var num = Math.round(Math.random());

            document.getElementById('minigame').innerHTML += `<div onclick="clicou(${i + 1})" id="${botaoAtual}" class="botao5x5"></div>`;
            if (num == 0) {
                document.getElementById(botaoAtual).innerHTML = img1

            } else if (num == 1) {
                document.getElementById(botaoAtual).innerHTML = img2

            }
        }

    }

    if (numBotoes == 0) {

        for (var i = 0; i < botoes4x4.length; i++) {

            if (document.getElementById(botoes4x4[i]).innerHTML == img1) {
                opcao1++;
            } else if (document.getElementById(botoes4x4[i]).innerHTML == img2) {
                opcao2++;
            }

        }

        if ((opcao1 == 16) || (opcao2 == 16)) {

            atualizar();
        }

    } else if (numBotoes == 1) {

        for (var i = 0; i < botoes2x2.length; i++) {

            if (document.getElementById(botoes2x2[i]).innerHTML == img1) {
                opcao1++;
            } else if (document.getElementById(botoes2x2[i]).innerHTML == img2) {
                opcao2++;
            }

        }

        if ((opcao1 == 4) || (opcao2 == 4)) {

            atualizar();
        }
    } else if (numBotoes == 2) {

        for (var i = 0; i < botoes5x5.length; i++) {

            if (document.getElementById(botoes5x5[i]).innerHTML == img1) {
                opcao1++;
            } else if (document.getElementById(botoes5x5[i]).innerHTML == img2) {
                opcao2++;
            }

        }

        if ((opcao1 == 25) || (opcao2 == 25)) {

            atualizar();
        }
    }




    atualizarContador();
}

function clicou(botao) {

    opcao1 = 0;
    opcao2 = 0;

    if (numBotoes == 0) {

        if (document.getElementById(botoes4x4[botao - 1]).innerHTML == img1) {
            document.getElementById(botoes4x4[botao - 1]).innerHTML = img2

        } else if (document.getElementById(botoes4x4[botao - 1]).innerHTML == img2) {
            document.getElementById(botoes4x4[botao - 1]).innerHTML = img1

        }

        for (var i = 0; i < botoes4x4.length; i++) {

            if (document.getElementById(botoes4x4[i]).innerHTML == img1) {
                opcao1++;
            } else if (document.getElementById(botoes4x4[i]).innerHTML == img2) {
                opcao2++;
            }

        }

        if ((opcao1 == 16) || (opcao2 == 16)) {

            clearTimeout(intervaloFinalizar);
            if (segundos < 15) {
                intervaloFinalizar = setTimeout(finalizar, segundos * 1000 + 1000);
                segundos += 1;
            }

            atualizar();
        }

    } else if (numBotoes == 1) {

        if (document.getElementById(botoes2x2[botao - 1]).innerHTML == img1) {
            document.getElementById(botoes2x2[botao - 1]).innerHTML = img2

        } else if (document.getElementById(botoes2x2[botao - 1]).innerHTML == img2) {
            document.getElementById(botoes2x2[botao - 1]).innerHTML = img1

        }

        for (var i = 0; i < botoes2x2.length; i++) {

            if (document.getElementById(botoes2x2[i]).innerHTML == img1) {
                opcao1++;
            } else if (document.getElementById(botoes2x2[i]).innerHTML == img2) {
                opcao2++;
            }

        }

        if ((opcao1 == 4) || (opcao2 == 4)) {

            clearTimeout(intervaloFinalizar)
            if (segundos < 15) {
                intervaloFinalizar = setTimeout(finalizar, segundos * 1000 + 500);
                segundos += 0.5;
            }

            atualizar();
        }

    } else if (numBotoes == 2) {

        if (document.getElementById(botoes5x5[botao - 1]).innerHTML == img1) {
            document.getElementById(botoes5x5[botao - 1]).innerHTML = img2

        } else if (document.getElementById(botoes5x5[botao - 1]).innerHTML == img2) {
            document.getElementById(botoes5x5[botao - 1]).innerHTML = img1

        }

        for (var i = 0; i < botoes5x5.length; i++) {

            if (document.getElementById(botoes5x5[i]).innerHTML == img1) {
                opcao1++;
            } else if (document.getElementById(botoes5x5[i]).innerHTML == img2) {
                opcao2++;
            }

        }

        if ((opcao1 == 25) || (opcao2 == 25)) {

            clearTimeout(intervaloFinalizar)
            if (segundos < 15) {
                intervaloFinalizar = setTimeout(finalizar, segundos * 1000 + 2000);
                segundos += 2;
            }

            atualizar();
        }

    }

}

function finalizar() {

    if (numBotoes == 0) {
        for (var i = 0; i < botoes4x4.length; i++) {
            document.getElementById(botoes4x4[i]).remove();
        }
    } else if (numBotoes == 1) {
        for (var i = 0; i < botoes2x2.length; i++) {
            document.getElementById(botoes2x2[i]).remove();
        }
    } else if (numBotoes == 2) {
        for (var i = 0; i < botoes5x5.length; i++) {
            document.getElementById(botoes5x5[i]).remove();
        }
    }

    document.getElementById('divContador').remove();
    document.getElementById('botaoJogarNovamente').disabled = false;

    clearInterval(intervaloContador)

    mostrarPontuacao();

}

function mostrarPontuacao() {

    document.getElementById('minigame').innerHTML = `<p id="textoPontuacao">Pontuação: ${pontuacao}</p>`


}


function contador() {

    segundos--;

    atualizarContador();

    pontuacao += 25;

}

function atualizarContador() {

    segundosContador = [];
    document.getElementById('divContador').innerHTML = '';


    for (var i = 0; i < Math.trunc(segundos); i++) {

        segundosContador.push(`<div id="segundosContador${i}" class="segundosContador"></div>`)
        document.getElementById('divContador').innerHTML += segundosContador[i];

    }

}

function reiniciar() {
    window.location.reload();
}