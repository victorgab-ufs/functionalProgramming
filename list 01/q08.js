// quarta potência

const quadrado = (num) => num**2

const quarta = (num) => {

    return quadrado(quadrado(3))
}

const resultado = quarta(2)

console.log(resultado)