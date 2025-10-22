// soma de n multiplicado por 1 até 10

// funcao que recebe um numero como argumento e retorna a soma de n, 2*n, ..., 10*n
const multiSoma = (n, mult = 10) => { // o multiplicador eh inicializado em 0 e diminuira na chamada recursiva
     // caso base: quando o mult chegar em 1 significa que chegou na ultima soma necessaria
     if (mult == 1) return n
     // passo indutivo: multisomaN = 10*n + (10-1)*n + ... + (10-9)*n
     else return (n*mult)+multiSoma(n, mult-1)
}
// chamada da funcao
const resultado = multiSoma(2)
// saida
console.log(resultado)

