// n-ésimo termo

// funcao que recebe um numero e retorna o n-esimo termo da sequencia: 3, 6, 12, 24...
const termo = (num) => {
    // caso base: se o numero atual for 1, retorna 3 (primeiro elemento da sequencia)
    if (num == 1) return 3

    else {
        // passo indutivo, o numero seguinte sempre eh o dobro do numero anterior e por ai vai...
        return 2*termo(num-1)
    }
}
// chamada da funcao
const resultado = termo(5)
// saida
console.log(resultado)
