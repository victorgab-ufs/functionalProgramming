// soma de itens de uma lista (considerando que um item pode ser outra lista)

// funcao que recebe uma lista como argumento e, por recursao, retorna a soma dos seus elementos
const soma = (lista) => {
    // caso base -> se o tamanho da lista for 0, adiciona 0 a soma e finaliza a recursao
    if (lista.length == 0) return 0

    else {
        // funcao soma com um numero e um acumulador para ser utilizada posteriormente no reduce
        const sum = (acc, x) => acc + x
        // separa o primeiro elemento da lista do resto
        const [x, ...xs] = lista
        // se o primeiro elemento da lista tiver tamanho > 1 (for uma lista) eh utilizado o reduce para somar seus elementos 
        // .reduce(sum, 0) -> soma do elemento (que eh lista) com o resto da lista
        if (x.length > 1) return x.reduce(sum, 0)+soma(xs)
        // nao sendo uma lista ele eh somado recursivamente ao resto da lista
        else return x+soma(xs)
    }
}
// chamada da funcao
const resultado = soma([1, 2, [3, 4]])
// saida
console.log(resultado)
