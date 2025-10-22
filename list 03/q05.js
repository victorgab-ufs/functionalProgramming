// diferença entre o quadrado da soma de 1 a 10 e a soma dos quadrados de 1 a 10

// (1+2+3+4+5+6+7+8+9+10)² - (1²+2²+3²+4²+5²+6²+7²+8²+9²+10²)

// lista com os numeros naturais de 1 a 10
const naturais = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// funcao que recebe uma lista como argumento e retorna o resultado da expressao apresentada acima
const dif = (lista) => {
    // funcao soma que sera utilizada no reduce
    const sum = (acc, x) => acc + x
    // quadrado da soma de 1 a 10 (reduce faz a soma dos elementos da lista)
    const quadSum = (lista.reduce(sum, 0))**2
    // soma dos quadrados (map gera uma copia da lista com todos elementos ao quadrado e reduce soma os elementos dessa copia gerada)
    const sumQuad = (lista.map(n => n**2)).reduce(sum, 0)
    // subtracao requisitada
    return quadSum - sumQuad
}
// chamada da funcao
const resultado = dif(naturais)
// saida
console.log(resultado)
