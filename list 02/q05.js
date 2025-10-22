// potencia natural de 2

// funcao que recebe um numero como argumento e retorna 2 elevado a ele
const pot = (n) => {
    // caso base: n^0 = 1
    if (n == 0) return 1
    // passo indutivo: 2^n = 2 * 2^n-1
    else return 2*pot(n-1)
}
// chamada da funcao
const resultado = pot(10)
// saida
console.log(resultado)
