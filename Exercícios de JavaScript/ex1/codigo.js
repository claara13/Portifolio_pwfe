function calcular(){
    // limpa a área de resposta no início da função
    document.getElementById("res").innerHTML=""
    
    // calcula o valor da hora trabalhada
    let horatrabalho = Number(document.getElementById("salario").value)/200
    document.getElementById("res").innerHTML+=`<p>O valor da hora trabalhada é R$ ${horatrabalho.toFixed(2)}</p>`
    
    // calcula o valor da hora extra
    let qtdhora = Number(document.getElementById("quant_hr_normais").value)
    let valorhoraextra = horatrabalho*qtdhora
    document.getElementById("res").innerHTML+=`<p>O valor da hora extra normal é R$ ${valorhoraextra.toFixed(2)}</p>`

    // calcula o valor da hora extra de final de semana
    let qtdhorafds = Number(document.getElementById("quant_hr_fds").value)
    let valorhoraextrafds = horatrabalho*qtdhorafds*1.5
    document.getElementById("res").innerHTML+=`<p>O valor da hora extra de final de semana é R$ ${valorhoraextrafds.toFixed(2)}</p>`

    //calcula o valor total
    let total = valorhoraextra + valorhoraextrafds
    document.getElementById("res").innerHTML+=`<p>O valor total a receber é R$ ${total.toFixed(2)}</p>`
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