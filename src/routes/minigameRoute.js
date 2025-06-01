var express = require("express");
var router = express.Router();

var minigameController = require("../controllers/minigameController");

router.post("/cadastrarResultado", function (req, res) {
    minigameController.cadastrarResultado(req, res);
})

router.post("/selecionarMaiorPontuacao", function (req, res) {
    minigameController.selecionarMaiorPontuacao(req, res);
})

module.exports = router;