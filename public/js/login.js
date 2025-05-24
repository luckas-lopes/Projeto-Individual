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
                console.log(JSON.stringify(json));
                sessionStorage.ID_USUARIO = json.idUsuario;
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;

                setTimeout(function () {
                    window.location = "./index.html";
                }, 1000);

            });

        }

    }).catch(function (erro) {
        console.log(erro);
    })





}