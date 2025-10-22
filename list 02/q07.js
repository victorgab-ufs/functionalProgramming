// quociente entre 2 numeros

// funcao auxiliar que recebe dois numeros como argumento e retorna o resto da divisao do primeiro pelo segundo
const resto = (dividendo, divisor) => {
    // caso base: se o dividendo for menor, ele mesmo eh o resto da divisao
    if (dividendo < divisor) return dividendo

    else {
        // passo indutivo: eh tirado o divisor do dividendo ate que esse seja menor, caindo no caso base
        return resto(dividendo - divisor, divisor)
    }
}
// funcao que recebe dois numeros como argumento e retorna o quociente da divisao do primeiro pelo segundo
const quociente = (dividendo, divisor) => {
    // calculo do quociente -> q = (dividendo - resto) / divisor
    return (dividendo - resto(dividendo, divisor))/divisor
}
// chamada da funcao
const resultado = quociente(17, 2)
// saida
console.log(resultado)
