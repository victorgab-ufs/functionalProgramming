// escrever algarismo por extenso

const algarismo = (num) => {

const numeros = Object.freeze(['zero','one','two','three','four','five','six','seven','eight','nine'])

return numeros[num]

}

const resultado = algarismo(4)

console.log(resultado)