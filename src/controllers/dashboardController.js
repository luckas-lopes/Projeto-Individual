var dashboardModel = require("../models/dashboardModel");

function selecionarTaxaAcertosQuiz(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("Você está deslogado!");
    }

    dashboardModel.puxarTaxaAcertosQuiz(idUsuario)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                res.json({
                    idUsuario: resultadoAutenticar[0].idUsuario,
                    taxaAcertos: resultadoAutenticar[0]['round(avg(taxaAcertosQuiz))']
                });

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function selecionarVezesQuiz(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("Você está deslogado!");
    }

    dashboardModel.puxarVezesQuiz(idUsuario)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                res.json({
                    idUsuario: resultadoAutenticar[0].idUsuario,
                    vezesQuiz: resultadoAutenticar[0]['count(idTentativaQuiz)']
                });

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}



function selecionarMelhorResultadoQuiz(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("Você está deslogado!");
    }

    dashboardModel.puxarMelhorResultadoQuiz(idUsuario)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                res.json({
                    idUsuario: resultadoAutenticar[0].idUsuario,
                    melhorResultado: resultadoAutenticar[0]['max(pontuacaoQuiz)']
                });

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}



function selecionarPartidasJogadasMinigame(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("Você está deslogado!");
    }

    dashboardModel.puxarPartidasJogadasMinigame(idUsuario)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                res.json({
                    idUsuario: resultadoAutenticar[0].idUsuario,
                    partidasJogadas: resultadoAutenticar[0]['count(idTentativaMinigame)']
                });

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}



function selecionarMelhorPontuacaoMinigame(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("Você está deslogado!");
    }

    dashboardModel.puxarMelhorPontuacaoMinigame(idUsuario)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em Strin

                res.json({
                    idUsuario: resultadoAutenticar[0].idUsuario,
                    melhorPontuacao: resultadoAutenticar[0]['max(pontuacaoMinigame)']
                });

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}



function selecionarMaiorTempoMinigame(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("Você está deslogado!");
    }

    dashboardModel.puxarMaiorTempoMinigame(idUsuario)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                res.json({
                    idUsuario: resultadoAutenticar[0].idUsuario,
                    maiorTempo: resultadoAutenticar[0]['max(tempoTentativaMinigame)']
                });

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}



function selecionarHistoricoQuiz(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("Você está deslogado!");
    }

    dashboardModel.puxarHistoricoQuiz(idUsuario)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                res.status(200).json(resultadoAutenticar);

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function selecionarHistoricoMinigame(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("Você está deslogado!");
    }

    dashboardModel.puxarHistoricoMinigame(idUsuario)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                res.status(200).json(resultadoAutenticar);

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}



module.exports = {
    selecionarTaxaAcertosQuiz,
    selecionarVezesQuiz,
    selecionarMelhorResultadoQuiz,
    selecionarPartidasJogadasMinigame,
    selecionarMelhorPontuacaoMinigame,
    selecionarMaiorTempoMinigame,
    selecionarHistoricoQuiz,
    selecionarHistoricoMinigame,
}