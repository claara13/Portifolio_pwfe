function calcular(){
    // limpa a área de resposta no início da função
    document.getElementById("res").innerHTML=""

// Calcular o aumento com base nas regras fornecidas

if (funcionarios >= 150) {
    let valor = Number(document.getElementById(("funcionarios").value)* 3.60) * dias_uteis
    document.getElementById("res").innerHTML+=`<p>o custo mensal é de: R$ ${valor.toFixed(2)}</p>`

} else if (funcionarios >= 100) {
    let aumento = Number(document.getElementById(("funcionarios").value)* 3.80) * dias_uteis
    document.getElementById("res").innerHTML+=`<p>o custo mensal é de: R$ ${valor.toFixed(2)}</p>`

} else if (funcionarios >= 50) {
    let aumento = Number(document.getElementById(("funcionarios").value)* 4.10) * dias_uteis
    document.getElementById("res").innerHTML+=`<p>o custo mensal é de: R$ ${valor.toFixed(2)}</p>`
    
} else {
    let aumento = Number(document.getElementById(("funcionarios").value)* 4.50) * dias_uteis
    document.getElementById("res").innerHTML+=`<p>o custo mensal é de: R$ ${valor.toFixed(2)}</p>`
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
