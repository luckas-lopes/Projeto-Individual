var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/selecionarTaxaAcertosQuiz", function (req, res) {
    dashboardController.selecionarTaxaAcertosQuiz(req, res);
})

router.post("/selecionarVezesQuiz", function (req, res) {
    dashboardController.selecionarVezesQuiz(req, res);
})

router.post("/selecionarMelhorResultadoQuiz", function (req, res) {
    dashboardController.selecionarMelhorResultadoQuiz(req, res);
})

router.post("/selecionarPartidasJogadasMinigame", function (req, res) {
    dashboardController.selecionarPartidasJogadasMinigame(req, res);
})

router.post("/selecionarMelhorPontuacaoMinigame", function (req, res) {
    dashboardController.selecionarMelhorPontuacaoMinigame(req, res);
})

router.post("/selecionarMaiorTempoMinigame", function (req, res) {
    dashboardController.selecionarMaiorTempoMinigame(req, res);
})


router.post("/selecionarHistoricoQuiz", function (req, res) {
    dashboardController.selecionarHistoricoQuiz(req, res);
})

router.post("/selecionarHistoricoMinigame", function (req, res) {
    dashboardController.selecionarHistoricoMinigame(req, res);
})


module.exports = router;