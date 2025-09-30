// menor valor entre 3

const menorValorAux = (num1, num2) => num1 < num2 ? num1 : num2

const menorValor = (num1, num2, num3) => {

    if (menorValorAux(num1, num2) < num3) return `O menor número é: ${menorValorAux(num1, num2)}`
    else return `O menor valor é: ${num3}`
}

const resultado = menorValor(30,20,5)

console.log(resultado)