// citação bibliografica

// funcao currificada que recebe nome e sobrenome e formata como uma citacao bibliografica
const citacao = (nome) => (sobrenome) => `${sobrenome}, ${nome}.`
// chamada da funcao
const resultado = citacao("Victor")("Santos")
// saida
console.log(resultado)
