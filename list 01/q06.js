// quantidade de iguais

// funcao que recebe tres numeros
const igualdade = (num1, num2, num3) => {
    // checa se os numeros sao todos iguais (3 iguais)
    if (num1 == num2 && num2 == num3) return "Todos os números são iguais"

    else{
        // checa se todos sao diferentes (0 iguais)
        if (num1 != num2 && num2 != num3 && num3 != num1) return "Não há números iguais"
        // caso que sobrou: dois sao iguais
        else return "2 números são iguais"
    }
}
// chamada da funcao
const resultado = igualdade(0,1,3)
// saida
console.log(resultado)
