// somar multiplos de 3 e multiplos de 5 menores que 1000

/**
 * funcao range() fornecida pelo professor
 *
 * Retorna um conjunto de números entre um número inicial e um número final incrementado
 * sequencialmente por um número fixo (passo), começando com o número inicial ou
 * o número final, dependendo de qual é menor.
 * Exemplo: range(3,9) ---> [3,4,5,6,7,8,9]
 * Exemplo: range(8,0,2) ---> [8,6,4,2,0]
 * Exemplo: range(1,5,0.5) ---> [1,1.5,2,2.5,3,3.5,4,4.5,5]
 */
const range = (start, end, step = 1) => {
    // Testa se os 3 primeiros argumentos são números finitos,
    // usando Array.every() e Number.isFinite()
    const allNumbers = [start, end, step].every(Number.isFinite)
    // Lança um erro se algum dos 3 primeiros argumentos não for um número finito.
    if (!allNumbers) {
      throw new TypeError('range() espera apenas números finitos como argumentos.')
    }
    // Assegura que o passo é sempre um número positivo.
    if (step <= 0) {
      throw new Error('passo deve ser um número maior que zero.')
    }
    // Quando o número inicial é maior do que o número final,
    // modifica o passo para decrescer em vez de incrementar.
    if (start > end) {
      step = -step
    }
    // Determina o comprimento do conjunto a ser retornado.
    // O comprimento é incrementado em 1 após Math.floor().
    // Isto assegura que o número final é listado se estiver dentro do intervalo.
    const length = Math.floor(Math.abs((end - start) / step)) + 1
    // Preenche um novo conjunto com os números do intervalo
    // usando o Array.from() com uma função de mapeamento.
    // Finalmente, retorna o novo array.
    return Array.from(Array(length), (x, index) => start + index * step)
}

// cria lista de 1 ate 999
const lista = range(1, 999)

// funcao que recebe lista e retorna a soma de todos os multiplos de 3 e 5 menores que 1000
// filter cria uma copia da lista apenas com multiplos de 3 ou 5 
// reduce soma os elementos dessa copia criada
const soma = (lista) => (lista.filter(x => x % 3 == 0 || x % 5 == 0)).reduce((acc, n) => acc + n, 0)
// saida
console.log(soma(lista))
