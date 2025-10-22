// quarta potência

// funcao auxiliar que recebe um numero e calcula seu quadrado
const quadrado = (num) => num**2
// funcao que recebe um numero e calcula a quarta potencia
const quarta = (num) => {
    // utilizacao da funcao auxiliar para calcular o quadrado de um numero e o quadrado do resultado obtido
    return quadrado(quadrado(num))
}
// chamada da funcao
const resultado = quarta(2)
// saida
console.log(resultado)
