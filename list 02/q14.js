// Conjectura de Collatz -> par (n/2), ímpar (n * 3 + 1)

const collatz = (n, passos = 0) => {

    if (n == 1) return passos

    else {

        if (n % 2 == 0) return collatz(n/2, passos + 1)

        else return collatz(n*3+1, passos + 1)
    }
}

console.log(collatz(10))