var database = require("../database/config")

function puxarTaxaAcertosQuiz(idUsuario) {

    var instrucaoSql = `select round(avg(taxaAcertosQuiz)) from tentativaQuiz where fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function puxarVezesQuiz(idUsuario) {

    var instrucaoSql = `select count(idTentativaQuiz) from tentativaQuiz where fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function puxarMelhorResultadoQuiz(idUsuario) {

    var instrucaoSql = `select max(pontuacaoQuiz) from tentativaQuiz where fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function puxarPartidasJogadasMinigame(idUsuario) {

    var instrucaoSql = `select count(idTentativaMinigame) from tentativaMinigame where fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function puxarMelhorPontuacaoMinigame(idUsuario) {

    var instrucaoSql = `select max(pontuacaoMinigame) from tentativaMinigame where fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function puxarMaiorTempoMinigame(idUsuario) {

    var instrucaoSql = `select max(tempoTentativaMinigame) from tentativaMinigame where fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function puxarHistoricoQuiz(idUsuario) {

    var instrucaoSql = `select * from tentativaQuiz where fkUsuario = ${idUsuario} order by idtentativaQuiz desc limit 3;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function puxarHistoricoMinigame(idUsuario) {

    var instrucaoSql = `select * from tentativaMinigame where fkUsuario = ${idUsuario} order by idtentativaMinigame desc limit 3;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function puxarTopCincoMinigame() {

    var instrucaoSql = `SELECT nome, pontuacaoMinigame, tempoTentativaMinigame FROM usuario JOIN tentativaMinigame ON idUsuario = fkUsuario WHERE (fkUsuario, pontuacaoMinigame) IN (SELECT fkUsuario, MAX(pontuacaoMinigame) FROM tentativaMinigame GROUP BY fkUsuario) ORDER BY pontuacaoMinigame DESC LIMIT 5;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function puxarMenorTempoQuiz(idUsuario) {

    var instrucaoSql = `select min(tempoTentativaQuiz) from tentativaQuiz where fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    puxarTaxaAcertosQuiz,
    puxarVezesQuiz,
    puxarMelhorResultadoQuiz,
    puxarPartidasJogadasMinigame,
    puxarMelhorPontuacaoMinigame,
    puxarMaiorTempoMinigame,
    puxarHistoricoQuiz,
    puxarHistoricoMinigame,
    puxarTopCincoMinigame,
    puxarMenorTempoQuiz,
};