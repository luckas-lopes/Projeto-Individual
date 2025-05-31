var database = require("../database/config")

function salvarResultado(idUsuario, pontuacao, tempo) {

    var instrucaoSql = `INSERT INTO tentativaMinigame (fkUsuario, pontuacaoMinigame, tempoTentativaMinigame) VALUES (${idUsuario}, ${pontuacao}, ${tempo})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    salvarResultado
};