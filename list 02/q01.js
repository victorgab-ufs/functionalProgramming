// n-ésimo termo

const termo = (num) => {

    if (num == 1) return 3

    else {

        return 2*termo(num-1)
    }
}

const resultado = termo(5)

console.log(resultado)