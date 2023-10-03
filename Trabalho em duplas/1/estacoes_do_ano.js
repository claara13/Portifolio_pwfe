function verifica_estacao() {
    let mes = prompt('Digite o mês em que você irá fazer sua viagem: ')
    let saída = document.querySelector('section#saida')
    let estacao
    
// O switch case é uma estrutura de controle condicional que permite tomar decisões com base em diferentes casos ou valores, assim como if/else, porém com mais exatidão.
    switch (mes.toUpperCase()) { // O método toUpperCase() transforma todas as letras de uma string para maiúsculas
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': // Podemos testar múltiplos casos em uma mesma linha, desse jeito
        estacao = 'VERÃO'
            break
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'OUTONO'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'INVERNO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'PRIMAVERA'
            break
        default:
            estacao = 'INDEFINIDA'
            break
    }

    if (estacao == 'VERÃO') {
        saída.innerHTML==`<p>No mês de ${mes}, estamos na estação <strong>${estacao}</strong>. </br>
        Os melhores lugares para a sua viagem são: As Praias do Nordeste, Nova Zelândia e a Austrália!</p>`
    }else if (estacao == 'OUTONO') {
        saída.innerHTML=`<p>No mês de ${mes}, estamos na estação <strong>${estacao}</strong>. </br>
        Os melhores lugares para a sua viagem são: Bariloche, Machu Picchu, Cusco, Lima e Paraty!</p>`
    }else if (estacao == 'INVERNO') {
        saída.innerHTML=`<p>No mês de ${mes}, estamos na estação <strong>${estacao}</strong>. </br>
        Os melhores lugares para a sua viagem são: Argentina, Chile e Porto de Galinhas!</p>`
    }else {
        saída.innerHTML=`<p>No mês de ${mes}, estamos na estação <strong>${estacao}</strong>. </br>
        Os melhores lugares para a sua viagem são: Patagônia, Argentina, Chilena, Balneário Camboriú, Beto Carrero e Gramado!</p>`
}
}