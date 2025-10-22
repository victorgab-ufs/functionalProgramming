// Checar se é triângulo

// funcao que recebe como parametro os tres lados de um triangulo
const triangulo = (lado1, lado2, lado3) => {
    // checa se ao menos um dos lados eh igual a 0
    if (lado1 == 0 || lado2 == 0 || lado3 == 0) return "Não é triângulo"
    // nao sendo...
    else{
        // se o comprimento de todos os lados forem menores que a soma dos comprimentos dos outros dois eh triangulo
        if ((lado1 < lado2 + lado3) && (lado2 < lado1 + lado3) && (lado3 < lado2 + lado1)) return "É triângulo"
        // caso contrario nao eh triangulo
        else return "Não é triângulo"
    }

}
// chamada da funcao
const resultado = triangulo(1, 5, 5)
// saida
console.log(resultado)
