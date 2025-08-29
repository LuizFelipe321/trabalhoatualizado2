const usuarios = [
    { nome: "Alice", senha: "Alice123" },
    { nome: "Bruno", senha: "Bruno123" },
    { nome: "Carla", senha: "Carla123" }
];

function mudarMensagem() {
    const men = document.getElementById('h1');
    const botao = document.getElementById('botao');
    const subtitulo = document.getElementById('subtitulo');

    men.innerHTML = "Você acabou de GANHAR 5% de descontos em todos os produtos do site!<br>Aproveite";
    botao.innerText = "Desconto aplicado!";
    subtitulo.innerHTML = "🎉 Parabéns! Você desbloqueou uma oferta exclusiva!";
}

function login() {
    const nomeDigitado = document.getElementById("nome").value.trim();
    const senhaDigitada = document.getElementById("senha").value.trim();
    const msg = document.getElementById("box_login");

    // Validação: apenas letras no nome
    const regex = /^[A-Za-zÀ-ú]+$/;
    if (!regex.test(nomeDigitado)) {
        msg.textContent = "❌ Caracteres não aceitos. Digite apenas letras.";
        return;
    }

    let encontrado = false;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nome === nomeDigitado && usuarios[i].senha === senhaDigitada) {
            encontrado = true;
            msg.textContent = `✅ Bem-vindo, ${nomeDigitado}!`;

            setTimeout(() => {
                msg.innerHTML = 'Redirecionando...';
                window.location.href = 'index2.html';
            }, 2000);
            break;
        }
    }

    if (!encontrado) {
        msg.textContent = "❌ Login ou senha incorretos. Tente novamente.";
        document.getElementById('nome').value = '';
        document.getElementById('senha').value = '';
    }
}

document.getElementById('subtitulo').onclick = mudarMensagem;