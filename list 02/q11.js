// soma dos quadrados até n

const somaQuadrados = (numero) => {

    if (numero == 0) return 0

    else return (numero**2)+somaQuadrados(numero - 1)
}

const resultado = somaQuadrados(3)

console.log(resultado)