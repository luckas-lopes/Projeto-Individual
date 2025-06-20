var idUsuario = sessionStorage.ID_USUARIO;

function sair() {

    sessionStorage.EMAIL_USUARIO = '';
    sessionStorage.ID_USUARIO = '';
    sessionStorage.NOME_USUARIO = '';
    localStorage.Email = '';
    localStorage.Senha = '';

}

fetch("/dashboard/selecionarVezesQuiz", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuarioServer: idUsuario
    })
}).then(function (resposta) {

    if (resposta.ok) {
        console.log('Resposta: ' + resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            vezesQuiz.innerHTML = json.vezesQuiz
        });

    }

}).catch(function (erro) {
    console.log(erro);
})



fetch("/dashboard/selecionarTaxaAcertosQuiz", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuarioServer: idUsuario
    })
}).then(function (resposta) {

    if (resposta.ok) {
        console.log('Resposta: ' + resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            if (json.taxaAcertos != undefined) {
                taxaAcertos.innerHTML = json.taxaAcertos + '%'
            } else {
                taxaAcertos.innerHTML = '0%'
            }
        });

    }

}).catch(function (erro) {
    console.log(erro);
})



fetch("/dashboard/selecionarMelhorResultadoQuiz", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuarioServer: idUsuario
    })
}).then(function (resposta) {

    if (resposta.ok) {
        console.log('Resposta: ' + resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            if (json.melhorResultado != undefined) {
                melhorResultado.innerHTML = json.melhorResultado + "/10"
            } else {
                melhorResultado.innerHTML = "0/10"
            }
        });

    }

}).catch(function (erro) {
    console.log(erro);
})



fetch("/dashboard/selecionarPartidasJogadasMinigame", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuarioServer: idUsuario
    })
}).then(function (resposta) {

    if (resposta.ok) {
        console.log('Resposta: ' + resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            partidasJogadas.innerHTML = json.partidasJogadas
        });

    }

}).catch(function (erro) {
    console.log(erro);
})



fetch("/dashboard/selecionarMelhorPontuacaoMinigame", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuarioServer: idUsuario
    })
}).then(function (resposta) {

    if (resposta.ok) {
        console.log('Resposta: ' + resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            if (json.melhorPontuacao != undefined) {
                melhorPontuacao.innerHTML = json.melhorPontuacao
            } else {
                melhorPontuacao.innerHTML = 0
            }
        });

    }

}).catch(function (erro) {
    console.log(erro);
})



fetch("/dashboard/selecionarMaiorTempoMinigame", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuarioServer: idUsuario
    })
}).then(function (resposta) {

    if (resposta.ok) {
        console.log('Resposta: ' + resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            if (json.maiorTempo != undefined) {
                maiorTempo.innerHTML = json.maiorTempo + 's'
            } else {
                maiorTempo.innerHTML = '0s'
            }
        });

    }

}).catch(function (erro) {
    console.log(erro);
})



fetch("/dashboard/selecionarHistoricoQuiz", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuarioServer: idUsuario
    })
}).then(function (resposta) {

    if (resposta.ok) {
        console.log('Resposta: ' + resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            if (json != '') {

                if (json[0] != undefined) {
                    pontuacaoQuiz1.innerHTML = json[0].pontuacaoQuiz + '/10'
                    taxaAcertosQuiz1.innerHTML = json[0].taxaAcertosQuiz + '%'
                    tempoTentativaQuiz1.innerHTML = json[0].tempoTentativaQuiz + 's'
                    dataTentativaQuiz1.innerHTML = (json[0].dataTentativaQuiz.slice(0, 19)).replace('T', '<br>')
                } else {
                    pontuacaoQuiz1.innerHTML = json.pontuacaoQuiz + '/10'
                    taxaAcertosQuiz1.innerHTML = json.taxaAcertosQuiz + '%'
                    tempoTentativaQuiz1.innerHTML = json.tempoTentativaQuiz + 's'
                    dataTentativaQuiz1.innerHTML = (json.dataTentativaQuiz.slice(0, 19)).replace('T', '<br>')
                }

                if (json[1] != undefined) {
                    pontuacaoQuiz2.innerHTML = json[1].pontuacaoQuiz + '/10'
                    taxaAcertosQuiz2.innerHTML = json[1].taxaAcertosQuiz + '%'
                    tempoTentativaQuiz2.innerHTML = json[1].tempoTentativaQuiz + 's'
                    dataTentativaQuiz2.innerHTML = (json[1].dataTentativaQuiz.slice(0, 19)).replace('T', '<br>')
                }

                if (json[2] != undefined) {
                    pontuacaoQuiz3.innerHTML = json[2].pontuacaoQuiz + '/10'
                    taxaAcertosQuiz3.innerHTML = json[2].taxaAcertosQuiz + '%'
                    tempoTentativaQuiz3.innerHTML = json[2].tempoTentativaQuiz + 's'
                    dataTentativaQuiz3.innerHTML = (json[2].dataTentativaQuiz.slice(0, 19)).replace('T', '<br>')
                }
            }
        });

    }

}).catch(function (erro) {
    console.log(erro);
})



fetch("/dashboard/selecionarHistoricoMinigame", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuarioServer: idUsuario
    })
}).then(function (resposta) {

    if (resposta.ok) {
        console.log('Resposta: ' + resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            if (json != '') {

                if (json[0] != undefined) {
                    pontuacaoMinigame1.innerHTML = json[0].pontuacaoMinigame
                    tempoTentativaMinigame1.innerHTML = json[0].tempoTentativaMinigame + 's'
                    dataTentativaMinigame1.innerHTML = (json[0].dataTentativaMinigame.slice(0, 19)).replace('T', '<br>')
                } else if (json != undefined) {
                    pontuacaoMinigame1.innerHTML = json.pontuacaoMinigame
                    tempoTentativaMinigame1.innerHTML = json.tempoTentativaMinigame + 's'
                    dataTentativaMinigame1.innerHTML = (json.dataTentativaMinigame.slice(0, 19)).replace('T', '<br>')
                }

                if (json[1] != undefined) {
                    pontuacaoMinigame2.innerHTML = json[1].pontuacaoMinigame
                    tempoTentativaMinigame2.innerHTML = json[1].tempoTentativaMinigame + 's'
                    dataTentativaMinigame2.innerHTML = (json[1].dataTentativaMinigame.slice(0, 19)).replace('T', '<br>')
                }
                if (json[2] != undefined) {
                    pontuacaoMinigame3.innerHTML = json[2].pontuacaoMinigame
                    tempoTentativaMinigame3.innerHTML = json[2].tempoTentativaMinigame + 's'
                    dataTentativaMinigame3.innerHTML = (json[2].dataTentativaMinigame.slice(0, 19)).replace('T', '<br>')
                }

            }



        });

    }

}).catch(function (erro) {
    console.log(erro);
})



fetch("/dashboard/selecionarTopCincoMinigame", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuarioServer: idUsuario
    })
}).then(function (resposta) {

    if (resposta.ok) {
        console.log('Resposta: ' + resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            if (json != '') {

                for (var i = 0; i < json.length; i++) {

                    document.getElementById(`rank${i + 1}`).innerHTML = `${i + 1}º`
                    document.getElementById(`nomeRank${i + 1}`).innerHTML = `${json[i].nome}`
                    document.getElementById(`pontuacaoRank${i + 1}`).innerHTML = `${json[i].pontuacaoMinigame}`
                    document.getElementById(`tempoTentativaRank${i + 1}`).innerHTML = `${json[i].tempoTentativaMinigame}s`

                }

            }



        });

    }

}).catch(function (erro) {
    console.log(erro);
})



fetch("/dashboard/selecionarMenorTempoQuiz", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuarioServer: idUsuario
    })
}).then(function (resposta) {

    if (resposta.ok) {
        console.log('Resposta: ' + resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            if (json.menorTempoQuiz != undefined) {
                menorTempoQuiz.innerHTML = json.menorTempoQuiz + 's'
            } else {
                menorTempoQuiz.innerHTML = '0s'
            }
        });

    }

}).catch(function (erro) {
    console.log(erro);
})



fetch("/dashboard/selecionarPontuacaoMediaMinigame", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuarioServer: idUsuario
    })
}).then(function (resposta) {

    if (resposta.ok) {
        console.log('Resposta: ' + resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            if (json.pontuacaoMediaMinigame != undefined) {
                pontuacaoMediaMinigame.innerHTML = json.pontuacaoMediaMinigame
            } else {
                pontuacaoMediaMinigame.innerHTML = '0'
            }
        });

    }

}).catch(function (erro) {
    console.log(erro);
})



fetch("/usuarios/selecionarNome", {
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

            campoNome.innerHTML = json.nome

        });

    }

}).catch(function (erro) {
    console.log(erro);
})


