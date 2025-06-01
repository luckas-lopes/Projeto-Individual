var database = require("../database/config")

function salvarResultado(idUsuario, pontuacao, tempo) {

    var instrucaoSql = `INSERT INTO tentativaMinigame (fkUsuario, pontuacaoMinigame, tempoTentativaMinigame) VALUES (${idUsuario}, ${pontuacao}, ${tempo})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function puxarMaiorPontuacao(idUsuario) {

    var instrucaoSql = `SELECT MAX(pontuacaoMinigame) FROM tentativaMinigame WHERE fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    salvarResultado,
    puxarMaiorPontuacao
};