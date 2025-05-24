var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrarResultado", function (req, res) {
    quizController.cadastrarResultado(req, res);
})

router.post("/zerarPontucao", function (req, res) {
    usuarioController.zerar(req, res);
});

module.exports = router;