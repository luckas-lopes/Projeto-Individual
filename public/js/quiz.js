const listaDePerguntas = [{

    numQuestao: '1',
    pergunta: 'Pergunta 1',
    opcao1: 'Opção 1',
    opcao2: 'Opção 2',
    opcao3: 'Opção 3',
    opcao4: 'Opção 4',
    correta: '2'

},
{
    numQuestao: '2',
    pergunta: 'Pergunta 2',
    opcao1: 'Opção 1 - 2',
    opcao2: 'Opção 2 - 2',
    opcao3: 'Opção 3 - 2',
    opcao4: 'Opção 4 - 2',
    correta: '1'


// {
//     numQuestao: '3',
//     pergunta: 'Pergunta 3',
//     opcao1: 'Opção 1',
//     opcao2: 'Opção 2',
//     opcao3: 'Opção 3',
//     opcao4: 'Opção 4',
//     correta: '4'

// }, {
//     numQuestao: '4',
//     pergunta: 'Pergunta 4',
//     opcao1: 'Opção 1',
//     opcao2: 'Opção 2',
//     opcao3: 'Opção 3',
//     opcao4: 'Opção 4',
//     correta: '3'
}];

var questao = 0;
var acertos = 0;
var opcoesSelecionadas = [];
var opcaoSelecionada = [false, false, false, false];

function clicou(opcao) {

    document.getElementById('divOpcao1').style.borderColor = 'rgb(214, 214, 214)';
    document.getElementById('divOpcao1').style.borderWidth = '1px';

    document.getElementById('divOpcao2').style.borderColor = 'rgb(214, 214, 214)';
    document.getElementById('divOpcao2').style.borderWidth = '1px';

    document.getElementById('divOpcao3').style.borderColor = 'rgb(214, 214, 214)';
    document.getElementById('divOpcao3').style.borderWidth = '1px';

    document.getElementById('divOpcao4').style.borderColor = 'rgb(214, 214, 214)';
    document.getElementById('divOpcao4').style.borderWidth = '1px';

    opcaoSelecionada = [document.getElementById('iptOpt1').checked, document.getElementById('iptOpt2').checked, document.getElementById('iptOpt3').checked, document.getElementById('iptOpt4').checked]
    opcoesSelecionadas[questao] = opcaoSelecionada.indexOf(true);
    if (opcao == 1){
        document.getElementById('divOpcao1').style.borderColor = 'rgb(54, 176, 201)';
        document.getElementById('divOpcao1').style.borderWidth = '3px';

    } else if (opcao == 2){
        document.getElementById('divOpcao2').style.borderColor = 'rgb(54, 176, 201)';
        document.getElementById('divOpcao2').style.borderWidth = '3px';
        
    } else if (opcao == 3){
        document.getElementById('divOpcao3').style.borderColor = 'rgb(54, 176, 201)';
        document.getElementById('divOpcao3').style.borderWidth = '3px';
         
    } else if (opcao == 4){
        document.getElementById('divOpcao4').style.borderColor = 'rgb(54, 176, 201)';
        document.getElementById('divOpcao4').style.borderWidth = '3px';
        
    }
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

    document.getElementById('divOpcao1').style.borderColor = 'rgb(214, 214, 214)';
    document.getElementById('divOpcao1').style.borderWidth = '1px';

    document.getElementById('divOpcao2').style.borderColor = 'rgb(214, 214, 214)';
    document.getElementById('divOpcao2').style.borderWidth = '1px';

    document.getElementById('divOpcao3').style.borderColor = 'rgb(214, 214, 214)';
    document.getElementById('divOpcao3').style.borderWidth = '1px';

    document.getElementById('divOpcao4').style.borderColor = 'rgb(214, 214, 214)';
    document.getElementById('divOpcao4').style.borderWidth = '1px';

    questao++;

    if (questao > 0) {
        document.getElementById('botaoVoltar').disabled = false;
    } else {
        document.getElementById('botaoVoltar').disabled = true;
    }

    var perguntaAtual = listaDePerguntas[questao];

    if (questao >= listaDePerguntas.length) {
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

    var perguntaAtual = listaDePerguntas[questao];
    opcaoCorreta = Number(perguntaAtual.correta) - 1;

    if (opcoesSelecionadas[questao] == opcaoCorreta) {
        console.log('Acertou');
        opcoesSelecionadas[questao] = true;
    } else {
        console.log('Errou');
        opcoesSelecionadas[questao] = false;
    }

}


function finalizar() {
    for (var i = 0; i <= opcoesSelecionadas.length - 1; i++) {
        if (opcoesSelecionadas[i] == true) {
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

    document.getElementById('valorGrafico').innerHTML = `${acertos / opcoesSelecionadas.length * 100}%`
    document.getElementById('erradas').innerHTML = `❌ ${opcoesSelecionadas.length - acertos} respostas incorretas`
    document.getElementById('pontuacao').innerHTML = `📊 ${acertos} de ${opcoesSelecionadas.length} pontos`

    var grafico = document.getElementById('grafico');
    new Chart(grafico, {
        type: 'pie',
        data: {
            labels: ['Certas', 'Erradas'],

            datasets: [{
                label: 'Acertos',
                data: [acertos, opcoesSelecionadas.length - acertos],
                borderWidth: 1,
                backgroundColor: [

                    'rgb(54, 162, 235)',
                    'rgb(255, 89, 89)'

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
}

function reiniciar() {

    window.location.reload();

}