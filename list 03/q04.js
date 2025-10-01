// somar multiplos de 3 e multiplos de 5 menores que 1000

const range = (start, end, step = 1) => {
    
    const allNumbers = [start, end, step].every(Number.isFinite)
    
    if (!allNumbers) {
      throw new TypeError('range() espera apenas números finitos como argumentos.')
    }
    
    if (step <= 0) {
      throw new Error('passo deve ser um número maior que zero.')
    }
    
    
    if (start > end) {
      step = -step
    }
    
    const length = Math.floor(Math.abs((end - start) / step)) + 1
    
    return Array.from(Array(length), (x, index) => start + index * step)
}

const lista = range(1, 999)

const soma = (lista) => (lista.filter(x => x % 3 == 0 || x % 5 == 0)).reduce((acc, n) => acc + n, 0)

console.log(soma(lista))