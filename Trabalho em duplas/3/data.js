function dataHora(){
    // limpa a área de resposta no início da função
    const hora = new Date().getHours()
    if (hora >= 6 && hora <= 12) {
        document.getElementById("res").innerHTML= `Bom dia ${document.getElementById("nomes").value}, seja bem vindo(a) ao nosso sistema!`
    }else if (hora >= 13 && hora <= 18) {
        document.getElementById("res").innerHTML= `Boa Tarde ${document.getElementById("nomes").value}, seja bem vindo(a) ao nosso sistema!`
    }else if (hora >= 19 && hora <= 22) {
        document.getElementById("res").innerHTML= `Boa Noite ${document.getElementById("nomes").value}, seja bem vindo(a) ao nosso sistema!`
    }else {
        document.getElementById("res").innerHTML= `Boa Madrugada ${document.getElementById("nomes").value}, seja bem vindo(a) ao nosso sistema!`
}
}
// Função para atualizar a data e hora a cada segundo
function atualizarDataHora() {
    const dataHoraAtual = new Date();
    const dataHoraFormatada = dataHoraAtual.toLocaleString('pt-BR');

    // Selecione o elemento com o ID "data" e atualize o conteúdo
    const elementoDataHora = document.getElementById('data');
    elementoDataHora.textContent = dataHoraFormatada;
}

// Chame a função uma vez para exibir a data e hora inicial
atualizarDataHora();

// Chame a função a cada segundo para atualizar a data e hora
setInterval(atualizarDataHora, 1000);