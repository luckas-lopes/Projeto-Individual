var confirmacoes = [
    false, // Nome
    false, // Email
    false, // Senha
    false  // Confirmar Senha
]

function redirecionarLogin() {
    window.location = 'login.html';
}

function validarNomeCorreto() {

    var nome = iptNome.value;
    legendaNome.innerHTML = '';

    if (nome.length >= 1) {
        iptNome.style.borderColor = '#36b0c9'
        confirmacoes[0] = true;
    } else {
        confirmacoes[0] = false;
    }

}

function validarNomeErrado() {

    var nome = iptNome.value;

    if (nome.length < 1) {
        iptNome.style.borderColor = '#ff0000'
        legendaNome.innerHTML = 'Esse campo é obrigatório!'
        confirmacoes[0] = false;
    }
}

function validarEmailCorreto() {

    var email = iptEmail.value;
    legendaEmail.innerHTML = ''

    if (email.includes('@') && email.includes('.')) {
        iptEmail.style.borderColor = '#36b0c9';
        confirmacoes[1] = true;
    }
}

function validarEmailErrado() {

    var email = iptEmail.value;

    if ((email.includes('@') != true) || (email.includes('.') != true)) {
        legendaEmail.innerHTML = 'Insira um endereço de email válido!'
        iptEmail.style.borderColor = '#ff0000';
        confirmacoes[1] = false;
    }

    if (email.length < 1) {
        iptEmail.style.borderColor = '#ff0000'
        legendaEmail.innerHTML = 'Esse campo é obrigatório!'
        confirmacoes[1] = false;
    }
}

function validarSenhaCorreto() {
    var senha = iptSenha.value;
    var especial = ',.;:?!...+-*/=%<>±÷×≠≈≤≥()[]{}<>&|^~!"`@#$_:;°\§©®™¶' + "'";

    var caractereEspecial = false;
    var minCaractere = false;
    var mai = false;
    var min = false;

    legendaSenha.innerHTML = '';

    // Caractere Especial
    for (var i = 0; i < senha.length; i++) {

        var caractereAtual = senha[i];
        for (var j = 0; j < especial.length; j++) {
            if (caractereAtual == especial[j]) {
                caractereEspecial = true;
            }
        }

    }

    if (caractereEspecial == false) {
    } else {

    }

    // Mínimo de 8 Caracteres
    if (senha.length >= 8) {
        minCaractere = true;
    }

    // Verificar Maiúscula e Minúscula
    if (senha.toUpperCase() != senha) {
        min = true;
    }
    if (senha.toLowerCase() != senha) {
        mai = true;
    }

    // Trocar cor da borda
    if ((min == true) && (mai == true) && (caractereEspecial == true) && (minCaractere == true)) {
        iptSenha.style.borderColor = "#36b0c9";
        confirmacoes[2] = true;
    }

    return [min, mai, caractereEspecial, minCaractere];
}

function validarSenhaErrado() {
    var incorreta = validarSenhaCorreto();
    if ((incorreta[0] != true) || (incorreta[1] != true) || (incorreta[2] != true) || (incorreta[3] != true)) {
        iptSenha.style.borderColor = "#ff0000"
        confirmacoes[2] = false;
    }

    if (incorreta[0] != true) {
        legendaSenha.innerHTML += 'Crie uma senha com pelo menos uma letra minúscula<br>';
        confirmacoes[2] = false;
    }
    if (incorreta[1] != true) {
        legendaSenha.innerHTML += 'Crie uma senha com pelo menos uma letra maiúscula<br>';
        confirmacoes[2] = false;
    }
    if (incorreta[2] != true) {
        legendaSenha.innerHTML += 'Crie uma senha com pelo menos um caractere especial. ex(. , / $)<br>';
        confirmacoes[2] = false;
    }
    if (incorreta[3] != true) {
        legendaSenha.innerHTML += 'Crie uma senha com pelo menos 8 caracteres<br>';
        confirmacoes[2] = false;
    }

}

function validarConfirmarSenhaCorreto() {

    var confirmar = iptConfirmarSenha.value;
    var senha = iptSenha.value;
    legendaConfirmarSenha.innerHTML = '';

    if (senha == confirmar) {
        iptConfirmarSenha.style.borderColor = "#36b0c9"
        confirmacoes[3] = true;
    }
}

function validarConfirmarSenhaErrado() {

    var confirmar = iptConfirmarSenha.value;
    var senha = iptSenha.value;

    if ((senha != confirmar) || (confirmar.length < 1)) {
        iptConfirmarSenha.style.borderColor = "#ff0000"
        legendaConfirmarSenha.innerHTML = 'As senhas não conferem!';
        confirmacoes[3] = false;
    }
}

function cadastrar() {

    if (confirmacoes.includes(false)) {
        legendaCadastro.innerHTML = '<font color="ff0000">Preencha todos os campos corretamente!'
    } else {
        var nome = iptNome.value;
        var email = iptEmail.value;
        var senha = iptSenha.value

        // Enviando o valor da nova input
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nome,
                emailServer: email,
                senhaServer: senha
            }),


        })

            .then(function (resposta) {
                console.log("resposta: ", resposta);

                legendaCadastro.innerHTML = 'Cadastro realizado com sucesso!'
                iptNome.disabled = true
                iptEmail.disabled = true
                iptSenha.disabled = true
                iptConfirmarSenha.disabled = true
                localStorage.setItem('Email', email)
                localStorage.setItem('Senha', senha)

                if (resposta.ok) {
                    setTimeout(() => {
                        window.location = "./login.html";
                    }, "1000");
                }
            })
    }


}