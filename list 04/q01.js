// eliminar elemento

const eliminar = (elemento, lista) => {

    return [...lista].filter(x => x != elemento)
}

const resultado = eliminar(7, [1, 7, 2, 7, 3])

console.log(resultado)