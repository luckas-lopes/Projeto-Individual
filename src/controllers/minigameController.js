const minigameModel = require("../models/minigameModel");

function cadastrarResultado(req, res) {

    var idUsuario = req.body.idUsuarioServer;
    var pontuacao = req.body.pontuacaoServer;
    var tempo = req.body.tempoServer;

    minigameModel.salvarResultado(idUsuario, pontuacao, tempo)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function selecionarMaiorPontuacao(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("Você está deslogado!");
    }

    minigameModel.puxarMaiorPontuacao(idUsuario)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                res.json({
                    idUsuario: resultadoAutenticar[0].idUsuario,
                    maiorPontuacao: resultadoAutenticar[0]['MAX(pontuacaoMinigame)']
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


module.exports = {
    cadastrarResultado,
    selecionarMaiorPontuacao
}