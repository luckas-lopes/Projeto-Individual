var botoes4x4 = ['botao1-4x4', 'botao2-4x4', 'botao3-4x4', 'botao4-4x4', 'botao5-4x4', 'botao6-4x4', 'botao7-4x4', 'botao8-4x4', 'botao9-4x4', 'botao10-4x4', 'botao11-4x4', 'botao12-4x4', 'botao13-4x4', 'botao14-4x4', 'botao15-4x4', 'botao16-4x4'];
var botoes5x5 = ['botao1-5x5', 'botao2-5x5', 'botao3-5x5', 'botao4-5x5', 'botao5-5x5', 'botao6-5x5', 'botao7-5x5', 'botao8-5x5', 'botao9-5x5', 'botao10-5x5', 'botao11-5x5', 'botao12-5x5', 'botao13-5x5', 'botao14-5x5', 'botao15-5x5', 'botao16-5x5', '17-5x5', 'botao18-5x5', 'boato19-5x5', 'botao20-5x5', 'botao21-5x5', '22-5x5', 'botao23-5x5', 'botao24-5x5', 'botao25-5x5'];
var botoes2x2 = ['botao1-2x2', 'botao2-2x2', 'botao3-2x2', 'botao4-2x2']

var opcao1 = 0;
var opcao2 = 0;
var segundos = 15;
var pontuacao = 0;
var tempo = 0;

var numBotoes;
var intervaloContador;

var img1 = '';
var img2 = '';

function comecar() {

    intervaloFinalizar = setTimeout(finalizar, segundos * 1000);
    intervaloContador = setInterval(contador, 1000);

    document.getElementById('botaoComecar').style.display = 'none';
    document.getElementById('minigame').innerHTML = '';
    document.getElementById('contador').innerHTML += '<div id="divContador"></div>';

    atualizar();

}

function atualizar() {

    pontuacao += 300;

    // Remove todas as imagens anteriores
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

    // Escolhe de forma aleatória entre as duplas de imagens
    var imgAleatoria = Math.round(Math.random() * 2);
    if (imgAleatoria == 0) {
        img1 = '<img draggable="false" src="./img/bobOoO.png" width="90%">';
        img2 = '<img draggable="false" src="./img/patrickOoO.png" width="90%">';
    } else if (imgAleatoria == 1) {
        img1 = '<img draggable="false" src="./img/bobCaverna.png" width="100%">';
        img2 = '<img draggable="false" src="./img/patrickCaverna.png" width="100%">';
    } else if (imgAleatoria == 2) {
        img1 = '<img draggable="false" src="./img/bobPintura.jpeg" width="100%" height="100%">';
        img2 = '<img draggable="false" src="./img/patrickPintura.jpeg" width="100%" height="100%">';
    }

    // Cria os botões em sequência e quantidade aleatórias
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

            if (botaoAtual == 0) {
                document.getElementById(botaoAtual).style.borderTopLeftRadius = '30px';
            } else if (botaoAtual == 1) {
                document.getElementById(botaoAtual).style.borderTopRightRadius = '30px';
            } else if (botaoAtual == 2) {
                document.getElementById(botaoAtual).style.borderBottomLeftRadius = '30px';
            } else if (botaoAtual == 3) {
                document.getElementById(botaoAtual).style.borderBottomRightRadius = '30px';
            }

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

    // Recria as imagens caso já venham certas
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

        // Troca a imagem do botão para sua contraparte
        if (document.getElementById(botoes4x4[botao - 1]).innerHTML == img1) {
            document.getElementById(botoes4x4[botao - 1]).innerHTML = img2

        } else if (document.getElementById(botoes4x4[botao - 1]).innerHTML == img2) {
            document.getElementById(botoes4x4[botao - 1]).innerHTML = img1

        }

        // Confirma se todas imagens estão iguais
        for (var i = 0; i < botoes4x4.length; i++) {
            if (document.getElementById(botoes4x4[i]).innerHTML == img1) {
                opcao1++;
            } else if (document.getElementById(botoes4x4[i]).innerHTML == img2) {
                opcao2++;
            }

        }

        // Caso estejam iguais, aumenta a contagem com base na dificuldade que acabou de passar na tela
        if ((opcao1 == 16) || (opcao2 == 16)) {

            clearTimeout(intervaloFinalizar);
            if (segundos < 15) {
                intervaloFinalizar = setTimeout(finalizar, segundos * 1000 + 1500);
                segundos += 1.5;
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
                intervaloFinalizar = setTimeout(finalizar, segundos * 1000 + 1000);
                segundos += 1;
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

    // Quando o tempo chega ao fim, exclui todos os elementos
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
    document.getElementById('botaoJogarNovamente').style.display = 'block';

    clearInterval(intervaloContador)

    mostrarPontuacao();

}

function mostrarPontuacao() {

    var record = '';

    fetch("/minigame/selecionarMaiorPontuacao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: sessionStorage.ID_USUARIO
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            console.log('Resposta: ' + resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                if (json.maiorPontuacao != undefined) {
                    record = json.maiorPontuacao
                } else {
                    record = pontuacao
                }

                document.getElementById('minigame').innerHTML += `<p id="textoPontuacao">Pontuação: ${pontuacao} <br><br> Record: ${record}</p>`
                cadastrar();
            });

        }

    }).catch(function (erro) {
        console.log(erro);
    })

}


function contador() {

    segundos--;
    tempo++;
    atualizarContador();

    pontuacao += 25;

}

function atualizarContador() {

    segundosContador = [];
    document.getElementById('divContador').innerHTML = '';

    // Cria a interface de contador
    for (var i = 0; i < Math.trunc(segundos); i++) {

        segundosContador.push(`<div id="segundosContador${i}" class="segundosContador"></div>`)
        document.getElementById('divContador').innerHTML += segundosContador[i];

    }

}

function reiniciar() {
    window.location.reload();
}

function cadastrar() {

    fetch("/minigame/cadastrarResultado", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idUsuarioServer: sessionStorage.ID_USUARIO,
            pontuacaoServer: pontuacao,
            tempoServer: tempo
        }),


    })

        .then(function (resposta) {
            console.log("resposta: ", resposta);

        })

}