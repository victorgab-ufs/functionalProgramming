// resto da divisão entre dois números

const resto = (dividendo, divisor) => {

    if (dividendo < divisor) return dividendo

    else {
        
        return resto(dividendo - divisor, divisor)
    }
}

const resultado = resto(13, 5)

console.log(resultado)