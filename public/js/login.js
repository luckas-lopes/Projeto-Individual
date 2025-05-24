function redirecionarCadastro() {

    window.location = 'cadastro.html';

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
                console.log(JSON.stringify(json));
                sessionStorage.ID_USUARIO = json.idUsuario;
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;

            });

        }

    }).catch(function (erro) {
        console.log(erro);
    })


    fetch("/usuarios/zerarPontucao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: sessionStorage.ID_USUARIO
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.ID_USUARIO = json.idUsuario;

            });

        }

    }).catch(function (erro) {
        console.log(erro);
    })

    setTimeout(function () {
        window.location = "./index.html";
    }, 1000);
}