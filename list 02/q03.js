// soma de naturais

const soma = (num) => {

    if (num == 0) return 0

    else {

        return soma(num-1)+num
    }
}

const resultado = soma(5)

console.log(resultado)