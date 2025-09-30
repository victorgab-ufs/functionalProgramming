// velocidade

const velocidade = (tempo) => (posicao) => {

    return `A velocidade é: ${posicao/tempo} m/s`
}

const resultado = velocidade(10)(100)

console.log(resultado)