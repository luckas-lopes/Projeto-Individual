fetch("/usuarios/selecionarNome", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuarioServer: sessionStorage.ID_USUARIO
    })
}).then(function (resposta) {

    if (resposta.ok) {
        console.log('Resposta: ' + resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            campoNome.innerHTML = json.nome

        });

    }

}).catch(function (erro) {
    console.log(erro);
})

function sair() {

    sessionStorage.EMAIL_USUARIO = '';
    sessionStorage.ID_USUARIO = '';
    sessionStorage.NOME_USUARIO = '';
    localStorage.Email = '';
    localStorage.Senha = '';

}

const listaDePerguntas = [

    {
        numQuestao: '1',
        pergunta: 'Qual é o nome completo do Sr. Siriguejo?',
        opcao1: 'Eugene Harold Siriguejo',
        opcao2: 'Edward Henry Siriguejo',
        opcao3: 'Ernest Hugo Siriguejo',
        opcao4: 'Eric Howard Siriguejo',
        correta: '1'
    },

    {
        numQuestao: '2',
        pergunta: 'Qual é o nome do super-herói que Bob Esponja e Patrick adoram?',
        opcao1: 'Molusco Mágico',
        opcao2: 'Homem-Sereia',
        opcao3: 'Mexilhão Cósmico',
        opcao4: 'Homem-Raio',
        correta: '2'
    },

    {
        numQuestao: '3',
        pergunta: 'Qual é o nome do supercomputador que auxilia o Plankton?',
        opcao1: 'Keren',
        opcao2: 'Kairen',
        opcao3: 'Karen',
        opcao4: 'Karyn',
        correta: '3'
    },

    {
        numQuestao: '4',
        pergunta: 'Como se chama o restaurante rival do Siri Cascudo?',
        opcao1: 'Balde de Siri',
        opcao2: 'Balde de Lixo',
        opcao3: 'Balde do Mar',
        opcao4: 'Balde de Salmão',
        correta: '2'
    },

    {
        numQuestao: '5',
        pergunta: 'Qual é o trabalho do Bob Esponja na Fenda do Bikini?',
        opcao1: 'Gerente do Siri Cascudo',
        opcao2: 'Cozinheiro no Siri Cascudo',
        opcao3: 'Atendente do Siri Cascudo',
        opcao4: 'Entregador do Siri Cascudo',
        correta: '2'
    },

    {
        numQuestao: '6',
        pergunta: 'Qual é o nome da avó do Bob Esponja?',
        opcao1: 'Vovó Esponja',
        opcao2: 'Vovó Clara',
        opcao3: 'Vovó Bolha',
        opcao4: 'Vovó Fenda',
        correta: '1'
    },

    {
        numQuestao: '7',
        pergunta: 'O que Bob Esponja tentou aprender a fazer, mas nunca conseguiu?',
        opcao1: 'Andar de bicicleta',
        opcao2: 'Dirigir',
        opcao3: 'Tocar clarinete',
        opcao4: 'Fritar Habúrguer',
        correta: '2'
    },

    {
        numQuestao: '8',
        pergunta: 'Qual é o nome da lagosta fisiculturista que aparece na série?',
        opcao1: 'Larry',
        opcao2: 'Terry',
        opcao3: 'Berry',
        opcao4: 'Harry',
        correta: '1'
    },

    {
        numQuestao: '9',
        pergunta: 'Como se chama o clube secreto do Bob e do Patrick?',
        opcao1: 'Clube dos Moluscos',
        opcao2: 'Clube dos Mexilhões',
        opcao3: 'Clube dos Pescadores',
        opcao4: 'Clube dos Feios',
        correta: '4'
    },

    {
        numQuestao: '10',
        pergunta: 'O que o Plankton é, na verdade, em termos biológicos?',
        opcao1: 'Bactéria',
        opcao2: 'Molusco',
        opcao3: 'Copépode',
        opcao4: 'Crustáceo',
        correta: '3'
    }
];

const opcoesFinalizar = [

    {
        frase: 'Poxa, boa sorte na próxima',
        imagem: 'url("../img/bobTriste.png")',
        acertosMaximo: 2
    },

    {
        frase: 'Nada mal, mas pode melhorar',
        imagem: 'url("../img/bobmane.png")',
        acertosMaximo: 5
    },

    {
        frase: 'Muito bem! Mas aina não o melhor',
        imagem: "url('../img/bobNerd.png')",
        acertosMaximo: 7
    },

    {
        frase: 'Uau, você realmente sabe de Bob Esponja!',
        imagem: "url('../img/bobFeliz.png')",
        acertosMaximo: 10
    },



]

var questao = 0;
var acertos = 0;
var taxaAcertos = 0;
var tempo = 0;
var opcoesCorretas = [];
var opcoesSelecionadas = [];
var opcaoSelecionada = [false, false, false, false];

var timer;

function clicou(opcao) {

    document.getElementById('divOpcao1').style.backgroundColor = '#7b44fa';
    document.getElementById('divOpcao1').style.borderWidth = '1px';


    document.getElementById('divOpcao2').style.backgroundColor = '#7b44fa';
    document.getElementById('divOpcao2').style.borderWidth = '1px';


    document.getElementById('divOpcao3').style.backgroundColor = '#7b44fa';
    document.getElementById('divOpcao3').style.borderWidth = '1px';


    document.getElementById('divOpcao4').style.backgroundColor = '#7b44fa';
    document.getElementById('divOpcao4').style.borderWidth = '1px';

    if (opcao != undefined) {
        opcoesSelecionadas[questao] = opcao;
        opcaoSelecionada = [document.getElementById('iptOpt1').checked, document.getElementById('iptOpt2').checked, document.getElementById('iptOpt3').checked, document.getElementById('iptOpt4').checked]
        opcoesCorretas[questao] = opcaoSelecionada.indexOf(true);
    }
    if (opcoesSelecionadas[questao] == 1) {
        document.getElementById('divOpcao1').style.backgroundColor = '#976bff';
        document.getElementById('divOpcao1').style.borderWidth = '3px';

    } else if (opcoesSelecionadas[questao] == 2) {
        document.getElementById('divOpcao2').style.backgroundColor = '#976bff';
        document.getElementById('divOpcao2').style.borderWidth = '3px';

    } else if (opcoesSelecionadas[questao] == 3) {
        document.getElementById('divOpcao3').style.backgroundColor = '#976bff';
        document.getElementById('divOpcao3').style.borderWidth = '3px';

    } else if (opcoesSelecionadas[questao] == 4) {
        document.getElementById('divOpcao4').style.backgroundColor = '#976bff';
        document.getElementById('divOpcao4').style.borderWidth = '3px';

    }

    verificar();

}

function comecar() {

    timer = setInterval(() => {
        tempo++;
    }, 1000);

    document.getElementById('divOpcao1').style.cursor = 'pointer';
    document.getElementById('divOpcao2').style.cursor = 'pointer';
    document.getElementById('divOpcao3').style.cursor = 'pointer';
    document.getElementById('divOpcao4').style.cursor = 'pointer';
    document.getElementById('botaoEnviar').style.cursor = 'pointer';

    document.getElementById('divPergunta').innerHTML = listaDePerguntas[0].pergunta;
    document.getElementById('cOpcao1').innerHTML = listaDePerguntas[0].opcao1;
    document.getElementById('cOpcao2').innerHTML = listaDePerguntas[0].opcao2;
    document.getElementById('cOpcao3').innerHTML = listaDePerguntas[0].opcao3;
    document.getElementById('cOpcao4').innerHTML = listaDePerguntas[0].opcao4;
    document.getElementById('questaoNum').innerHTML = questao + 1;
    document.getElementById('comecar').remove();

    document.getElementById('linha').style.opacity = 1;
    document.getElementById('questaoNum').style.opacity = 1;
    document.getElementById('divOpcoes').style.opacity = 1;
    document.getElementById('botaoEnviar').style.opacity = 1;
    document.getElementById('botaoEnviar').disabled = false;
    document.getElementById('botaoVoltar').style.opacity = 1;
}

function atualizarPergunta() {

    questao++;

    clicou();

    if (questao > 0) {
        if (questao == listaDePerguntas.length - 1) {
            document.getElementById('botaoEnviar').innerHTML = 'Enviar';
        } else {
            document.getElementById('botaoEnviar').innerHTML = 'Próximo';
        }
        document.getElementById('botaoVoltar').disabled = false;
    } else {
        document.getElementById('botaoVoltar').disabled = true;
    }

    var perguntaAtual = listaDePerguntas[questao];

    if (questao == listaDePerguntas.length) {
        finalizar();
        return;
    }
    document.getElementById('questaoNum').innerHTML = questao + 1;
    document.getElementById('divPergunta').innerHTML = perguntaAtual.pergunta;
    document.getElementById('cOpcao1').innerHTML = perguntaAtual.opcao1;
    document.getElementById('cOpcao2').innerHTML = perguntaAtual.opcao2;
    document.getElementById('cOpcao3').innerHTML = perguntaAtual.opcao3;
    document.getElementById('cOpcao4').innerHTML = perguntaAtual.opcao4;

    opcaoSelecionada = [false, false, false, false];


}

function voltar() {

    questao = questao - 2;

    atualizarPergunta();

}

function verificar() {

    if (questao < listaDePerguntas.length) {

        var perguntaAtual = listaDePerguntas[questao];
        opcaoCorreta = Number(perguntaAtual.correta) - 1;

        if (opcoesCorretas[questao] == opcaoCorreta) {
            opcoesCorretas[questao] = true;
        } else {
            opcoesCorretas[questao] = false;
        }
    }

}

function finalizar() {
    for (var i = 0; i < opcoesCorretas.length; i++) {
        if (opcoesCorretas[i] == true) {
            acertos++;
        }
    }

    clearInterval(timer);
    document.getElementById('divPergunta').remove();
    document.getElementById('cOpcao1').remove();
    document.getElementById('cOpcao2').remove();
    document.getElementById('cOpcao3').remove();
    document.getElementById('cOpcao4').remove();
    document.getElementById('questaoNum').remove();
    document.getElementById('divOpcoes').remove();
    document.getElementById('linha').remove();
    document.getElementById('botaoEnviar').remove();
    document.getElementById('botaoVoltar').remove();
    document.getElementById('botaoJogarNovamente').disabled = false;

    document.getElementById('divResultado').style.opacity = 1;

    for (var i = 3; i >= 0; i--) {
        if ((acertos <= opcoesFinalizar[i].acertosMaximo)) {
            document.getElementById('frase').innerHTML = `${opcoesFinalizar[i].frase}`;
            document.getElementById('imgResultado').style.backgroundImage = `${opcoesFinalizar[i].imagem}`;
        }
    }

    taxaAcertos = Math.round(acertos / opcoesCorretas.length * 100)
    document.getElementById('valorGrafico').innerHTML = `${taxaAcertos}%`
    document.getElementById('erradas').innerHTML = `❌ ${opcoesCorretas.length - acertos} respostas incorretas`
    document.getElementById('pontuacao').innerHTML = `📊 ${acertos} de ${opcoesCorretas.length} pontos`

    var grafico = document.getElementById('grafico');
    new Chart(grafico, {
        type: 'pie',
        data: {
            labels: ['Certas', 'Erradas'],

            datasets: [{
                label: 'Acertos',
                data: [acertos, opcoesCorretas.length - acertos],
                borderWidth: 1,
                borderColor: '#7e279f',
                backgroundColor: [

                    '#e487e2',
                    '#9f4f92'

                ]
            }]
        }, options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
            responsive: false
        }

    });
    cadastrar();
}

function reiniciar() {

    window.location.reload();

}

function cadastrar() {

    fetch("/quiz/cadastrarResultado", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pontuacaoServer: acertos,
            idUsuarioServer: sessionStorage.ID_USUARIO,
            taxaAcertosServer: taxaAcertos,
            tempoTentativaQuizServer: tempo
        }),


    })

        .then(function (resposta) {
            console.log("resposta: ", resposta);


        })

}