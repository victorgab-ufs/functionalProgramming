// velocidade

// funcao currificada que recebe tempo e deslocamento e retorna o valor da velocidade
const velocidade = (tempo) => (deslocamento) => {

    return `A velocidade é: ${deslocamento/tempo} m/s`
}
// chamada da funcao
const resultado = velocidade(10)(100)
// saida
console.log(resultado)
