function calcular(){
    // limpa a área de resposta no início da função
    document.getElementById("res").innerHTML=""

// Calcular o aumento com base nas regras fornecidas

if (salario <= 1200.00) {
    let aumento = Number(document.getElementById("salario").value)* 1.16;
    document.getElementById("res").innerHTML+=`<p>O novo salário do funcionário é: R$ ${aumento.toFixed(2)}</p>` // Aumento de 16%

} else if (salario <= 2100.00) {
    let aumento = Number(document.getElementById("salario").value)* 1.13;
    document.getElementById("res").innerHTML+=`<p>O novo salário do funcionário é: R$ ${aumento.toFixed(2)}</p>` // Aumento de 13%

} else if (salario <= 3000.00) {
    let aumento = Number(document.getElementById("salario").value)* 1.10;
    document.getElementById("res").innerHTML+=`<p>O novo salário do funcionário é: R$ ${aumento.toFixed(2)}</p>` // Aumento de 10%
    
} else {
    let aumento = Number(document.getElementById("salario").value)* 1.05;
    document.getElementById("res").innerHTML+=`<p>O novo salário do funcionário é: R$ ${aumento.toFixed(2)}</p>` // Aumento de 5%
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