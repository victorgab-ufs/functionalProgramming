// diferença entre o quadrado da soma de 1 a 10 e a soma dos quadrados de 1 a 10

// (1+2+3+4+5+6+7+8+9+10)² - (1²+2²+3²+4²+5²+6²+7²+8²+9²+10²)

const naturais = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const dif = (lista) => {

    const sum = (acc, x) => acc + x
    const quadSum = (lista.reduce(sum, 0))**2
    const sumQuad = (lista.map(n => n**2)).reduce(sum, 0)

    return quadSum - sumQuad
}

const resultado = dif(naturais)

console.log(resultado)