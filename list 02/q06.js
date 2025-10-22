// resto da divisão entre dois números

// funcao que recebe dois numeros como argumento e retorna o resto da divisao do primeiro pelo segundo
const resto = (dividendo, divisor) => {
    // caso base: se o dividendo for menor, ele mesmo eh o resto da divisao
    if (dividendo < divisor) return dividendo

    else {
        // passo indutivo: eh tirado o divisor do dividendo ate que esse seja menor, caindo no caso base
        return resto(dividendo - divisor, divisor)
    }
}
// chamada da funcao
const resultado = resto(13, 5)
// saida
console.log(resultado)
