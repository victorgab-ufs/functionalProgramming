// eliminar elemento

// funcao que recebe como argumentos um elemento e uma lista e retorna uma copia da lista sem esse elemento escolhido
const eliminar = (elemento, lista) => {

    // ...spread -> aceita qualquer numero de argumentos (dentro de colchetes cria uma copia da lista)
    // .filter(argumento => comparacao(os que obedecerem permanecem na lista))
    return [...lista].filter(x => x != elemento) // filtra os elementos que sao diferentes daquele escolhido
}
// chamada da funcao
const resultado = eliminar(7, [1, 7, 2, 7, 3])
// saida
console.log(resultado)
