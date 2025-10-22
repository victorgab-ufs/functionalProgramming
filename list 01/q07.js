// menor valor entre 3

// funcao auxiliar que recebe dois numeros e retorna o menor entre eles
const menorValorAux = (num1, num2) => num1 < num2 ? num1 : num2 // operador ternario -> num1 < num2 -> se sim, retorne o primeiro. Caso não, retorne o segundo (evita uso de if e else)
// recebe tres numeros e retorna o menor entre eles
const menorValor = (num1, num2, num3) => {
    // compara se o menor valor entre n1 e n2 (obtido da funcao auxiliar) eh menor que o terceiro
    // caso sim, ele e retornado
    if (menorValorAux(num1, num2) < num3) return `O menor número é: ${menorValorAux(num1, num2)}`
    // caso nao, o terceiro numero e retornado
    else return `O menor valor é: ${num3}`
}
// chamada da funcao
const resultado = menorValor(30,20,5)
// saida
console.log(resultado)
