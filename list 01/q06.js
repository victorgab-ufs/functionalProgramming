// quantidade de iguais

const igualdade = (num1, num2, num3) => {

    if (num1 == num2 && num2 == num3) return "Todos os números são iguais"

    else{

        if (num1 != num2 && num2 != num3 && num3 != num1) return "Não há números iguais"

        else return "2 números são iguais"
    }
}

const resultado = igualdade(0,1,3)

console.log(resultado)