// soma dos quadrados até n

// funcao que recebe um numero e retorna a soma dos quadrados de 1 ate n (1² + 2² + ... + n²)
const somaQuadrados = (numero) => {
    // caso base: se o numero atual for 0, retorna 0 (0² = 0)
    if (numero == 0) return 0
    // passo indutivo: soma (de forma decrescente) = (n²) + ((n-1)²) + ... + 1²
    else return (numero**2)+somaQuadrados(numero - 1)
}
// chamada da funcao
const resultado = somaQuadrados(3)
// saida
console.log(resultado)
