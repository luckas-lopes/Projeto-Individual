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
        pergunta: 'O que você prefere fazer no tempo livre?',
        opcao1: 'Fazer algo produtivo',
        personagemOpcao1: 'Bob',
        opcao2: 'Relaxar sem pensar em nada',
        personagemOpcao2: 'Patrick',
        opcao3: 'Praticar esportes',
        personagemOpcao3: 'Sandy',
        opcao4: 'Apreciar alguma arte',
        personagemOpcao4: 'Lula',
        correta: '1'
    },

    {
        numQuestao: '2',
        pergunta: 'Qual desses lugares parece mais divertido para passar o dia?',
        opcao1: 'Um restaurante',
        personagemOpcao1: 'Bob',
        opcao2: 'Sua casa em um dia tranquilo',
        personagemOpcao2: 'Patrick',
        opcao3: 'Um parque em um dia ensolarado',
        personagemOpcao3: 'Sandy',
        opcao4: 'Uma sala silenciosa',
        personagemOpcao4: 'Lula',
        correta: '1'
    },

    {
        numQuestao: '3',
        pergunta: 'Como seus amigos te descrevem?',
        opcao1: 'Alegre e sempre disposto a ajudar',
        personagemOpcao1: 'Bob',
        opcao2: 'Tranquilo e engraçado',
        personagemOpcao2: 'Patrick',
        opcao3: 'Inteligente e focado',
        personagemOpcao3: 'Sandy',
        opcao4: 'Sério e um pouco mal-humorado',
        personagemOpcao4: 'Lula',
        correta: '1'
    },

    {
        numQuestao: '4',
        pergunta: 'Se algo dá errado, você...',
        opcao1: 'Tenta ver o lado bom e continua tentando',
        personagemOpcao1: 'Bob',
        opcao2: 'Nem percebe que deu errado',
        personagemOpcao2: 'Patrick',
        opcao3: 'Analisa o que aconteceu e busca uma solução',
        personagemOpcao3: 'Sandy',
        opcao4: 'Fica irritado e reclama',
        personagemOpcao4: 'Lula',
        correta: '1'
    }
];

const opcoesFinalizar = [

    {
        personagem: 'Bob Esponja',
        numero: 1,
        vezesSelecionado: 0,
        imgPersonagem: '../img/bobEsponja.png'
    },

    {
        personagem: 'Patrick',
        numero: 2,
        vezesSelecionado: 0,
        imgPersonagem: '../img/patrick.png'
    },

    {
        personagem: 'Sandy',
        numero: 3,
        vezesSelecionado: 0,
        imgPersonagem: '../img/sandy.png'
    },

    {
        personagem: 'Lula Molusco',
        numero: 4,
        vezesSelecionado: 0,
        imgPersonagem: '../img/lula.png'
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

    document.getElementById('divOpcao1').style.backgroundColor = '#1d5190';
    document.getElementById('divOpcao1').style.borderWidth = '1px';


    document.getElementById('divOpcao2').style.backgroundColor = '#1d5190';
    document.getElementById('divOpcao2').style.borderWidth = '1px';


    document.getElementById('divOpcao3').style.backgroundColor = '#1d5190';
    document.getElementById('divOpcao3').style.borderWidth = '1px';


    document.getElementById('divOpcao4').style.backgroundColor = '#1d5190';
    document.getElementById('divOpcao4').style.borderWidth = '1px';


    if (opcao == 1) {
        opcoesSelecionadas[questao] = listaDePerguntas[questao].personagemOpcao1
        document.getElementById('divOpcao1').style.backgroundColor = '#2f67b9';
        document.getElementById('divOpcao1').style.borderWidth = '3px';

    }
    if (opcao == 2) {
        opcoesSelecionadas[questao] = listaDePerguntas[questao].personagemOpcao2
        document.getElementById('divOpcao2').style.backgroundColor = '#2f67b9';
        document.getElementById('divOpcao2').style.borderWidth = '3px';

    }
    if (opcao == 3) {
        opcoesSelecionadas[questao] = listaDePerguntas[questao].personagemOpcao3
        document.getElementById('divOpcao3').style.backgroundColor = '#2f67b9';
        document.getElementById('divOpcao3').style.borderWidth = '3px';

    }
    if (opcao == 4) {
        opcoesSelecionadas[questao] = listaDePerguntas[questao].personagemOpcao4
        document.getElementById('divOpcao4').style.backgroundColor = '#2f67b9';
        document.getElementById('divOpcao4').style.borderWidth = '3px';

    }

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

    if (opcoesSelecionadas[questao] != undefined) {

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

    } else {
        alert('Selecione uma alternativa')
    }
}

function voltar() {

    questao = questao - 2;

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

    document.getElementById('questaoNum').innerHTML = questao + 1;
    document.getElementById('divPergunta').innerHTML = perguntaAtual.pergunta;
    document.getElementById('cOpcao1').innerHTML = perguntaAtual.opcao1;
    document.getElementById('cOpcao2').innerHTML = perguntaAtual.opcao2;
    document.getElementById('cOpcao3').innerHTML = perguntaAtual.opcao3;
    document.getElementById('cOpcao4').innerHTML = perguntaAtual.opcao4;

    if (opcoesSelecionadas[questao] == 'Bob') {
        document.getElementById('divOpcao1').style.backgroundColor = '#2f67b9';
        document.getElementById('divOpcao1').style.borderWidth = '3px';
    }
    if (opcoesSelecionadas[questao] == 'Patrick') {
        document.getElementById('divOpcao2').style.backgroundColor = '#2f67b9';
        document.getElementById('divOpcao2').style.borderWidth = '3px';
    }
    if (opcoesSelecionadas[questao] == 'Sandy') {
        document.getElementById('divOpcao3').style.backgroundColor = '#2f67b9';
        document.getElementById('divOpcao3').style.borderWidth = '3px';
    }
    if (opcoesSelecionadas[questao] == 'Lula') {
        document.getElementById('divOpcao4').style.backgroundColor = '#2f67b9';
        document.getElementById('divOpcao4').style.borderWidth = '3px';
    }

}

// function verificar() {

//     if (questao < listaDePerguntas.length) {

//         var perguntaAtual = listaDePerguntas[questao];
//         opcaoCorreta = Number(perguntaAtual.correta) - 1;

//         if (opcoesCorretas[questao] == opcaoCorreta) {
//             opcoesCorretas[questao] = true;
//         } else {
//             opcoesCorretas[questao] = false;
//         }
//     }

// }

function finalizar() {



    let personagens = [

        0, // Bob
        0, //Patrick
        0, // Sandy
        0  // Lula

    ]

    for (let i = 0; i < opcoesSelecionadas.length; i++) {

        let personagem = opcoesSelecionadas[i];

        if (personagem == 'Bob') {
            personagens[0]++;
        }
        if (personagem == 'Patrick') {
            personagens[1]++;
        }
        if (personagem == 'Sandy') {
            personagens[2]++;
        }
        if (personagem == 'Lula') {
            personagens[3]++;
        }

    }

    let personagem = personagens.indexOf(Math.max(...personagens));

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
    document.getElementById('personagem').innerHTML = opcoesFinalizar[personagem].personagem
    document.getElementById('imgResultado').style.backgroundImage = `url(${opcoesFinalizar[personagem].imgPersonagem})`
    document.getElementById('divResultado').style.opacity = 1;

}

function reiniciar() {

    window.location.reload();

}

// function cadastrar() {

//     fetch("/quiz/cadastrarResultado", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             pontuacaoServer: acertos,
//             idUsuarioServer: sessionStorage.ID_USUARIO,
//             taxaAcertosServer: taxaAcertos,
//             tempoTentativaQuizServer: tempo
//         }),


//     })

//         .then(function (resposta) {
//             console.log("resposta: ", resposta);


//         })

// }