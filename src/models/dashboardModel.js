var database = require("../database/config")

function puxarTaxaAcertosQuiz(idUsuario) {

    var instrucaoSql = `select round(avg(taxaAcertos)) from tentativaQuiz where fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function puxarVezesQuiz(idUsuario) {

    var instrucaoSql = `select count(idTentativa) from tentativaQuiz where fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function puxarMelhorResultadoQuiz(idUsuario) {

    var instrucaoSql = `select max(pontuacao) from tentativaQuiz where fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function puxarPartidasJogadasMinigame(idUsuario) {

    var instrucaoSql = `select count(idTentativaMinigame) from tentativaMinigame where fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    puxarTaxaAcertosQuiz,
    puxarVezesQuiz,
    puxarMelhorResultadoQuiz,
    puxarPartidasJogadasMinigame
};