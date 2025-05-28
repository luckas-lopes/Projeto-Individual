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


module.exports = {
    cadastrarResultado
}