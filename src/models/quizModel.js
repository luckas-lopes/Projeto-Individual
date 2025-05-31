var database = require("../database/config")

function salvarResultado(idUsuario, pontuacao, taxaAcertos) {

    var instrucaoSql = `INSERT INTO tentativaQuiz (pontuacaoQuiz, fkUsuario, fkQuiz, taxaAcertosQuiz) VALUES (${pontuacao}, ${idUsuario}, 1, ${taxaAcertos})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    salvarResultado
};