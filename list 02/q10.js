// inverter palavra

// funcao que recebe uma string como argumento e retorna ela invertida
const inverter = (str) => {
    // caso base: se o tamanho da string for 0, retorna um vazio, ja que nao tem o que inverter
    if (str.length == 0) return ''
    // separa o primeiro caractere do restante da string
    const [x, ...xs] = str
    // passo indutivo: retorna o resto da palavra para ser invertida e coloca o primeiro termo atual na ultima posicao
    return inverter(xs)+[x]
}
// saida
console.log(inverter('socorram'))
