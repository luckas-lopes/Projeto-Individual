var idUsuario = sessionStorage.ID_USUARIO;

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

            taxaAcertos.innerHTML = json.taxaAcertos + '%'
        });

    }

}).catch(function (erro) {
    console.log(erro);
})




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

            melhorResultado.innerHTML =  json.melhorResultado + "/10"
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

            partidasJogadas.innerHTML =  json.partidasJogadas
        });

    }

}).catch(function (erro) {
    console.log(erro);
})





