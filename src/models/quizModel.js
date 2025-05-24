var database = require("../database/config")

function salvarResultado(idUsuario, pontuacao) {

    var instrucaoSql = `UPDATE pontuacaoQuiz SET ultimaPontuacao = ${pontuacao} WHERE idPontuacao = ${idUsuario};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

// function zerarPontuacaoQuiz(idUsuario) {

//     var instrucaoSql = `INSERT INTO pontuacaoQuiz (maiorPontuacao, ultimaPontuacao, fkUsuario) VALUES (0, 0, ${idUsuario})`;


//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    salvarResultado
};