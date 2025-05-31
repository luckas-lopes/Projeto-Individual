const quizModel = require("../models/quizModel");

function cadastrarResultado(req, res) {

    var idUsuario = req.body.idUsuarioServer;
    var ultimaPontuacao = req.body.pontuacaoServer;
    var taxaAcertos = req.body.taxaAcertosServer;

    quizModel.salvarResultado(idUsuario, ultimaPontuacao, taxaAcertos)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    cadastrarResultado
}