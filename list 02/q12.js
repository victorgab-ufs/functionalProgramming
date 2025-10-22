// repetição de string

// funcao que recebe uma string e um inteiro n retorna n dessa string
const repetir = (str, quantidade) => {
    // caso base 1: se o numero de repeticoes for igual a zero, retorna uma string vazia
    if (quantidade == 0) return ''
    // caso nao...
    else {
        // passo indutivo: retorna a string, um espaco e chama novamente a funcao, diminuindo a quantidade em 1 unidade
        return str + ' ' + repetir(str, quantidade - 1)
        
    }

}
// saida
console.log(repetir('água', 3))
