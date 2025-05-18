var database = require("../database/config")

function salvarResultado(idUsuario, pontuacao) {

    var instrucaoSql = `UPDATE pontuacaoQuiz SET ultimaPontuacao = ${pontuacao} WHERE idPontuacao = ${idUsuario};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    salvarResultado
};