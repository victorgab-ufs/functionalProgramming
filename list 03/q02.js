// último elemento

// funcao que recebe lista como argumento e retorna o ultimo elemento (indice = tamanho_da_lista-1)
const ultimo = (lista) => `O último elemento é ${lista[lista.length-1]}`
// funcao que recebe lista como argumento e retorna penultimo elemento da lista
const penultimo = (lista) => `O penúltimo elemento é ${lista[lista.length-2]}`

// funcao que chama as funcoes ultimo e penultimo
const resultado = (lista = [1, 2, 2, 40, 20]) => {

    return `${ultimo(lista)}\n${penultimo(lista)}`

}
//saida
console.log(resultado())
