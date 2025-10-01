// numero de vogais

const vogais = (str) => {
    
    const lista = [...str].filter(x => x == 'a' || x == 'i' || x == 'o' || x == 'u' || x == 'e')
    return `A palavra possui ${lista.length} vogais`

}

const resultado = vogais('marrocos')

console.log(resultado)