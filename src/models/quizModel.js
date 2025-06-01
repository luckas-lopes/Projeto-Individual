var database = require("../database/config")

function salvarResultado(idUsuario, pontuacao, taxaAcertos, tempoTentativaQuiz) {

    var instrucaoSql = `INSERT INTO tentativaQuiz (pontuacaoQuiz, fkUsuario, fkQuiz, taxaAcertosQuiz, tempoTentativaQuiz) VALUES (${pontuacao}, ${idUsuario}, 1, ${taxaAcertos}, ${tempoTentativaQuiz})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    salvarResultado
};