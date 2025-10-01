// soma de itens de uma lista (considerando que um item pode ser outra lista)

const soma = (lista) => {

    if (lista.length == 0) return 0

    else {
        
        const sum = (acc, x) => acc + x
        const [x, ...xs] = lista

        if (x.length > 1) return x.reduce(sum, 0)+soma(xs)
    
        else return x+soma(xs)
    }
}

const resultado = soma([1, 2, [3, 4]])

console.log(resultado)