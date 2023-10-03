function media(){
    // limpa a área de resposta no início da função
    document.getElementById("res").innerHTML=""
    
    // Soma das 4 notas
    let total = Number(document.getElementById("primeira").value) + Number(document.getElementById("segunda").value) + Number(document.getElementById("terceira").value) + Number(document.getElementById("quarta").value)

    // Divisão das 4 notas

    let media = total / 4
    document.getElementById("res").innerHTML+=`<p>Sua média equivale a ${media.toFixed(2)}</p>`

    // Para garantir que o aluno saiba se foi reprovado ou não 

    if (media < 6){
        document.getElementById("res").innerHTML+=`<p>Você está REPROVADO, procure um professor</p>`
    } else {
        document.getElementById("res").innerHTML+=`<p>Você está APROVADO! Boas Férias :) </p>`
    }
    
}