// escrever algarismo por extenso

// funcao que recebe um algarismo e retorna sua representacao por extenso
const algarismo = (num) => {
// lista com o nome dos algarismos (zero a nove)
const numeros = Object.freeze(['zero','one','two','three','four','five','six','seven','eight','nine'])
// retorna o nome do elemento inserido no input
return numeros[num]

}
// chamada da funcao
const resultado = algarismo(4)
// saida
console.log(resultado)
