// ou-exclusivo

// funcao que recebe dois valores (boolean -> true, false) e retorna o ou-exclusivo (xor)
const ouExclusivo = (valor1, valor2) => {
    // calculo do ou exclusivo (disjuncao) conjuncao (negacao_da_conjuncao) -> (AvB) ^ ~(A^B)
    return (valor1 || valor2) && (!(valor1 && valor2))
}
// chamada da funcao
const resultado = ouExclusivo(false, false)
// saida
console.log(resultado)
