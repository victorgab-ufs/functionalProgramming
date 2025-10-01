// quociente entre 2 numeros

const resto = (dividendo, divisor) => {

    if (dividendo < divisor) return dividendo

    else {
        
        return resto(dividendo - divisor, divisor)
    }
}

const quociente = (dividendo, divisor) => {

    return (dividendo - resto(dividendo, divisor))/divisor
}

const resultado = quociente(17, 2)

console.log(resultado)