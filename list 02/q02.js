// fibonacci

// funcao que recebe um numero como argumento e retorna o numero da sequencia de fibonacci na posicao representada por esse numero
const fib = (num) => {
    // caso base 1 -> se o numero atual for 0, retorna 0
    if (num == 0) return 0

    else { 
        // caso base 2 -> se o numero atual for 1, adiciona 1 a soma (primeiro termo da sequencia de fibonacci)
        if (num == 1) return 1
        
        else {
        // passo indutivo -> n da sequencia de fibonacci == anterior_do_anterior + anterior
        return fib(num-2)+fib(num-1)
        }
    
    }

}
// chamada da funcao
const resultado = fib(7)
// saida
console.log(resultado)
