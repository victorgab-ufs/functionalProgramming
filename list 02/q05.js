// potencia natural de 2

const pot = (n) => {

    if (n == 0) return 1

    else return 2*pot(n-1)
}

const resultado = pot(10)

console.log(resultado)