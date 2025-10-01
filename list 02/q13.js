// binário para decimal

const bin2dec = (str) => {

    if (str.length == 0) return 0

    else {

        const [x, ...xs] = str

        return x == '1' ? 2**(str.length-1)+bin2dec(xs) : bin2dec(xs)
    }
}

const resultado = bin2dec('101100')

console.log(resultado)