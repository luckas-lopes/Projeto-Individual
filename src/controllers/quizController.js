const quizModel = require("../models/quizModel");

function cadastrarResultado(req, res) {

    var idUsuario = req.body.idUsuarioServer;
    var ultimaPontuacao = req.body.pontuacaoServer;

    quizModel.salvarResultado(idUsuario, ultimaPontuacao)
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