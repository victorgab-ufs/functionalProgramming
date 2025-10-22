// Conjectura de Collatz -> par (n/2), ímpar (n * 3 + 1)

// funcao que recebe um numero como argumento e retorna a conjectura de collatz, como expresso acima
const collatz = (n, passos = 0) => { // passos foi implementado para contar quantas operacoes foram necessarias para se obter 1 como resultado
    // caso base: se o numero 1 for obtido retorna o numero de passos ate se chegar nele
    if (n == 1) return passos

    else {
        // passo indutivo 1: se o numero for par, a funcao eh chamada com ele dividido pela metade e mais um passo
        if (n % 2 == 0) return collatz(n/2, passos + 1)
        // passo indutivo 2: se o numero for impar, a funcao eh retorna com seu triplo + 1 e mais um passo
        else return collatz(n*3+1, passos + 1)
    }
}
// saida + chamada da funcao
console.log(collatz(10))
