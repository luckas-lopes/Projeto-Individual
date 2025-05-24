const listaDePerguntas = [

    {
        numQuestao: '1',
        pergunta: 'Qual é o nome do melhor amigo do Bob Esponja?',
        opcao1: 'Lula Molusco',
        opcao2: 'Sr. Siriguejo',
        opcao3: 'Plankton',
        opcao4: 'Patrick',
        correta: '4'
    },

    {
        numQuestao: '2',
        pergunta: 'Onde Bob Esponja trabalha?',
        opcao1: 'Restaurante do Plankton',
        opcao2: 'Pizzaria do Mar',
        opcao3: 'Siri Cascudo',
        opcao4: 'Lanchonete do Lula',
        correta: '3'
    },

    {
        numQuestao: '3',
        pergunta: 'Quem é o dono do Siri Cascudo?',
        opcao1: 'Sr. Siriguejo',
        opcao2: 'Bob Esponja',
        opcao3: 'Plankton',
        opcao4: 'Patrick',
        correta: '1'
    },

    {
        numQuestao: '4',
        pergunta: 'Qual é o nome da esquila cientista?',
        opcao1: 'Laura',
        opcao2: 'Lisa',
        opcao3: 'Sandy',
        opcao4: 'Sheila',
        correta: '3'
    },

    {
        numQuestao: '5',
        pergunta: 'Quem tenta roubar a fórmula do hambúrguer de siri?',
        opcao1: 'Patrick',
        opcao2: 'Lula Molusco',
        opcao3: 'Plankton',
        opcao4: 'Larry',
        correta: '3'
    },

    {
        numQuestao: '6',
        pergunta: 'Onde Bob Esponja mora?',
        opcao1: 'Em um barril',
        opcao2: 'Em um abacaxi',
        opcao3: 'Em uma caverna',
        opcao4: 'Em uma concha',
        correta: '2'
    },

    {
        numQuestao: '7',
        pergunta: 'Qual instrumento musical Lula Molusco toca?',
        opcao1: 'Trompete',
        opcao2: 'Violino',
        opcao3: 'Flauta',
        opcao4: 'Clarinete',
        correta: '4'
    },

    {
        numQuestao: '8',
        pergunta: 'Qual é o nome da cidade onde vivem?',
        opcao1: 'Mar Azul',
        opcao2: 'Água Clara',
        opcao3: 'Fenda do Biquíni',
        opcao4: 'Recife Profundo',
        correta: '3'
    },

    {
        numQuestao: '9',
        pergunta: 'Qual é o pet de estimação do Bob Esponja?',
        opcao1: 'Um polvo',
        opcao2: 'Um caracol',
        opcao3: 'Um peixe',
        opcao4: 'Um cavalo-marinho',
        correta: '2'
    },

    {
        numQuestao: '10',
        pergunta: 'Qual é o nome do caracol de estimação do Bob?',
        opcao1: 'Toby',
        opcao2: 'Spike',
        opcao3: 'Gary',
        opcao4: 'Leo',
        correta: '3'
    },

    {
        numQuestao: '11',
        pergunta: 'Qual o prato principal do Siri Cascudo?',
        opcao1: 'Batata frita',
        opcao2: 'Pizza',
        opcao3: 'Hambúrguer de siri',
        opcao4: 'Cachorro-quente',
        correta: '3'
    },

    {
        numQuestao: '12',
        pergunta: 'Quem é o vizinho ranzinza do Bob?',
        opcao1: 'Patrick',
        opcao2: 'Lula Molusco',
        opcao3: 'Plankton',
        opcao4: 'Sr. Siriguejo',
        correta: '2'
    },

    {
        numQuestao: '13',
        pergunta: 'O que Sandy precisa usar para respirar no fundo do mar?',
        opcao1: 'Óculos',
        opcao2: 'Capacete de ar',
        opcao3: 'Nadadeiras',
        opcao4: 'Máscara de mergulho',
        correta: '2'
    },

    {
        numQuestao: '14',
        pergunta: 'Qual é a ocupação do Bob Esponja?',
        opcao1: 'Lavador de carros',
        opcao2: 'Cozinheiro',
        opcao3: 'Padeiro',
        opcao4: 'Músico',
        correta: '2'
    },

    {
        numQuestao: '15',
        pergunta: 'Qual é o lema do Sr. Siriguejo?',
        opcao1: 'Viva a amizade',
        opcao2: 'Trabalhe menos',
        opcao3: 'Dinheiro em primeiro lugar',
        opcao4: 'Comida grátis',
        correta: '3'
    }

];

var questao = 0;
var acertos = 0;
var opcoesCorretas = [];
var opcoesSelecionadas = [];
var opcaoSelecionada = [false, false, false, false];

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
    }
    opcaoSelecionada = [document.getElementById('iptOpt1').checked, document.getElementById('iptOpt2').checked, document.getElementById('iptOpt3').checked, document.getElementById('iptOpt4').checked]
    opcoesCorretas[questao] = opcaoSelecionada.indexOf(true);
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

    document.getElementById('divOpcao1').style.cursor = 'pointer';
    document.getElementById('divOpcao2').style.cursor = 'pointer';
    document.getElementById('divOpcao3').style.cursor = 'pointer';
    document.getElementById('divOpcao4').style.cursor = 'pointer';
    document.getElementById('botaoVoltar').style.cursor = 'pointer';
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
        document.getElementById('botaoVoltar').disabled = false;
    } else {
        document.getElementById('botaoVoltar').disabled = true;
    }

    var perguntaAtual = listaDePerguntas[questao];

    if (questao == 15) {
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
    
    if (questao < 15) {

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

    if (acertos <= 4) {
        document.getElementById('imgResultado').style.backgroundImage = "url('../img/bobTriste.png')"
    } else if (acertos <= 7) {
        document.getElementById('imgResultado').style.backgroundImage = "url('../img/bobMane.png')"
    } else if (acertos <= 12) {
        document.getElementById('imgResultado').style.backgroundImage = "url('../img/bobNerd.png')"
    } else if (acertos <= 15) {
        document.getElementById('imgResultado').style.backgroundImage = "url('../img/bobFeliz.png')"
    }


    document.getElementById('valorGrafico').innerHTML = `${Math.round(acertos / opcoesCorretas.length * 100)}%`
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

    sessionStorage.PONTUACAO_USUARIO = acertos;
    console.log("FORM ACERTOS: ", acertos);

    fetch("/quiz/cadastrarResultado", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pontuacaoServer: acertos,
            idUsuarioServer: sessionStorage.ID_USUARIO
        })
    }).then(function (resposta) {
        sessionStorage.ID_USUARIO = json.idUsuario;
        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.ID_USUARIO = json.idUsuario;
                sessionStorage.PONTUACAO_USUARIO = json.pontuacao;

            });

        }

    }).catch(function (erro) {
        console.log(erro);
    })


}