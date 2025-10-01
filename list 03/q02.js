// último elemento

const ultimo = (lista) => `O último elemento é ${lista[lista.length-1]}`

const penultimo = (lista) => `O penúltimo elemento é ${lista[lista.length-2]}`

const resultado = (lista = [1, 2, 2, 40, 20]) => {

    return `${ultimo(lista)}\n${penultimo(lista)}`

}

console.log(resultado())