// carrinho de compras

// registro com elementos representando produtos e seus atributos (nome, preco, qtd, fragilidade)
const carrinho = [

    {nome: "arroz", precoUnitario: 5, quantidade: 3, fragil: false},
    {nome: "feijão", precoUnitario: 4, quantidade: 2, fragil: false},
    {nome: "biscoito", precoUnitario: 2, quantidade: 5, fragil: true},
    {nome: "carne", precoUnitario: 30, quantidade: 2, fragil: false},
    {nome: "ovos", precoUnitario: 15, quantidade: 2, fragil: true},
]

// taxa de cambio

// funcao que recebe lista e taxa e troca valores unitarios de acordo com essa taxa (de cambio) recebida
const cambio = (lista) => (taxa) => { 
    // map cria lista substituindo os elementos (nesse caso cada {}) pelo seu preco (elemento.precoUnitario -> interacao com o atributo de cada elemento)modificado
    return lista.map(elemento => elemento.precoUnitario*taxa)
}
// chamada da funcao cambio
const resultado1 = cambio([...carrinho])(0.5)
// saida dos valores apos cambio
console.log(`Preços após câmbio: ${resultado1}\n`)

// valor total gasto

// funcao que recebe lista como argumento e retorna a soma dos produtos preco*qtd
const valorTotal = (lista) => {

    // funcao soma que sera utilizada pelo reduce
    const soma = (num, acc) => num + acc
    // mapeia a lista para uma lista com o preco total dos produtos e executa a reducao (soma)
    return (lista.map(elemento => elemento.precoUnitario*elemento.quantidade)).reduce(soma, 0)
}
// chamada da funcao valorTotal
const resultado2 = valorTotal([...carrinho])
// saida do preco total do carrinho
console.log(`Preço total: R$ ${resultado2}\n`)

// valor com desconto

// funcao que recebe lista e desconto (em %) como argumento e retorna o valor total do carrinho com o desconto desejado
const descontado = (valor, descontoPercentual) => {
    // calcula o valor apos desconto
    return valor*((100-descontoPercentual)/100)
}
// chamada da funcao descontado utilizando o resultado2 (valorTotal do carrinho)
const resultado3 = descontado(resultado2, 10)
// apresenta o valor apos o desconto
console.log(`Com desconto: R$ ${resultado3}\n`)

// valor de produtos com certa letra

// funcao que recebe lista e letra como argumento e retorna a soma dos valores dos produtos que comecam com aquela letra
const produtosPorLetra = (lista, letra) => {
    // filter -> filtra os elementos cuja primeira letra (nome[0]) eh a selecionada
    // map -> cria copia da lista apenas com o preco total dos elementos que sobraram
    // reduce -> soma os precos totais
    return ((lista.filter(elemento => elemento.nome[0] == letra)).map(elemento => elemento.precoUnitario*elemento.quantidade)).reduce((acc, x) => acc + x, 0)
}
// chamada da funcao produtosPorLetra
const resultado4 = produtosPorLetra([...carrinho], 'a')
// apresenta valor da soma dos valores totais de produtos comecados pela letra desejada
console.log(`Valor de produtos com a inicial: ${resultado4}\n`)

// media de valor entre frageias e resistentes

// funcao que recebe lista como argumento e retorna media de valor dos produtos frageis
const mediaFrageis = (lista) => {
    // filtra os elementos que sao frageis
    const frageis = lista.filter(elemento => elemento.fragil == true)
    // retorna a quantidade de produtos frageis (soma da quantidade comprada de produtos frageis)
    const pesoFrageis = (frageis.map(elemento => elemento.quantidade)).reduce((acc, x) => acc + x, 0)
    // map -> cria lista com o preco total de cada produto fragil
    // reduce -> soma os elementos dessa nova lista
    // ao final desses processos o resultado eh dividido pelo peso (soma das quantidades) para calcular a media
    return ((frageis.map(elemento => elemento.precoUnitario*elemento.quantidade)).reduce((acc,x) => acc + x, 0))/pesoFrageis

}

// funcao que recebe lista como argumento e retorna media de valor dos produtos resistentes (nao frageis)
const mediaResistentes = (lista) => {
    // filtra os elementos que nao sao frageis
    const resistentes = lista.filter(elemento => elemento.fragil == false)
    // retorna a quantidade de produtos nao frageis (soma da quantidade comprada de produtos nao frageis)
    const pesoResistentes = (resistentes.map(elemento => elemento.quantidade)).reduce((acc, x) => acc + x, 0)
    // map -> cria lista com o preco total de cada produto nao fragil
    // reduce -> soma os elementos dessa nova lista
    // ao final desses processos o resultado eh dividido pelo peso (soma das quantidades) para calcular a media
    return ((resistentes.map(elemento => elemento.precoUnitario*elemento.quantidade)).reduce((acc,x) => acc + x, 0))/pesoResistentes

}
// chamada das funcoes mediaFrageis e mediaResistentes
const resultado5 = `Media de valor frágeis: ${mediaFrageis(carrinho)}\nMedia de valor resistentes: ${mediaResistentes(carrinho)}`
// apresenta a media de valor dos produtos frageis e dos produtos nao frageis
console.log(resultado5)

