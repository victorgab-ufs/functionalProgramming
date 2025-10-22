// soma de naturais

// funcao que recebe um numero como argumento e retorna a soma de 1 ate o numero
const soma = (num) => {
    // caso base: se o numero atual for 0, retorna 0 (adicionando-o a soma e finalizando a recursao)
    if (num == 0) return 0

    else {
        // passo indutivo -> soma ate n e: n + soma dos elementos de n-1 ate 1
        return soma(num-1)+num // chamada recursiva
    }
}

// chamada da funcao
const resultado = soma(5)
// saida
console.log(resultado)
