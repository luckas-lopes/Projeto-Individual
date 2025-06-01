function carregarEmailSenha() {
    iptEmail.value = localStorage.Email
    iptSenha.value = localStorage.Senha
}


function redirecionarCadastro() {

    window.location = './cadastro.html';

}

function entrar() {

    var email = iptEmail.value;
    var senha = iptSenha.value;

    console.log("FORM LOGIN: ", email);
    console.log("FORM SENHA: ", senha);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log('Json: ' + JSON.stringify(json));
                sessionStorage.ID_USUARIO = json.idUsuario;
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;

                legendaLogin.innerHTML = '<font color="00ff00">Login realizado com sucesso!'

                setTimeout(function () {
                    window.location = "./sobreDesenho.html";
                }, 1000);

            });

        } else {

            legendaLogin.innerHTML = '<font color="ff0000">Falha no login! Verifique suas credenciais!'

        }

    }).catch(function (erro) {
        console.log(erro);
    })





}