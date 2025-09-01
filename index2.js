for(let i = 0; i < usuarios.length; i++) {
    if(LoginDigitado === usuarios[i].login && senhaDigitada === usuarios[i].senha) {
        encontrado = true;
        setTimeout(()=> {
            mensagem.innerHTML="Redirecionando...";
        window.location.href = "index2.html";
},3000);
}
}

if(!encontrado){
    setTimeout(() => {
        mensagem.innerHTML ="Login ou senha incorretos, tente novamente.";

        document.getElementById("Login").value = "";
        document.getElementById("senha").value = "";
    }, 2000);
}
