// ou-exclusivo

const ouExclusivo = (valor1, valor2) => {

    return (valor1 || valor2) && (!(valor1 && valor2))
}

const resultado = ouExclusivo(false, false)

console.log(resultado)