// soma de n multiplicado por 1 até 10

const multiSoma = (n, mult = 10) => {

     if (mult == 1) return n

     else return (n*mult)+multiSoma(n, mult-1)
}

const resultado = multiSoma(2)

console.log(resultado)

