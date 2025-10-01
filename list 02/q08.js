// tamanho de string

const tamanho = (str) => {

    const [x, ...xs] = str

    if (xs == '') return 1

    else return 1 + tamanho(xs)
}

console.log(tamanho('cinco'))