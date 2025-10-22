// fatorial

// funcao que recebe um numero como argumento e retorna o fatorial dele (n!)
const fatorial = (num) => {
    // caso base 1: 0! = 1
    if (num == 0) return 1

    else {
        // caso base 2: 1! = 1
        if (num == 1) return 1

        else {
        // passo indutivo (recursao): fatorial de um numero -> n! = n * (n-1)!
        return num*fatorial(num-1)
        }
    }

}
// chamada da funcao
const resultado = fatorial(5)
// saida
console.log(resultado)
