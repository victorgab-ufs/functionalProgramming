// numero de vogais

// funcao que recebe uma string (se comporta como lista em JS) como argumento e retorna quantas vogais ela possui
const vogais = (str) => {

    // cria copia da palavra ([...str]) usando spread (...) e filtra as vogais
    const lista = [...str].filter(x => x == 'a' || x == 'i' || x == 'o' || x == 'u' || x == 'e')
    // calcula a quantidade de elementos (.length) da nova lista so com as vogais
    return `A palavra possui ${lista.length} vogais`

}

// chamada da funcao
const resultado = vogais('marrocos')
// saida
console.log(resultado)
