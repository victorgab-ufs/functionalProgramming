// binário para decimal

// funcao que recebe numero binario em formato de string e retorna seu valor em decimal
const bin2dec = (str) => {
    // se o comprimento da string for 0 , retorna 0 (a soma)
    if (str.length == 0) return 0

    else {
        // separa o primeiro termo (x) do resto da string
        const [x, ...xs] = str
        // x == '1' -> 2*(tamanho_da_string-1) + recursao do restante | Ex.: "101" = 5
        // x != '1' -> retorna somente o restante (ja que 0*n = 0)    |       (1*2²)+(0*2¹)+(1*2^0) = 4+0+1 = 5
        return x == '1' ? 2**(str.length-1)+bin2dec(xs) : bin2dec(xs)
    }
}
// chamada da funcao
const resultado = bin2dec('101100')
// saida
console.log(resultado)
