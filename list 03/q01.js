// carrinho de compras

const carrinho = [

    {nome: "arroz", precoUnitario: 5, quantidade: 3, fragil: false},
    {nome: "feijão", precoUnitario: 4, quantidade: 2, fragil: false},
    {nome: "biscoito", precoUnitario: 2, quantidade: 5, fragil: true},
    {nome: "carne", precoUnitario: 30, quantidade: 2, fragil: false},
    {nome: "ovos", precoUnitario: 15, quantidade: 2, fragil: true},
]

// taxa de cambio

const cambio = (lista) => (taxa) => { 

    return lista.map(elemento => elemento.precoUnitario*taxa)
}

const resultado1 = cambio([...carrinho])(0.5)

console.log(`Preços após câmbio: ${resultado1}\n`)

// valor total gasto

const valorTotal = (lista) => {

    const soma = (num, acc) => num + acc

    return (lista.map(elemento => elemento.precoUnitario*elemento.quantidade)).reduce(soma, 0)
}

const resultado2 = valorTotal([...carrinho])

console.log(`Preço total: R$ ${resultado2}\n`)

// valor com desconto

const descontado = (valor, descontoPercentual) => {

    return valor*((100-descontoPercentual)/100)
}

const resultado3 = descontado(resultado2, 10)

console.log(`Com desconto: R$ ${resultado3}\n`)

// valor de produtos com certa letra

const produtosPorLetra = (lista, letra) => {

    return ((lista.filter(elemento => elemento.nome[0] == letra)).map(elemento => elemento.precoUnitario*elemento.quantidade)).reduce((acc, x) => acc + x, 0)
}

const resultado4 = produtosPorLetra([...carrinho], 'a')

console.log(`Valor de produtos com a inicial: ${resultado4}\n`)

// media de valor entre frageias e resistentes

const mediaFrageis = (lista) => {

    const frageis = lista.filter(elemento => elemento.fragil == true)
    const pesoFrageis = (frageis.map(elemento => elemento.quantidade)).reduce((acc, x) => acc + x, 0)

    return ((frageis.map(elemento => elemento.precoUnitario*elemento.quantidade)).reduce((acc,x) => acc + x, 0))/pesoFrageis

}

const mediaResistentes = (lista) => {

    const resistentes = lista.filter(elemento => elemento.fragil == false)
    const pesoResistentes = (resistentes.map(elemento => elemento.quantidade)).reduce((acc, x) => acc + x, 0)

    return ((resistentes.map(elemento => elemento.precoUnitario*elemento.quantidade)).reduce((acc,x) => acc + x, 0))/pesoResistentes

}

const resultado5 = `Media de valor frágeis: ${mediaFrageis(carrinho)}\nMedia de valor resistentes: ${mediaResistentes(carrinho)}`

console.log(resultado5)

