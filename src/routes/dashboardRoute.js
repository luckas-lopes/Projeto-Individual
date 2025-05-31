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

module.exports = router;