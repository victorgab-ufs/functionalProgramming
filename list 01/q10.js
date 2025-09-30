// citação bibliografica

const citacao = (nome) => (sobrenome) => `${sobrenome}, ${nome}.`

const resultado = citacao("Victor")("Santos")

console.log(resultado)