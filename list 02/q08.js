// tamanho de string

// funcao que recebe uma string como argumento e retorna o tamanho dela sem uso do .length
const tamanho = (str) => {
    // separa o primeiro caractere da lista (string) do resto
    const [x, ...xs] = str
    // caso base: se o resto separado eh um vazio, so ha um caractere, logo retorna 1
    if (xs == '') return 1
    // passo indutivo: soma 1 (x) e retorna recursivamente a funcao o resto da palavra (sem o primeiro caractere)
    else return 1 + tamanho(xs)
}
// saida
console.log(tamanho('cinco'))
