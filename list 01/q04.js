// classificar triângulo

// funcao que recebe como parametros os tres lados de um triangulo
const triangulo = (lado1, lado2, lado3) => {
    // checa se os tres lados sao iguais -> equilatero
    if (lado1 == lado2 && lado2 == lado3) return "o triangulo e equilatero"
    else {
        // checa se os tres lados sao diferentes -> escaleno
        if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) return "o triangulo e escaleno"
        // ultimo caso -> eh isosceles
        else return "o triangulo e isosceles"
    }

}
// chamada da funcao
const resultado = triangulo(2,3,1)
// saida
console.log(resultado)
